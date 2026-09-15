
import sys, re, json, hashlib, sqlite3, webbrowser
from pathlib import Path
from urllib.parse import quote, urlparse
from html import unescape

import requests
from bs4 import BeautifulSoup
from PySide6.QtCore import Qt, QThread, Signal, QSize, QUrl
from PySide6.QtGui import QPixmap, QDesktopServices
from PySide6.QtWidgets import (
    QApplication, QMainWindow, QWidget, QVBoxLayout, QHBoxLayout, QGridLayout,
    QLabel, QLineEdit, QPushButton, QSpinBox, QComboBox, QScrollArea,
    QCheckBox, QMessageBox, QFileDialog, QProgressBar, QGroupBox
)

APP_DIR = Path(__file__).resolve().parent
CONFIG = APP_DIR / "config.json"
DB = APP_DIR / "image_finder.sqlite3"
DEFAULT_OUTPUT = Path.home() / "ImageLibrary"

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                  "AppleWebKit/537.36 (KHTML, like Gecko) "
                  "Chrome/126.0 Safari/537.36"
}

def slug(s):
    s = re.sub(r'[<>:"/\\|?*]+', " ", s or "")
    s = re.sub(r"\s+", " ", s).strip().rstrip(".")
    return s[:120] or "Untitled"

def load_config():
    if CONFIG.exists():
        try:
            return json.loads(CONFIG.read_text(encoding="utf-8"))
        except Exception:
            pass
    return {"output": str(DEFAULT_OUTPUT), "sources": ["Bing Images", "DuckDuckGo Images"]}

def save_config(c):
    CONFIG.write_text(json.dumps(c, indent=2), encoding="utf-8")

def init_db():
    con = sqlite3.connect(DB)
    con.execute("""CREATE TABLE IF NOT EXISTS images(
        id INTEGER PRIMARY KEY, query TEXT, title TEXT, thumb TEXT,
        image_url TEXT, source_url TEXT, source TEXT, hash TEXT UNIQUE,
        downloaded INTEGER DEFAULT 0
    )""")
    con.commit()
    con.close()

def fetch_bing(query, limit):
    # Public search-page parser. No CAPTCHA/anti-bot bypass is attempted.
    url = "https://www.bing.com/images/search?q=" + quote(query)
    r = requests.get(url, headers=HEADERS, timeout=20)
    r.raise_for_status()
    soup = BeautifulSoup(r.text, "html.parser")
    out, seen = [], set()
    for a in soup.select("a.iusc"):
        raw = a.get("m")
        if not raw:
            continue
        try:
            m = json.loads(unescape(raw))
        except Exception:
            continue
        img = m.get("turl") or m.get("murl")
        thumb = m.get("turl") or img
        src = m.get("purl") or m.get("murl") or url
        title = unescape(m.get("t") or query)
        if not img or img in seen:
            continue
        seen.add(img)
        out.append({"title": title, "thumb": thumb, "image_url": img,
                    "source_url": src, "source": "Bing Images"})
        if len(out) >= limit:
            break
    return out

def fetch_ddg(query, limit):
    # DuckDuckGo image results require a session token. This uses its normal
    # public endpoint and does not try to evade challenges.
    s = requests.Session()
    s.headers.update(HEADERS)
    home = s.get("https://duckduckgo.com/", timeout=20)
    m = re.search(r'vqd=([\d-]+)', home.text)
    if not m:
        raise RuntimeError("DuckDuckGo did not provide a search token.")
    token = m.group(1)
    r = s.get("https://duckduckgo.com/i.js",
              params={"q": query, "o": "json", "vqd": token, "f": ",,,",
                      "p": "1"}, timeout=20)
    r.raise_for_status()
    data = r.json()
    out, seen = [], set()
    for x in data.get("results", []):
        img = x.get("image")
        if not img or img in seen:
            continue
        seen.add(img)
        out.append({
            "title": x.get("title") or query,
            "thumb": x.get("thumbnail") or img,
            "image_url": img,
            "source_url": x.get("url") or x.get("image") or "",
            "source": "DuckDuckGo Images"
        })
        if len(out) >= limit:
            break
    return out

class SearchWorker(QThread):
    results = Signal(list)
    error = Signal(str)
    def __init__(self, query, limit):
        super().__init__()
        self.query, self.limit = query, limit
    def run(self):
        all_results = []
        errors = []
        for fn in (fetch_bing, fetch_ddg):
            try:
                all_results += fn(self.query, self.limit)
            except Exception as e:
                errors.append(str(e))
        unique, seen = [], set()
        for x in all_results:
            key = x["image_url"]
            if key not in seen:
                seen.add(key)
                unique.append(x)
        if not unique and errors:
            self.error.emit("No results. " + " | ".join(errors[:2]))
        else:
            self.results.emit(unique[: self.limit * 2])

class Card(QWidget):
    changed = Signal()
    def __init__(self, item, parent=None):
        super().__init__(parent)
        self.item = item
        self.setFixedSize(220, 255)
        lay = QVBoxLayout(self)
        self.check = QCheckBox()
        self.check.setText("Select")
        self.check.stateChanged.connect(self.changed.emit)
        lay.addWidget(self.check)
        self.image = QLabel("Loading…")
        self.image.setAlignment(Qt.AlignCenter)
        self.image.setFixedSize(200, 155)
        self.image.setStyleSheet("background:#eee;border:1px solid #ccc;")
        lay.addWidget(self.image)
        title = QLabel(item["title"][:70])
        title.setWordWrap(True)
        title.setToolTip(item["title"])
        lay.addWidget(title)
        source = QLabel(item["source"])
        source.setStyleSheet("color:#777;")
        lay.addWidget(source)
        self.load_thumb()

    def load_thumb(self):
        try:
            r = requests.get(self.item["thumb"], headers=HEADERS, timeout=12)
            r.raise_for_status()
            pix = QPixmap()
            pix.loadFromData(r.content)
            if not pix.isNull():
                self.image.setPixmap(
                    pix.scaled(200, 155, Qt.KeepAspectRatio, Qt.SmoothTransformation)
                )
            else:
                self.image.setText("Preview unavailable")
        except Exception:
            self.image.setText("Preview unavailable")

    def selected(self):
        return self.check.isChecked()

class Main(QMainWindow):
    def __init__(self):
        super().__init__()
        init_db()
        self.cfg = load_config()
        self.cards = []
        self.worker = None
        self.setWindowTitle("Image Finder — Search & Organize")
        self.resize(1200, 820)
        self.build()

    def build(self):
        root = QWidget()
        main = QVBoxLayout(root)

        top = QGroupBox("Search")
        t = QGridLayout(top)
        t.addWidget(QLabel("Category"), 0, 0)
        self.category = QLineEdit("Roads & Highways")
        t.addWidget(self.category, 0, 1)
        t.addWidget(QLabel("Keyword"), 1, 0)
        self.keyword = QLineEdit("Jersey Barriers")
        self.keyword.returnPressed.connect(self.search)
        t.addWidget(self.keyword, 1, 1)
        t.addWidget(QLabel("Results / source"), 0, 2)
        self.count = QSpinBox()
        self.count.setRange(5, 100)
        self.count.setValue(30)
        t.addWidget(self.count, 0, 3)
        self.search_btn = QPushButton("Search")
        self.search_btn.clicked.connect(self.search)
        t.addWidget(self.search_btn, 1, 3)
        main.addWidget(top)

        bar = QHBoxLayout()
        self.status = QLabel("Ready")
        bar.addWidget(self.status)
        bar.addStretch()
        self.folder_btn = QPushButton("Choose Output Folder")
        self.folder_btn.clicked.connect(self.choose_folder)
        bar.addWidget(self.folder_btn)
        self.select_btn = QPushButton("Select All")
        self.select_btn.clicked.connect(self.select_all)
        bar.addWidget(self.select_btn)
        self.clear_btn = QPushButton("Clear")
        self.clear_btn.clicked.connect(self.clear_selection)
        bar.addWidget(self.clear_btn)
        self.open_btn = QPushButton("Open Source")
        self.open_btn.clicked.connect(self.open_selected_source)
        bar.addWidget(self.open_btn)
        self.download_btn = QPushButton("Download Selected")
        self.download_btn.clicked.connect(self.download_selected)
        bar.addWidget(self.download_btn)
        main.addLayout(bar)

        self.progress = QProgressBar()
        self.progress.setVisible(False)
        main.addWidget(self.progress)

        self.scroll = QScrollArea()
        self.scroll.setWidgetResizable(True)
        self.grid_widget = QWidget()
        self.grid = QGridLayout(self.grid_widget)
        self.grid.setAlignment(Qt.AlignTop)
        self.scroll.setWidget(self.grid_widget)
        main.addWidget(self.scroll, 1)

        self.setCentralWidget(root)
        self.apply_style()

    def apply_style(self):
        self.setStyleSheet("""
        QWidget { font-size: 13px; }
        QLineEdit, QSpinBox { padding: 7px; }
        QPushButton { padding: 8px 13px; }
        QGroupBox { font-weight: bold; padding-top: 14px; }
        """)

    def search(self):
        q = self.keyword.text().strip()
        if not q:
            QMessageBox.warning(self, "Search", "Enter a keyword.")
            return
        self.clear_cards()
        self.search_btn.setEnabled(False)
        self.status.setText("Searching public image-search results…")
        self.worker = SearchWorker(q, self.count.value())
        self.worker.results.connect(self.show_results)
        self.worker.error.connect(self.show_error)
        self.worker.finished.connect(lambda: self.search_btn.setEnabled(True))
        self.worker.start()

    def show_error(self, msg):
        self.status.setText(msg)

    def show_results(self, results):
        self.cards = []
        for i, item in enumerate(results):
            c = Card(item)
            self.cards.append(c)
            self.grid.addWidget(c, i // 4, i % 4)
        self.status.setText(f"{len(results)} results. Select images to download.")
        if not results:
            QMessageBox.information(self, "No results", "No public results were returned.")

    def clear_cards(self):
        for c in self.cards:
            c.deleteLater()
        self.cards = []

    def select_all(self):
        for c in self.cards:
            c.check.setChecked(True)

    def clear_selection(self):
        for c in self.cards:
            c.check.setChecked(False)

    def selected(self):
        return [c.item for c in self.cards if c.selected()]

    def choose_folder(self):
        p = QFileDialog.getExistingDirectory(self, "Choose output folder",
                                             self.cfg.get("output", str(DEFAULT_OUTPUT)))
        if p:
            self.cfg["output"] = p
            save_config(self.cfg)
            self.status.setText("Output: " + p)

    def open_selected_source(self):
        items = self.selected()
        if not items:
            QMessageBox.information(self, "Source", "Select at least one image.")
            return
        for x in items[:5]:
            webbrowser.open(x["source_url"] or x["image_url"])

    def download_selected(self):
        items = self.selected()
        if not items:
            QMessageBox.information(self, "Download", "Select at least one image.")
            return
        base = Path(self.cfg.get("output", str(DEFAULT_OUTPUT)))
        folder = base / slug(self.category.text()) / slug(self.keyword.text())
        folder.mkdir(parents=True, exist_ok=True)
        self.progress.setVisible(True)
        self.progress.setMaximum(len(items))
        self.progress.setValue(0)
        ok = 0
        for i, x in enumerate(items, 1):
            try:
                r = requests.get(x["image_url"], headers=HEADERS, timeout=25)
                r.raise_for_status()
                data = r.content
                if not data:
                    raise ValueError("empty file")
                h = hashlib.sha256(data).hexdigest()
                con = sqlite3.connect(DB)
                exists = con.execute("SELECT 1 FROM images WHERE hash=?", (h,)).fetchone()
                if not exists:
                    ext = Path(urlparse(x["image_url"]).path).suffix.lower()
                    if ext not in {".jpg",".jpeg",".png",".webp",".gif",".bmp"}:
                        ext = ".jpg"
                    name = f"{slug(self.keyword.text()).lower().replace(' ', '_')}_{i:03d}{ext}"
                    path = folder / name
                    n = 2
                    while path.exists():
                        path = folder / f"{path.stem}_{n}{path.suffix}"
                        n += 1
                    path.write_bytes(data)
                    con.execute("""INSERT OR IGNORE INTO images
                    (query,title,thumb,image_url,source_url,source,hash,downloaded)
                    VALUES (?,?,?,?,?,?,?,1)""",
                    (self.keyword.text(), x["title"], x["thumb"], x["image_url"],
                     x["source_url"], x["source"], h))
                    con.commit()
                    ok += 1
                con.close()
            except Exception:
                pass
            self.progress.setValue(i)
            QApplication.processEvents()
        self.progress.setVisible(False)
        self.status.setText(f"Saved {ok} new file(s) to {folder}")
        QMessageBox.information(
            self, "Finished",
            f"Saved {ok} new image(s).\n\n{folder}\n\n"
            "Only download/use images you are authorized to download and use."
        )

    def closeEvent(self, e):
        if self.worker and self.worker.isRunning():
            self.worker.terminate()
            self.worker.wait(1500)
        e.accept()

if __name__ == "__main__":
    app = QApplication(sys.argv)
    w = Main()
    w.show()
    sys.exit(app.exec())

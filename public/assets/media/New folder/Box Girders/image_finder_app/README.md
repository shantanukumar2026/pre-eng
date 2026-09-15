# Image Finder — Python Desktop App

## Features
- Search public image-search result pages without an API key.
- Bing Images + DuckDuckGo Images connectors.
- Thumbnail gallery with multi-select.
- Category/subcategory folders.
- Duplicate detection using SHA-256.
- Download selected images and retain source information in SQLite.
- Open source pages for licensing/purchase.
- No CAPTCHA bypass, proxy rotation, or anti-bot evasion.

## Install
Python 3.10+ recommended.

    python -m venv .venv
    .venv\Scripts\activate       # Windows
    pip install -r requirements.txt
    python app.py

## Use
1. Category: Roads & Highways
2. Keyword: Jersey Barriers
3. Click Search.
4. Select thumbnails.
5. Click Download Selected.

Output:
ImageLibrary/
  Roads & Highways/
    Jersey Barriers/

## Important
Search pages can change their HTML or rate-limit automated requests. This app does not attempt to defeat those controls.
Stock images may be copyrighted/licensed. Use only files you are authorized to download and use.

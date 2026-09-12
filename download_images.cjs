const fs = require('fs');
const path = require('path');
const https = require('https');

const IMAGES = [
  {
    name: 'precast_culvert_site.jpg',
    url: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'precast_factory_floor.jpg',
    url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'precast_structural_plan.jpg',
    url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'precast_crane_lift.jpg',
    url: 'https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'precast_transport_fleet.jpg',
    url: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80'
  }
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error('Status: ' + res.statusCode));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve());
      });
    }).on('error', (err) => {
      if (fs.existsSync(dest)) fs.unlinkSync(dest);
      reject(err);
    });
  });
}

async function run() {
  const dir = path.join(__dirname, 'public', 'assets', 'media');
  for (const img of IMAGES) {
    const dest = path.join(dir, img.name);
    try {
      console.log('Downloading', img.name, '...');
      await downloadFile(img.url, dest);
      const size = fs.statSync(dest).size;
      console.log('Saved', img.name, size, 'bytes');
    } catch (e) {
      console.error('Failed', img.name, e.message);
    }
  }
}

run();

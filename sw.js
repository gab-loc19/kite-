const CACHE = 'kite-v14';
const ASSETS = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const url = e.request.url;
  // Wind API: always go to network (live data), fall back gracefully if offline.
  if (url.includes('open-meteo.com')) {
    e.respondWith(fetch(e.request).catch(() => new Response('{"error":true,"reason":"offline"}', {headers:{'Content-Type':'application/json'}})));
    return;
  }
  // App shell: cache-first so it opens instantly and works offline.
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});

/* Montage — service worker
   Rôle unique : garder l'app en cache pour qu'elle démarre sans réseau.
   Les photos, vidéos et montages ne passent jamais par ici : ils vivent dans
   IndexedDB, sur le téléphone. */

const CACHE = 'montage-v1';
const SHELL = ['./', './index.html', './manifest.webmanifest'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => Promise.allSettled(SHELL.map(u => c.add(u))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  if (new URL(req.url).origin !== self.location.origin) return;

  /* Réseau d'abord : si tu es en ligne, tu as toujours la dernière version.
     Hors ligne, on ressert la copie en cache. */
  e.respondWith(
    fetch(req)
      .then(res => {
        if (res && res.ok){
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
        }
        return res;
      })
      .catch(() => caches.match(req).then(hit => hit || caches.match('./index.html')))
  );
});

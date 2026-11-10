/* The bridge's service worker, under the old worker's path so every installed copy
   of the old app finds it at its next check and is replaced by it. It deletes NO
   caches: dafaspace.github.io is one origin shared with /keymood/ and the other
   apps, and an old worker that deleted every cache but its own was wiping theirs.
   Navigations go to the bridge page, which sends the visitor on. */
var CACHE = 'fifths-bridge-1';
self.addEventListener('install', function(e) {
  e.waitUntil(caches.open(CACHE).then(function(c){ return c.add('./'); }).catch(function(){}));
  self.skipWaiting();
});
self.addEventListener('activate', function(e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function(e) {
  var req = e.request;
  if (req.method !== 'GET' || req.mode !== 'navigate') return;
  e.respondWith(fetch('./').then(function(res) {
    if (res.ok) { var c = res.clone(); e.waitUntil(caches.open(CACHE).then(function(x){ return x.put('./', c); })); }
    return res;
  }).catch(function(){ return caches.match('./'); }));
});

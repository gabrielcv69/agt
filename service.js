self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('my-cache').then((cache) => {
        return cache.addAll([
          '/',
          'working.html',
          '1entre_google_map.mov',
          '2attente_ecriture.mov',
          '3time-square.mov',
          '4arrive_time_square.mov',
          '5earth_vue.mov',
          'logo_map.png'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        return cachedResponse || fetch(event.request);
      })
    );
  });
  
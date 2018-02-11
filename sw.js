self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('video-store').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/index.js',
                '/style.css',
                '/img/fox1.jpg',
                '/img/fox2.jpg',
                '/img/fox3.jpg',
                '/img/fox4.jpg'
            ]);
        })
    );
});

self.addEventListener('fetch', function(e) {
    console.log(e.request.url);
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request);
        })
    );
});
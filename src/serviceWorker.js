export const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker
        .register('/sw.js')
        .then(function(registration) {
          // Registration was successful
          // console.log('ServiceWorker registration successful with scope: ', registration.scope);
        })
        .catch(function(err) {
          // registration failed :(
          // console.log('ServiceWorker registration failed: ', err);
        });
    });

    window.addEventListener('install', function(event) {
      console.log('WORKER: install event in progress.');
      event.waitUntil(
        /* The caches built-in is a promise-based API that helps you cache responses,
         as well as finding and deleting them.
      */
        caches
          /* You can open a cache by name, and this method returns a promise. We use
           a versioned cache name here so that we can remove old cache entries in
           one fell swoop later, when phasing out an older service worker.
        */
          .open(`v1::fundamentals`)
          .then(function(cache) {
            /* After the cache is opened, we can fill it with the offline fundamentals.
             The method below will add all resources we've indicated to the cache,
             after making HTTP requests for each of them.
          */
            return cache.addAll(['/', '/css/global.css', '/js/global.js']);
          })
          .then(function() {
            console.log('WORKER: install completed');
          })
      );
    });

    window.addEventListener('install', event => {
      console.log('👷', 'install', event);
      window.skipWaiting();
    });

    window.addEventListener('activate', event => {
      console.log('👷', 'activate', event);
      return window.clients.claim();
    });

    window.addEventListener('fetch', function(event) {
      // console.log('👷', 'fetch', event);
      event.respondWith(fetch(event.request));
    });
  }
};

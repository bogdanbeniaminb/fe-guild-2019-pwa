self.addEventListener('install', event => {
    console.log('[Service Worker] Installing Service Worker ...', event);
    event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', event => {
    console.log('[Service Worker] Activating Service Worker ...', event);
    return self.clients.claim();
});


self.addEventListener('fetch', event => {
    console.log('[Service Worker] Fetching something ....', event);

    // This fixes a weird bug in Chrome when you open the Developer Tools
    if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') {
        return;
    }

    event.respondWith(fetch(event.request));
});


window.addEventListener('beforeinstallprompt', event => {
    // Determine the user's choice - returned as a Promise
    event.userChoice.then(result => {
        console.log(result.outcome);

        // Based on the user's choice, decide how to proceed
        if(result.outcome == 'dismissed') {
            // Send to analytics
        } else {
            // Send to analytics
        }
    });
});

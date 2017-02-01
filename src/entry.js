// Service Worker Main

self.addEventListener('install', (event) => {
  console.log('Installed!');
});

self.addEventListener('activate', (event) => {
  console.log('Activated!');
});

self.addEventListener('fetch', (event) => {

  console.log(`proxied: ${event.request.url}`);

  event.respondWith(
    fetch(event.request)
  );

});

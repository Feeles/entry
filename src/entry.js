// Service Worker Main
import localforage from 'localforage';
const DB_KEY_PROJECTS = 'apps';

self.addEventListener('install', (event) => {
  console.log('Installed!');
});

self.addEventListener('activate', (event) => {

  console.log('Activated!');

  localforage.config({
    name: 'Feeles',
    storeName: 'feeles_alpha_apps',
  });

});

self.addEventListener('fetch', (event) => {

  console.log(`proxied: ${event.request.url}`);

  if (event.request.url.startsWith(self.registration.scope)) {
    // Same origin
    event.respondWith(
      route(event.request)
    );
    return;
  }

  event.respondWith(
    fetch(event.request)
  );

});

async function route(request) {

  const url = new URL(request.url);

  const [,appName,path] = /^\/([^\/]+)\/?(.*)$/.exec(url.pathname) || [];

  if (appName && !path) {
    // App root
    console.log(`appName found!: ${appName}`);

    const apps = await localforage.getItem(DB_KEY_PROJECTS) || [];
    for (const info of apps) {
      if (info.title === appName) {
        const html = await localforage.getItem(info.htmlKey);
        return new Response(html);
      }
    }
  }

  return await fetch(request);

}

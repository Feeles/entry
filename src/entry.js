// Service Worker Main
import localforage from 'localforage';
const DB_KEY_PROJECTS = 'apps';

localforage.config({
  name: 'Feeles',
  storeName: 'feeles_alpha_apps',
});

self.addEventListener('install', async (event) => {
  console.log('Installed!');

  if (!await localforage.getItem(DB_KEY_PROJECTS)) {
    // No apps installed
    const response = await fetch('./bin/example.html');
    const blob = await response.blob();

    const now = new Date().getTime();
    const exampleProject = {
      htmlKey: `example_${now}`,
      title: 'example',
      created: now,
      size: blob.size,
      updated: now,
      CORE_VERSION: 'beta-1',
      CORE_CDN_URL: 'https://embed.hackforplay.xyz/open-source/core/h4p-beta-1.js',
    };
    await localforage.setItem(exampleProject.htmlKey, blob);
    await localforage.setItem(DB_KEY_PROJECTS, [exampleProject]);

    console.log('Example successfully installed!');
  }

});

self.addEventListener('activate', (event) => {

  console.log('Activated!');

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

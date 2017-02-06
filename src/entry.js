// Service Worker Main

import {
  personalDB,
  createProject,
  updateProject,
  readProject,
} from './database/';
import getIDEString from './getIDEString';


self.addEventListener('install', async (event) => {
  console.log('Installed!');

  if (await personalDB.projects.count() < 1) {
    // No apps installed
    const response = await fetch('./bin/example.json');
    const text = await response.text();
    const exampleFiles = JSON.parse(text);

    const project = await createProject(exampleFiles);
    await updateProject(project.id, {
      title: 'example',
    });

    console.info('Example successfully installed!');
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

    const {
      project,
    } = await readProject(appName) || {};

    if (project) {
      const IDEString = getIDEString(project);
      const html = new Blob([IDEString], {
        type: 'html',
      });
      return new Response(html);
    }
  }

  return await fetch(request);

}

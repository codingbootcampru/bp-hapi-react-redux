// import React from 'react';
// import { renderToString } from 'react-dom/server';
// import Page404 from '../../../client/components/page404/page404';

const register = async (server, options) => {
  const {
    apiConfig: { method }
  } = options;

  const handler = async (request, h) => (h.view('index', {
    title: 'Hapi React Redux Boilerplate!!!!???',
    subtitle: 'Howdy, my friend!'
  }));

  server.route({ method, path: '/', handler });
  server.route({ method, path: '/{param*}', handler });
};

const pluginExport = {
  name: 'index-page',
  version: '1.0.0',
  register
};

export default pluginExport;

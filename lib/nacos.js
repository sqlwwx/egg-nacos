'use strict';
const { NacosConfigClient } = require('nacos');

let count = 0;
function createClient(config, app) {
  const Client = app.config.nacos.Client || NacosConfigClient;
  const client = new Client(config);
  client.on('error', err => {
    app.coreLogger.error(err);
  });
  app.beforeStart(async () => {
    const index = count++;
    await client.ready();
    app.coreLogger.info(`[egg-nacos] instance[${index}] ready`);
  });
  app.beforeClose(async () => {
    await client.close();
    app.coreLogger.info('[egg-nacos] client is closed');
  });
  return client;
}


module.exports = app => {
  app.addSingleton('nacos', createClient);
};

'use strict';

const nacos = require('./lib/nacos');

module.exports = app => {
  if (app.config.nacos.app) {
    nacos(app);
  }
};

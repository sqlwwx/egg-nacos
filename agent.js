'use strict';

const nacos = require('./lib/nacos');

module.exports = agent => {
  if (agent.config.nacos.agent) {
    nacos(agent);
  }
};

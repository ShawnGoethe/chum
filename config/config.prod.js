'use strict';

module.exports = appInfo => {
  const config = exports = {};

  config.cluster = {
    listen: {
      port: 7001,
      hostname: '127.0.0.1',
      // path: '/var/run/egg.sock',
    }
  }

  return config;
};

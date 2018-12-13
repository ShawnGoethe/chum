'use strict';

module.exports = appInfo => {
  const config = exports = {};

  config.cluster = {
    listen: {
      port: 7001,
      // hostname: '127.0.0.1',
      // path: '/var/run/egg.sock',
    },
  };
  config.alinode = {
    appid: '77483',
    secret: 'f5855de969076f5397da5d6265c446523091e49c',
  };
  config.dir = appInfo.root;

  return config;
};

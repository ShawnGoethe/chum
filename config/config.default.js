'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1542510427206_2271';

  // add your config here
  config.middleware = [];

  // add views here
  config.view = {
    mapping:{
      '.ejs':'ejs'
    }
  }
  config.cluster = {
    listen: {
      port: 7002,
      // hostname: '127.0.0.1',
      // path: '/var/run/egg.sock',
    }
  }

  return config;
};

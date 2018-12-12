'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1542510427206_2271';

  // add your config here
  config.middleware = [];

  // add views here
  config.view = {
    mapping: {
      '.ejs': 'ejs',
    },
  };
  config.mongoose = {
    url: 'root:root@mongodb://123.206.9.109:27017/chum',
    options: {
      useNewUrlParser: true,
    },
  };
  config.alinode = {
    appid: '77483',
    secret: 'f5855de969076f5397da5d6265c446523091e49c',
  };

  return config;
};

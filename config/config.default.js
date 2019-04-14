/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {
    gzip: {
      threshold: 1024, // 小于 1k 的响应体不压缩
    },
    security: {
      csp: {
        ignore: '/user/login',
        xframe: {

        }
      },
      csrf: {
        enable: true,
        headerName: 'x-csrf-token', // 通过 header 传递 CSRF token 的默认字段为 x-csrf-token
      },
    },
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1555242086635_3792';

  // add your middleware config here
  config.middleware = ['gzip'];

  

  // add your user config here
  const userConfig = {
  };

  return {
    ...config,
    ...userConfig,
  };
};

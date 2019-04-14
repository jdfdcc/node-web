'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const gzip = app.middleware.gzip({ threshold: 1024 });
  const { router, controller } = app;
  router.get('/home', gzip, controller.home.home);
  router.get('/home/index', controller.home.index);
  router.post('/user/login', controller.login.login);
};

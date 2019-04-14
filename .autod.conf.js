'use strict';

module.exports = {
  write: true,
  prefix: '^',
  plugin: 'autod-egg',
  test: [
    'node-web',
    'benchmark',
  ],
  dep: [
    'egg',
    'egg-scripts',
  ],
  devdep: [
    'egg-ci',
    'egg-bin',
    'egg-mock',
    'autod',
    'autod-egg',
    'eslint',
    'eslint-config-egg',
    'webstorm-disable-index',
  ],
  exclude: [
    './node-web/fixtures',
    './dist',
  ],
};


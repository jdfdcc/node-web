'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  /**
   * 获取首页信息
   */
  async index() {
    const { ctx } = this;
    ctx.body = '我是测试的';
  }

  /**
   * 获取服务器数据
   */
  async home() {
    const { ctx } = this;
    ctx.body = {
      test: '333'
    };
  }
}

module.exports = HomeController;

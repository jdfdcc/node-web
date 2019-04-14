'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {

  /**
   * 获取服务器数据
   */
  async login () {
    let pass = false;
    const { ctx } = this;
    console.log(ctx.query);
    const { loginName, password } = ctx.query;
    if (loginName === 'zhangsan' && password === '123456') {
      pass= true
    }
    ctx.body = {
      pass
    }
  }
}

module.exports = LoginController;

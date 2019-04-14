'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {

  /**
   * 获取服务器数据
   */
  async login () {
    let pass = false;
    const { ctx } = this;
    const { loginName, password } = ctx.request.body;
    if (loginName === 'zhangsan' && password === '123456') {
      pass= true;
    }
    ctx.body = {
      pass
    }
  }
}

module.exports = LoginController;

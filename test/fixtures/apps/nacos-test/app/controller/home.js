'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { nacos } = this.app;
    const rets = [];
    await nacos.remove('test', 'DEFAULT_GROUP');
    nacos.subscribe({
      dataId: 'test',
      group: 'DEFAULT_GROUP',
    }, content => {
      rets.push('subscribe:' + content);
    });
    rets.push(
      'get:' + await nacos.getConfig('test', 'DEFAULT_GROUP'),
      'set:' + await nacos.publishSingle('test', 'DEFAULT_GROUP', '测试'),
      'get:' + await nacos.getConfig('test', 'DEFAULT_GROUP'),
      'remove:' + await nacos.remove('test', 'DEFAULT_GROUP')
    );
    this.ctx.body = rets.join(',');
  }
}

module.exports = HomeController;

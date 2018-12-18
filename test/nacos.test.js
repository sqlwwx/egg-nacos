'use strict';

const mock = require('egg-mock');

describe('test/nacos.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/nacos-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('subscribe:null,subscribe:测试,get:null,set:true,get:测试,remove:true')
      .expect(200);
  });
});

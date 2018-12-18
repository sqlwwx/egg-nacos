'use strict';

exports.keys = '123456';

exports.nacos = {
  client: {
    endpoint: 'acm.aliyun.com',
    namespace: '23ef7ea4-8ff4-4ad7-a1f6-c498f0358d47',
    accessKey: process.env.ACM_KEY,
    secretKey: process.env.ACM_SECRET,
    requestTimeout: 6000,
  },
  app: true,
  agent: false,
};

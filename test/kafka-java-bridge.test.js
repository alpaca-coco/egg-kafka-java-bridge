'use strict';

const request = require('supertest');
const mm = require('egg-mock');

describe('test/kafka-java-bridge.test.js', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'apps/kafka-java-bridge-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mm.restore);

  it('should GET /', () => {
    return request(app.callback())
      .get('/')
      .expect('hi, kafkaJavaBridge')
      .expect(200);
  });
});

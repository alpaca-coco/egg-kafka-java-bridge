'use strict';

// const Producer = require('./Producer');
// const HighLevelProducer = require('./HighLevelProducer');
const Comsumer = require('./Consumer');
const Producer = require('./Producer');

module.exports = app => {
  app.addSingleton('kafka', createKafka);
};

function createKafka(config, app) {
  const comsumerConfig = config.consumerOptions;
  function comsumer(op) {
    const copy = Object.assign(comsumerConfig, op);
    return Comsumer(copy);
  }
  function producer(op) {
    const config = Object.assign(comsumerConfig, op);
    return Producer(config);
  }
  const object = {
    producer,
    comsumer,
  };
  return object;
}

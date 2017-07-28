'use strict';

// const Producer = require('./Producer');
// const HighLevelProducer = require('./HighLevelProducer');
const Comsumer = require('./Consumer');

module.exports = app => {
  app.addSingleton('kafka', createKafka);
};

function createKafka(config, app) {
  const comsumerConfig = config.consumerOptions;
  function comsumer(op) {
      let copy = Object.assign(comsumerConfig, op);
      console.log(copy)
      return Comsumer(copy);
  }
  const object = {
        // producer,
    comsumer,
  };
  return object;
}

'use strict';


const Producer = require('kafka-java-bridge2').StringProducer;


/**
 * @constructor
 * @param {Object} Client : zookeeper connection instance,
 * @param {Object} Option : options for producer,
 */
const PrmiseProducer = function(...args) {
  const log = args[args.length - 1];
  delete args[args.length - 1];
  this.ProducerPrototype = new Producer(...args);
  this.producer = Promise.promisifyAll(this.ProducerPrototype);
  this.producer.onAsync('ready').then(function() {
    log.info('connection kafka server success');
  });
  this.producer.onAsync('error').then(function(err) {
    log.error(err);
  });
};

/**
 * Producer.instance
 *@method send
 *@return {Producer} ProducerAsync Instance
 */

PrmiseProducer.prototype.instance = function() {
  return this.producer;
};

module.exports = function(...args) {
  return new PrmiseProducer(...args).instance();
};

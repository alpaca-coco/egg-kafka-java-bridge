

'use strict';

// const Producer = require('./Producer');
// const HighLevelProducer = require('./HighLevelProducer');
const Comsumer = require('./Consumer');

module.exports = app => {
    app.addSingleton('kafka', createOneClient);
};
function createOneClient(config, app) {
    console.log(config)
    // config.host = config.host ? config.host : '';
    app.coreLogger.info('[egg-kafka] connecting %s', config);

    // create Client instance
    // const clients = Client(config.host);

    /**
     * Producer Instance
     * @param {boolean} args optional parameters
     * @return {Producer} -
     */
    // function producer(...args) {
    //     if (args.length === 1) {
    //         return Producer(clients, args[0], app.coreLogger);
    //     }
    //     return Producer(clients, app.coreLogger);
    // }

    /**
     * HighLevelProducer Instance
     * @param {boolean} args optional parameters
     * @return {HighLevelProducer} -
     */
    function highLevelProducer(...args) {
        if (args.length === 1) {
            return HighLevelProducer(clients, args[0], app.coreLogger);
        }
        return HighLevelProducer(clients, app.coreLogger);
    }

    /**
     * get Comsumer Instance function
     *@param {Object} payloads - Array,array of FetchRequest, FetchRequest is a JSON object {
   *   topic: 'topicName',
   *   offset: 0, //default 0
   * }
     *@param {Object} option - options for consumer, default:
     * {
   * groupId: 'kafka-node-group',//consumer group id, default `kafka-node-group`
   * // Auto commit config
   * autoCommit: true,
   * autoCommitIntervalMs: 5000,
   * // The max wait time is the maximum amount of time in milliseconds to block waiting if insufficient data is available at the time the request is issued, default 100ms
   * fetchMaxWaitMs: 100,
   * // This is the minimum number of bytes of messages that must be available to give a response, default 1 byte
   * fetchMinBytes: 1,
   * // The maximum bytes to include in the message set for this partition. This helps bound the size of the response.
   * fetchMaxBytes: 1024 * 1024,
   *  // If set true, consumer will fetch message from the given offset in the payloads
   * fromOffset: false,
   * // If set to 'buffer', values will be returned as raw buffer objects.
   * encoding: 'utf8'
   * }
     * @return {Comsumer} instance - Async
     */
    function comsumer(payloads, option) {
        return Comsumer(payloads, option);
    }
    const object = {
        // producer,
        comsumer
    };

    return object;
}
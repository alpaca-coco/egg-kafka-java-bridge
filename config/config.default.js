'use strict';

/**
 * egg-kafka-java-bridge default config
 * @member Config#kafkaJavaBridge
 * @property {String} SOME_KEY - some description
 */
exports.kafka = {
  client: {
    consumerOptions: {
      zookeeperUrl: 'zookeeper1:2181,zookeeper2:2181,zookeeper3:2181/kafka',
      groupId: 'example-consumer-group-id',
      properties: { 'rebalance.max.retries': '3' }, // Optiona
    },
  },
    // 'localhost:3000,locahost:3001,localhost:3002' or 'localhost:2181,localhost:2182/test'
  app: true, // 默认附加到app
  agent: true, // 默认附加到agent
};

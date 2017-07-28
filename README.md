# egg-kafka-java-bridge

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-kafka-java-bridge.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-kafka-java-bridge
[travis-image]: https://img.shields.io/travis/eggjs/egg-kafka-java-bridge.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-kafka-java-bridge
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-kafka-java-bridge.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-kafka-java-bridge?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-kafka-java-bridge.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-kafka-java-bridge
[snyk-image]: https://snyk.io/test/npm/egg-kafka-java-bridge/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-kafka-java-bridge
[download-image]: https://img.shields.io/npm/dm/egg-kafka-java-bridge.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-kafka-java-bridge

<!--
Description here.
-->
https://support.apple.com/kb/DL1572?locale=zh_CN

## Install

```bash
$ npm i egg-kafka-java-bridge --save
```


## Usage

```js
// {app_root}/config/plugin.js
exports.kafka = {
  enable: true,
  package: 'egg-kafka-java-bridge',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.kafka = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)

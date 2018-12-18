# egg-nacos

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-nacos.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-nacos
[travis-image]: https://img.shields.io/travis/sqlwwx/egg-nacos.svg?style=flat-square
[travis-url]: https://travis-ci.org/sqlwwx/egg-nacos
[codecov-image]: https://img.shields.io/codecov/c/github/sqlwwx/egg-nacos.svg?style=flat-square
[codecov-url]: https://codecov.io/github/sqlwwx/egg-nacos?branch=master
[david-image]: https://img.shields.io/david/sqlwwx/egg-nacos.svg?style=flat-square
[david-url]: https://david-dm.org/sqlwwx/egg-nacos
[snyk-image]: https://snyk.io/test/npm/egg-nacos/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-nacos
[download-image]: https://img.shields.io/npm/dm/egg-nacos.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-nacos

<!--
Description here.
-->

## Install

```bash
$ npm i egg-nacos --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.nacos = {
  enable: true,
  package: 'egg-nacos',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.nacos = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/sqlwwx/egg-nacos/issues).

## License

[MIT](LICENSE)

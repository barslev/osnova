// Created by snov on 11.10.2016.

const target = {
  database: {
    uri: 'mongodb://localhost/osnovabasicapp'
  }
};

const paths = {
  absoluteRoot: require('path').resolve(__dirname),
  static: './static'
};

module.exports = {};

module.exports.core = {
  paths: paths,
  target: target
};

module.exports.launcher = {
  threads: 1,
  host: { ip: 'localhost', port: 3337 }
};
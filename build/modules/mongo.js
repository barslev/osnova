'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Created by snov on 11.10.2016.

var mongoose = require('mongoose');
var Bluebird = require('bluebird');

mongoose.Promise = Bluebird;
Bluebird.promisifyAll(mongoose);

var isFirstTimeConnected = true;

function connect(osnova) {
  var config = osnova.opts.core.database;
  var connectString = void 0;
  if (config.uri) {
    connectString = config.uri;
  } else {
    connectString = config.path + config.name;
  }
  return mongoose.connect(connectString).connection;
}

var mongo = function mongo(opts) {
  return function (osnova) {
    var connection = connect(osnova);

    connection.on('error', function () {
      console.error('Cant connect to ' + osnova.opts.core.database.uri + '.');
    }).on('disconnected', function () {
      connection = connect(osnova);
    }).once('open', function () {
      console.log('Connected to MongoDB.');
      if (isFirstTimeConnected) {
        isFirstTimeConnected = false;
        osnova.next({ connection: connection });
      }
    });
  };
};

module.exports = mongo;
exports.default = mongo;
// Created by snov on 11.10.2016.

const mongoose = require('mongoose');
const Bluebird = require('bluebird');

mongoose.Promise = Bluebird;
Bluebird.promisifyAll(require('mongoose'));

let isFirstTimeConnected = true;

function connect(osnova) {
  const config = osnova.opts.core;
  let connectString;
  if (config.target.database.uri) {
    connectString = config.target.database.uri;
  } else {
    connectString = config.target.database.path + config.target.database.name;
  }
  return osnova.connection = mongoose.connect(connectString).connection;
}

function mongo(osnova) {
  connect(osnova)
    .on('error', console.error.bind(console, 'connection error:'))
    .on('disconnected', () => { connect(osnova); })
    .once('open', () => {
      console.log('Connected to MongoDB.');
      if (isFirstTimeConnected) {
        osnova.moduleReady();
        isFirstTimeConnected = false;
      }
    });
}

module.exports = mongo;
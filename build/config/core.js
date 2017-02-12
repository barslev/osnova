'use strict';

// Created by snov on 30.08.2016.

var path = require('path');

module.exports = exports = {
  paths: {
    absolute: {
      root: process.cwd()
    },
    assets: './public'
  },

  host: {
    port: process.env.PORT || process.env.NODE_PORT || 5000,
    ip: process.env.NODE_IP || 'localhost'
  },

  database: {
    type: 'mongo',
    uri: 'should be provided from beyond!'
  },

  session: {
    key: 'osnova.sid',
    secret: 'W09lWi11$HiN4'
  },

  modules: {
    express: {
      use: true,
      compression: true
    },
    socketio: {
      use: true,
      opts: {
        auth: false
      }
    },
    session: true,
    communicator: true,
    mongo: true
  }
};
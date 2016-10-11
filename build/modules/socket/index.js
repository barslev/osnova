'use strict';

var _core = require('./core');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MODULE_NAME = 'socketio'; // Created by snov on 18.09.2016.

function socketio(osnova) {
  var http = osnova.http;

  var io = new _core2.default(http, {
    cookieParser: osnova.cookieParser,
    key: osnova.config.session.key,
    secret: osnova.config.session.secret,
    sessionStore: osnova.sessionStore
  });

  io.on = io.socketEvent;

  io.socketEvent('disconnect', function () {
    console.log('socket disconnected');
  }, false);

  osnova.io = io;

  osnova.moduleReady(MODULE_NAME);
}

module.exports = {
  name: MODULE_NAME,
  fn: socketio
};
'use strict';

var _core = require('./core');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function communicator(osnova) {
  var communicator = new _core2.default({
    master: osnova.opts.master,
    port: 4778,
    ip: 'localhost',
    io: osnova.io || null
  });
  osnova.next({ communicator: communicator });
} // Created by snov on 07.10.2016.

module.exports = communicator;
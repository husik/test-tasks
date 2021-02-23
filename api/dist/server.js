"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _app = _interopRequireDefault(require("./app"));

var _config = _interopRequireDefault(require("./config/config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_app.default.listen(_config.default.port, () => {
  console.log(`Express server listening on port ${_config.default.port}`);
});

var _default = _app.default;
exports.default = _default;
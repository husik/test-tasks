"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _list = _interopRequireDefault(require("./list.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = app => {
  app.use("/api/list", _list.default);
};

exports.default = _default;
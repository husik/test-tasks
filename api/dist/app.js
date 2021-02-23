"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _http = _interopRequireDefault(require("http"));

var _compression = _interopRequireDefault(require("compression"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class App {
  constructor() {
    this.app = (0, _express.default)();
    this.server = _http.default.createServer(this.app);
    this.config();
  }

  config() {
    // support application/json type post data
    this.app.use(_bodyParser.default.json({
      limit: "10mb"
    })); // support application/x-www-form-urlencoded post data

    this.app.use(_bodyParser.default.urlencoded({
      extended: true,
      limit: "10mb"
    }));
    this.app.use((0, _compression.default)()); // init cross origin headers

    this.app.use((0, _cors.default)()); // init app routes

    (0, _routes.default)(this.app);
  }

}

var _default = new App().server;
exports.default = _default;
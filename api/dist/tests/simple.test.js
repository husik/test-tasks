"use strict";

var _tape = _interopRequireDefault(require("tape"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _tape.default)("timing test", function (t) {
  t.plan(3);
  t.equal(typeof Date.now, "function");
  t.equal(typeof {}, "object");
  t.equal(typeof [], "object");
});

const getArray = count => new Promise((resolve, reject) => {
  const arr = [];

  for (let i = 0; i < count; i++) {
    arr.push(i);
  }

  resolve(arr);
});

(0, _tape.default)("test using promises", async t => {
  const result = await getArray(10);
  t.equal(result.length, 10);
});
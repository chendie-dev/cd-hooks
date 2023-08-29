"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "debounce", {
  enumerable: true,
  get: function get() {
    return _lodashEs.debounce;
  }
});
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _lodashEs = require("lodash-es");
function isNodeOrWeb() {
  var freeGlobal = global && (typeof global === "undefined" ? "undefined" : (0, _typeof2.default)(global)) === 'object' && global.Object === Object;
  var freeSelf = self && (typeof self === "undefined" ? "undefined" : (0, _typeof2.default)(self)) === 'object' && self.Object === Object;
  return freeGlobal || freeSelf;
}
if (!isNodeOrWeb()) {
  global.Date = Date;
}
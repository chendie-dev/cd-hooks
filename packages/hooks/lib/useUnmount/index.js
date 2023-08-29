"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _useLatest = _interopRequireDefault(require("../useLatest"));
function useUnmount(fn) {
  var fnRef = (0, _useLatest.default)(fn);
  (0, _react.useEffect)(function () {
    return function () {
      fnRef.current();
    };
  }, []);
}
var _default = useUnmount;
exports.default = _default;
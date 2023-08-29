"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tslib = require("tslib");
var _react = require("react");
function useDebounce(value, waiteTime) {
  var _a = (0, _tslib.__read)((0, _react.useState)(value), 2),
    debounced = _a[0],
    setDebounced = _a[1];
  (0, _react.useEffect)(function () {
    var timeOut = setTimeout(function () {
      setDebounced(value);
    }, waiteTime);
    return function () {
      return clearTimeout(timeOut);
    };
  }, [value, waiteTime]);
  return debounced;
}
var _default = useDebounce;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tslib = require("tslib");
var _react = require("react");
function useMemoried(fn) {
  var fnRef = (0, _react.useRef)(fn);
  fnRef.current = (0, _react.useMemo)(function () {
    return fn;
  }, [fn]);
  var memoriedFn = (0, _react.useRef)();
  if (!memoriedFn.current) {
    memoriedFn.current = function () {
      var _a;
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return (_a = fnRef.current).apply.apply(_a, (0, _tslib.__spreadArray)([this], (0, _tslib.__read)(args), false));
    };
  }
  return memoriedFn.current;
}
var _default = useMemoried;
exports.default = _default;
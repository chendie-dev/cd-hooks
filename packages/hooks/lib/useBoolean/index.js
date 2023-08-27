"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useBoolean;
var _tslib = require("tslib");
var _react = require("react");
var _useToggle = _interopRequireDefault(require("../useToggle"));
function useBoolean(defaultValue) {
  if (defaultValue === void 0) {
    defaultValue = false;
  }
  var _a = (0, _tslib.__read)((0, _useToggle.default)(!!defaultValue, !!!defaultValue), 2),
    state = _a[0],
    _b = _a[1],
    toggle = _b.toggle,
    setLeft = _b.setLeft,
    setRight = _b.setRight;
  var actions = (0, _react.useMemo)(function () {
    var setTrue = function setTrue() {
      return setLeft();
    };
    var setFalse = function setFalse() {
      return setRight();
    };
    return {
      toggle: toggle,
      setTrue: setTrue,
      setFalse: setFalse
    };
  }, []);
  return [state, actions];
}
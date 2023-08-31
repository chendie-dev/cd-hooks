"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createUpdateEffect;
var _react = require("react");
function createUpdateEffect(hook) {
  return function (effect, deps) {
    var isMounted = (0, _react.useRef)(false);
    //for react refresh
    hook(function () {
      return function () {
        isMounted.current = false;
      };
    }, []);
    hook(function () {
      if (!isMounted.current) isMounted.current = true;else {
        return effect();
      }
    }, deps);
  };
}
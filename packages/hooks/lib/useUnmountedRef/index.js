"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
function useUnmountRef() {
  var unmountRef = (0, _react.useRef)(false);
  (0, _react.useEffect)(function () {
    unmountRef.current = false;
    return function () {
      unmountRef.current = true;
    };
  }, []);
  return unmountRef;
}
var _default = useUnmountRef;
exports.default = _default;
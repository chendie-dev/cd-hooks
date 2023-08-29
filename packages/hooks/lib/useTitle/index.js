"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _useUnmount = _interopRequireDefault(require("../useUnmount"));
var DEFAULT_OPTIONS = {
  restorePreTitle: false
};
function useTitle(title, option) {
  if (option === void 0) {
    option = DEFAULT_OPTIONS;
  }
  var titleRef = (0, _react.useRef)(document.title);
  (0, _react.useEffect)(function () {
    document.title = title;
  }, [title]);
  (0, _useUnmount.default)(function () {
    if (option.restorePreTitle) {
      document.title = titleRef.current;
    }
  });
}
var _default = useTitle;
exports.default = _default;
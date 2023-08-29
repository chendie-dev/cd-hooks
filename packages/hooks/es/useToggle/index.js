import { __read } from "tslib";
import { useState, useMemo } from 'react';
function useToggle(defaultValue, reverseValue) {
  if (defaultValue === void 0) {
    defaultValue = false;
  }
  var _a = __read(useState(defaultValue), 2),
    state = _a[0],
    setState = _a[1];
  //actions的持久化，不加依赖项只会更新一次
  var actions = useMemo(function () {
    var reverseValueOrigin = reverseValue === undefined ? !defaultValue : reverseValue;
    var toggle = function () {
      return setState(function (s) {
        return s === defaultValue ? reverseValueOrigin : defaultValue;
      });
    };
    var setRight = function () {
      return setState(reverseValueOrigin);
    };
    var setLeft = function () {
      return setState(defaultValue);
    };
    var set = function (value) {
      return setState(value);
    };
    return {
      toggle: toggle,
      set: set,
      setLeft: setLeft,
      setRight: setRight
    };
  }, []);
  return [state, actions];
}
export default useToggle;
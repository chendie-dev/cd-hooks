import { __read } from "tslib";
import { useMemo } from 'react';
import useToggle from "../useToggle";
export default function useBoolean(defaultValue) {
  if (defaultValue === void 0) {
    defaultValue = false;
  }
  var _a = __read(useToggle(!!defaultValue, !!!defaultValue), 2),
    state = _a[0],
    _b = _a[1],
    toggle = _b.toggle,
    setLeft = _b.setLeft,
    setRight = _b.setRight;
  var actions = useMemo(function () {
    var setTrue = function () {
      return setLeft();
    };
    var setFalse = function () {
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
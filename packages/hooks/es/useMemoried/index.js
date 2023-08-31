import { __read, __spreadArray } from "tslib";
import { useRef, useMemo } from 'react';
function useMemoried(fn) {
  var fnRef = useRef(fn);
  fnRef.current = useMemo(function () {
    return fn;
  }, [fn]);
  var memoriedFn = useRef();
  if (!memoriedFn.current) {
    memoriedFn.current = function () {
      var _a;
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return (_a = fnRef.current).apply.apply(_a, __spreadArray([this], __read(args), false));
    };
  }
  return memoriedFn.current;
}
export default useMemoried;
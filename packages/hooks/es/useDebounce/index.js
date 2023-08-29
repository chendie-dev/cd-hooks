import { __read } from "tslib";
import { useState, useEffect } from 'react';
function useDebounce(value, waiteTime) {
  var _a = __read(useState(value), 2),
    debounced = _a[0],
    setDebounced = _a[1];
  useEffect(function () {
    var timeOut = setTimeout(function () {
      setDebounced(value);
    }, waiteTime);
    return function () {
      return clearTimeout(timeOut);
    };
  }, [value, waiteTime]);
  return debounced;
}
export default useDebounce;
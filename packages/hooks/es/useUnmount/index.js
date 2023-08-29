import { useEffect } from 'react';
import useLatest from "../useLatest";
function useUnmount(fn) {
  var fnRef = useLatest(fn);
  useEffect(function () {
    return function () {
      fnRef.current();
    };
  }, []);
}
export default useUnmount;
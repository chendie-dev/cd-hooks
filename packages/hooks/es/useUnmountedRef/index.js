import { useRef, useEffect } from 'react';
function useUnmountRef() {
  var unmountRef = useRef(false);
  useEffect(function () {
    unmountRef.current = false;
    return function () {
      unmountRef.current = true;
    };
  }, []);
  return unmountRef;
}
export default useUnmountRef;
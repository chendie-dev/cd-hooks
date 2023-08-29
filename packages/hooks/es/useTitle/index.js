import { useRef, useEffect } from 'react';
import useUnmount from '../useUnmount';
var DEFAULT_OPTIONS = {
  restorePreTitle: false
};
function useTitle(title, option) {
  if (option === void 0) {
    option = DEFAULT_OPTIONS;
  }
  var titleRef = useRef(document.title);
  useEffect(function () {
    document.title = title;
  }, [title]);
  useUnmount(function () {
    if (option.restorePreTitle) {
      document.title = titleRef.current;
    }
  });
}
export default useTitle;
import { useRef, useEffect } from 'react'
import useUnmount from '../useUnmount'



const DEFAULT_OPTIONS = {
    restorePreTitle: false
}
function useTitle(title: string, option = DEFAULT_OPTIONS) {
    const titleRef = useRef(document.title);

    useEffect(() => {
        document.title = title;
    }, [title])

    useUnmount(() => {
        if (option.restorePreTitle) {
            document.title = titleRef.current;
        }
    })

}

export default useTitle;
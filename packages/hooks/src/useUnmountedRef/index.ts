import {useRef,useEffect} from 'react'

function useUnmountRef(){
    const unmountRef=useRef(false);
    useEffect(()=>{
        unmountRef.current=false;
        return ()=>{
            unmountRef.current=true;
        }
    },[])
    return unmountRef;
}

export default useUnmountRef;
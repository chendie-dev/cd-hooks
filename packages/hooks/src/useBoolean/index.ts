import {useMemo} from 'react'
import useToggle from "../useToggle";

export interface Actions{
    setTrue:()=>void,
    setFalse:()=>void,
    toggle:()=>void
}

export default function useBoolean(defaultValue=false):[boolean,Actions]{
    const [state,{toggle,setLeft,setRight}]=useToggle(!!defaultValue,!(!!defaultValue));
    const actions:Actions=useMemo(()=>{
        const setTrue=()=>setLeft();
        const setFalse=()=>setRight();
        return{
            toggle,
            setTrue,
            setFalse
        }
    },[])
    return [state,actions]
}
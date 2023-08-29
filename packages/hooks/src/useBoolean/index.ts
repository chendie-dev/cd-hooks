import {useMemo} from 'react'
import useToggle from "../useToggle";

export interface Actions{
    setTrue:()=>void,
    setFalse:()=>void,
    toggle:()=>void,
    set:(value:any)=>void
}

export default function useBoolean(defaultValue=false):[boolean,Actions]{
    const [state,{toggle,set}]=useToggle(!!defaultValue);
    const actions:Actions=useMemo(()=>{
        const setTrue=()=>set(true);
        const setFalse=()=>set(false);
        return{
            toggle,
            setTrue,
            setFalse,
            set:(v: any)=>set(!!v)
        }
    },[])
    return [state,actions]
}
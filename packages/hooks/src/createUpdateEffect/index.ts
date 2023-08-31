import { useEffect, useLayoutEffect,useRef } from 'react';

type EffectHookType = typeof useEffect | typeof useLayoutEffect;

export default function createUpdateEffect(hook:EffectHookType):EffectHookType {
    return (effect, deps) => {
        const isMounted=useRef(false)
        //for react refresh
        hook(()=>{
            return ()=>{
                isMounted.current=false
            }
        },[])

        hook(()=>{
            if(!isMounted.current)isMounted.current=true;
            else{
                return effect()
            }
        },deps)
    }
}

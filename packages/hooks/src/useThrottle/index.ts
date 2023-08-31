import {useState,useEffect} from 'react'
import type{ ThrottleOptions } from "../useThrottleFn/throttleOptions";
import useThrottleFn from '../useThrottleFn';

function useThrottle(value:any,options?:ThrottleOptions){
    const [throttled,setThrottled]=useState(value);
    const {run}=useThrottleFn(()=>{setThrottled(value)},options);
    useEffect(()=>{
        run()
    },[value])
    return throttled
}
export default useThrottle
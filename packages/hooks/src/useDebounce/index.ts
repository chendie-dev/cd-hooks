import {useState,useEffect} from 'react'

function useDebounce<T>(value:T,waiteTime:number){
    const [debounced,setDebounced]=useState(value);
    useEffect(()=>{
        const timeOut=setTimeout(()=>{
            setDebounced(value)
        },waiteTime)
        return ()=>clearTimeout(timeOut)
    },[value,waiteTime])
    return debounced
}
export default useDebounce;
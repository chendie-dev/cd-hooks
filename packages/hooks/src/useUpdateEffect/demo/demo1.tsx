import React,{useState,useEffect} from 'react'
import {useUpdateEffect} from 'cdy-hooks';

export default ()=>{
    const [count,setCount]=useState(0);
    const [effectCount,setEffectCount]=useState(0);
    const [updateEffectCount,setUpdateEffectCount]=useState(0)
    useEffect(()=>{
        setEffectCount(c=>c+1)
    },[count])
    useUpdateEffect(()=>{
        setUpdateEffectCount(c=>c+1)
    },[count])
    return(
        <div>
            <p>effectCount:{effectCount}</p>
            <p>updateEffectCount:{updateEffectCount}</p>
            <button onClick={()=>setCount(c=>c+1)}>reRender</button>
        </div>
    )
}
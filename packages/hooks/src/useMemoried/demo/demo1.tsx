import React,{useState,useCallback} from 'react'
import {useMemoried} from 'cdy-hooks'
import { message } from 'antd';

export default()=>{
    const [count,setCount]=useState(0);
    const memoried=useMemoried(()=>{
        message.info(`current count:${count}`)
    })
    const callback=useCallback(()=>{
        message.info(`current count:${count}`)
    },[count])
    return (
        <div>
            <p>count:{count}</p>
            <button style={{marginRight:10}} onClick={()=>setCount(c=>c+1)}>add count</button>
            <button style={{marginRight:10}} onClick={memoried}>call memoried</button>
            <button onClick={callback}>call callback</button>
        </div>
    )
}
import React,{useState} from 'react'
import {useThrottleFn} from 'cd-hooks'

export default ()=>{
    const [count,setCount]=useState(0);
    const {run}=useThrottleFn(()=>{
        setCount(count+1);
    },{wait:2000})

    return(
        <div>
            <p>count:{count}</p>
            <button onClick={run}>click quik!</button>
        </div>
    )
}
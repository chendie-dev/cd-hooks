import React,{useState} from 'react'
import {useThrottle} from 'cd-hooks'

export default()=>{
    const [value,setValue]=useState<string>('');
    const throttle=useThrottle(value,{wait:3000})
    return(
        <div>
            <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} />
            <p>throttle:{throttle}</p>
        </div>
    )
}
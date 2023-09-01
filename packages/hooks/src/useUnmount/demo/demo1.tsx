import React from 'react'
import {message} from 'antd'
import {useBoolean, useUnmount} from 'cdy-hooks'

const MyComponent=()=>{
    useUnmount(()=>{
        message.info("unmount")
    })
    return(
        <div>
            hello world!
        </div>
    )
}

export default ()=>{
    const [state,{toggle}]=useBoolean();

    return(
        <div>
            <button onClick={toggle}>{state?'unmount':'mount'}</button>
            {state&&<MyComponent/>}
        </div>
    )
}
import React,{useEffect} from 'react';
import {useToggle, useUnmountedRef} from 'cd-hooks';
import { message } from 'antd';

function MyComponent(){
    const unmountRef=useUnmountedRef();
    useEffect(()=>{
        setTimeout(()=>{
            if(!unmountRef.current){
                message.info('component is alive!')
            }
        },1000)
    },[])
    return(
        <div>
            hello world!
        </div>
    )
}
export default()=>{
    const [state,{toggle}]=useToggle();
    return(
        <div>
            <button onClick={toggle}>{state?'unmount':'mount'}</button>
            {state&&<MyComponent/>}
        </div>
    )
}
/**
 * title: 基础用法
 * desc: 切换 boolean，可以接收默认值。
 */
import React from 'react'
import { useBoolean } from 'cdy-hooks';

export default ()=>{
    const [bool,{toggle,setTrue,setFalse}]=useBoolean();

    return (
        <div>
            <p>当前值为{`${bool}`}</p>
            <p>
                <button onClick={toggle}>toggle</button>
                <button onClick={setTrue}>setTrue</button>
                <button onClick={setFalse}>setFalse</button>
            </p>
        </div>
    )
};
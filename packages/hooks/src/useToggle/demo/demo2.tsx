import React from 'react'
import { useToggle } from 'cd-hooks'

export default()=>{
    const [state, { toggle, setLeft, setRight,set }] = useToggle("cd","dc");
    return (
        <div>
            <p>当前值为{`${state}`}</p>
            <p>
                <button onClick={toggle}>toggle 切换</button>
                <button onClick={setLeft}>setLeft 切换</button>
                <button onClick={setRight}>setRight 切换</button>
                <button onClick={()=>set('cd')}>set:cd</button>
                <button onClick={()=>set('dc')}>set:dc</button>
            </p>
        </div>
    )
}
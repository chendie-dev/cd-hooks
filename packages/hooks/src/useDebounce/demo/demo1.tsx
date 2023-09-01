import React, {  useState } from 'react'
import {useDebounce} from 'cdy-hooks';


export default () => {
    const [count, setCount] = useState('');
    const debounceValue=useDebounce(count,{wait:2000})
    return (
        <div>
            <input
                value={count}
                onChange={(e)=>setCount(e.target.value)}
                placeholder='输入值'
            />
            <p>value:{debounceValue}</p>
        </div>
    )
}
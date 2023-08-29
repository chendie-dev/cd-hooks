import React, {  useState, useEffect } from 'react'
import {useDebounce} from 'cd-hooks';


export default () => {
    const [count, setCount] = useState(0);
    const 
    return (
        <div>
            <p>count:{count}</p>
            <button>quik click!</button>
        </div>
    )
}
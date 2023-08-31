import React from 'react'
import {useUpdate} from 'cd-hooks'
export default ()=>{
    const update=useUpdate();
    return (
        <div>
            <p>Time:{Date.now()}</p>
            <button onClick={update}>update</button>
        </div>
    )
}
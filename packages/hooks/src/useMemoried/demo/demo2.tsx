/**
 * title: useMemoizedFn 函数地址不会变化，可以用于性能优化
 * desc: 示例中 `memoizedFn` 是不会变化的，`callbackFn` 在 count 变化时变化。
 */
import React, { useState, useCallback, useRef } from 'react'
import {useMemoried} from 'cdy-hooks'
import { message } from 'antd';

export default () => {
    const [count, setCount] = useState(0);
    const callback = useCallback(() => {
        message.info(`current count:${count}`)
    }, [count])
    const memoried = useMemoried(() => {
        message.info(`current count:${count}`)
    })
    return (
        <div>
            <p>count:{count}</p>
            <button style={{ marginRight: 10 }} onClick={() => setCount(c => c + 1)}>add count</button>
            <h3>使用useCallback加载子组件</h3>
            <ExpensiveTree showCount={callback} />
            <h3>使用useMemoried加载子组件</h3>
            <ExpensiveTree showCount={memoried} />
        </div>
    )
}

const ExpensiveTree = React.memo(({ showCount }) => {
    const renderCount = useRef(0);
    renderCount.current += 1
    return (
        <>
            <p>count:{renderCount.current}</p>
            <button onClick={showCount}>show parent count</button>
        </>
    )
})


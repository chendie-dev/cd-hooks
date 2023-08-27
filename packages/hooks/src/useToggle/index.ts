import { useState, useMemo } from 'react'
type defaultFn = () => void;

interface Actions{
    setLeft: defaultFn,
    setRight: defaultFn,
    toggle: defaultFn,
}
//不初始化，默认值为false
function useToggle<T = boolean>(): [boolean, Actions];
//初始化，需传入两个参数
function useToggle<D,R>(defaultValue:D,reverseValue:R):[D|R,Actions]
function useToggle<D, R>(defaultValue: D = false as D, reverseValue?: R) {
    const [state, setState] = useState<D | R>(defaultValue);
    //actions的持久化
    const actions:Actions = useMemo(() => {
        const reverseValueOrigin = reverseValue === undefined ? !defaultValue : reverseValue as D | R;
        const toggle = () => setState(s => s === defaultValue ? reverseValueOrigin : defaultValue);
        const setRight = () => setState(defaultValue);
        const setLeft = () => setState(reverseValueOrigin);
        return {
            toggle,
            setLeft,
            setRight
        }
    }, [])
    return [state,actions];
}

export default useToggle;
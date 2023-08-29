import { useState, useMemo } from 'react'

interface Actions<T>{
    setLeft: () => void,
    setRight: () => void,
    toggle: () => void,
    set:(value:T)=>void
}
//不初始化，默认值为false
function useToggle<T = boolean>(): [boolean, Actions<T>];
//传入初始化值
function useToggle<T>(defaultValue:T):[T,Actions<T>];
//初始化，需传入两个参数
function useToggle<D,R>(defaultValue:D,reverseValue:R):[D|R,Actions<D|R>];


function useToggle<D, R>(defaultValue: D = false as D, reverseValue?: R) {
    const [state, setState] = useState<D | R>(defaultValue);
    //actions的持久化，不加依赖项只会更新一次
    const actions = useMemo(() => {
        const reverseValueOrigin = (reverseValue === undefined ? !defaultValue : reverseValue) as D | R;
        const toggle = () => setState(s => s === defaultValue ? reverseValueOrigin : defaultValue);
        const setRight = () => setState(reverseValueOrigin);
        const setLeft = () => setState(defaultValue);
        const set=(value:D|R)=>setState(value)
        return {
            toggle,
            set,
            setLeft,
            setRight,
        }
    }, [])
    return [state,actions];
}

export default useToggle;
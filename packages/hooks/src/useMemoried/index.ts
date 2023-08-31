import { useRef, useMemo } from 'react';

type noop = (...args: any[]) => any
type PickFunc<T extends noop> = (this: ThisParameterType<T>, ...args: Parameters<T>) => ReturnType<T>
function useMemoried<T extends noop>(fn: T) {
    const fnRef = useRef(fn);
    fnRef.current = useMemo(() => fn, [fn]);
    const memoriedFn = useRef<PickFunc<T>>();
    if(!memoriedFn.current){
        memoriedFn.current=function(this,...args){
            return fnRef.current.apply(this,...args)
        }
    }
    return memoriedFn.current as T
}
export default useMemoried;
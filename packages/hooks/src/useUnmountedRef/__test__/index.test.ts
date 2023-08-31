import { renderHook } from "@testing-library/react"
import useUnmountedRef from ".."

describe('useUnmount',()=>{
    it('basic funtion',()=>{
        const hook=renderHook(()=>useUnmountedRef());
        expect(hook.result.current.current).toBeFalsy();
        hook.rerender()
        expect(hook.result.current.current).toBeFalsy();
        hook.unmount()
        expect(hook.result.current.current).toBeTruthy();

    })
})
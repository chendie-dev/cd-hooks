import { renderHook,act } from "@testing-library/react";
import useThrottle from "..";
import { sleep } from "../../utils/testingHelpers";

describe('useThrottle',()=>{
    it('每隔200ms改变一次',async ()=>{
        let value=0
        const hook=renderHook(()=>useThrottle(value,{wait:200}))
        expect(hook.result.current).toBe(0);
        value=3
        hook.rerender()
        await sleep(50)
        expect(hook.result.current).toBe(0);
        value=4
        hook.rerender()
        await sleep(100)
        expect(hook.result.current).toBe(0);
        value=5
        hook.rerender()
        await act(async ()=>{
            await sleep(200)
        })
        expect(hook.result.current).toBe(5);
    })
})
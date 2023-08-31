import { renderHook } from "@testing-library/react";
import useThrottleFn from "..";
import { sleep } from "../../utils/testingHelpers";

describe('useThrottle',()=>{
    it('每隔200ms改变一次',async ()=>{
        let value=0
        const fn=(count)=>{
            value+=count
        }
        const hook=renderHook(()=>useThrottleFn(fn,{wait:200}))
        hook.result.current.run(1)
        expect(value).toBe(1);
        hook.result.current.run(1)
        hook.result.current.run(1)
        hook.result.current.run(1)
        expect(value).toBe(1);
        await sleep(50)//t=50
        expect(value).toBe(1);
        hook.result.current.run(1)
        await sleep(150)//t=200
        expect(value).toBe(2);
    })
})
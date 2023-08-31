import { renderHook } from "@testing-library/react";
import useUpdateEffect from "..";

describe('useUpdateEffect',()=>{
    it("Don't update one render",()=>{
        let value=0;
        const hook=renderHook(()=>useUpdateEffect(()=>{
            value+=1
        }))
        expect(value).toBe(0)
        hook.rerender()
        expect(value).toBe(1)
    })
})
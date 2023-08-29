import { renderHook,act } from "@testing-library/react";
import { sleep } from "../../utils/testingHelpers";
import useDebounce from "..";

let value=0;

describe('useDebounce',()=>{
    it("basic function test",async ()=>{
        const {result,rerender}=renderHook(()=>useDebounce(value,{wait:200}))
        expect(result.current).toBe(0);

        value=1
        rerender()
        await sleep(50);
        expect(result.current).toBe(0)

        value=2
        rerender()
        await sleep(100);
        expect(result.current).toBe(0)

        value=3
        rerender()
        await act(async ()=>{
            await sleep(250);
        })
        expect(result.current).toBe(3)
    })
})
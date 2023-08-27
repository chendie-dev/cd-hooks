import { renderHook } from "@testing-library/react";
import useBoolean from "..";

const setUp = (defaultVal?: any) => renderHook(() => useBoolean(defaultVal));

describe('useBoolean', () => {
    it('多类型值传入功能测试', () => {
        const hook = setUp(12);
        expect(hook.result.current[0]).toBeTruthy();
        const hook1 = setUp(0);
        expect(hook1.result.current[0]).toBeFalsy();
        const hook2 = setUp("");
        expect(hook2.result.current[0]).toBeFalsy();
        const hook3 = setUp("12");
        expect(hook3.result.current[0]).toBeTruthy();
        const hook4 = setUp(true);
        expect(hook4.result.current[0]).toBeTruthy();
    })
})
import {renderHook,act} from '@testing-library/react'
import useToggle from "../index";

const callToggle=(hook)=>{
    act(()=>{
        hook.result.current[1].toggle()
    })
}
describe('useToggle',()=>{
    it('针对基础功能测试',()=>{
        const hook=renderHook(()=>useToggle());
        expect(hook.result.current[0]).toBeFalsy()
    });

    it('针对手动切换toggle模拟',()=>{
        const hook=renderHook(()=>useToggle("chendie","diechen"));
        expect(hook.result.current[0]).toBe("chendie");
        callToggle(hook);
        expect(hook.result.current[0]).toBe("diechen");
        callToggle(hook);
        expect(hook.result.current[0]).toBe("chendie");
    })
})
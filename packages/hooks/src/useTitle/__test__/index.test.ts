import {renderHook,act} from '@testing-library/react'
import useTitle from '..'

describe('useTitle',()=>{
    it('基础标题测试',()=>{
        const hook=renderHook((props)=>useTitle(props),{
            initialProps:"自定义标题"
        })
        expect(document.title).toBe('自定义标题')
        hook.rerender("自定义标题1")
        expect(document.title).toBe('自定义标题1')

    })
    it('组件关闭回退测试',()=>{
        document.title='原有标题'
        const hook=renderHook((props)=>useTitle(props,{restorePreTitle:true}),{
            initialProps:'自定义标题'
        })
        expect(document.title).toBe("自定义标题")
        act(()=>hook.unmount())
        expect(document.title).toBe("原有标题")
    })
})
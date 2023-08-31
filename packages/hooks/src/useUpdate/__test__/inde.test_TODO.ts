import { renderHook } from "@testing-library/react"
import useUpdate from ".."
describe('useUpdate',()=>{
    it('获取实时时间',()=>{
        let date=Date.now();
        const hook=renderHook(()=>{
            const update=useUpdate()
            return {
                update:()=>update
            }
        });

    })
})
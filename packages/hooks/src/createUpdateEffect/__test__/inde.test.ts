import {renderHook} from '@testing-library/react'
import {useEffect,useLayoutEffect} from 'react'
import createUpdateEffect from '..'

describe('createUpdateEffect',()=>{
    it('work from useEffect',()=>{
        const useUpdateEffect=createUpdateEffect(useEffect)
        let value=0
        const hook=renderHook(()=>useUpdateEffect(()=>{
            value=2
        }))
        expect(value).toBe(0)
        hook.rerender()
        expect(value).toBe(2)
    })
    it('work for useLayoutEffect',()=>{
        const useUpdateLayoutEffect=createUpdateEffect(useLayoutEffect);
        let value=0
        const hook=renderHook(()=>useUpdateLayoutEffect(()=>{
            value=2
        }))
        expect(value).toBe(0)
        hook.rerender()
        expect(value).toBe(2)
    })
})
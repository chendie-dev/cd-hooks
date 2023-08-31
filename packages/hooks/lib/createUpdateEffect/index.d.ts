import { useEffect, useLayoutEffect } from 'react';
type EffectHookType = typeof useEffect | typeof useLayoutEffect;
export default function createUpdateEffect(hook: EffectHookType): EffectHookType;
export {};

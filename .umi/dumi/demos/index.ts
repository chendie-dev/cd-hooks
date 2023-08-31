// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';
import rawCode1 from '!!dumi-raw-code-loader!/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useBoolean/demo/demo1.tsx?dumi-raw-code';
import rawCode2 from '!!dumi-raw-code-loader!/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useDebounce/demo/demo1.tsx?dumi-raw-code';
import rawCode3 from '!!dumi-raw-code-loader!/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useDebounceFn/demo/demo1.tsx?dumi-raw-code';
import rawCode4 from '!!dumi-raw-code-loader!/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useLatest/demo/demo1.tsx?dumi-raw-code';
import rawCode5 from '!!dumi-raw-code-loader!/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useMemoried/demo/demo1.tsx?dumi-raw-code';
import rawCode6 from '!!dumi-raw-code-loader!/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useMemoried/index.ts?dumi-raw-code';
import rawCode7 from '!!dumi-raw-code-loader!/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useMemoried/demo/demo2.tsx?dumi-raw-code';
import rawCode8 from '!!dumi-raw-code-loader!/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useThrottle/demo/demo1.tsx?dumi-raw-code';
import rawCode9 from '!!dumi-raw-code-loader!/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useThrottleFn/demo/demo1.tsx?dumi-raw-code';
import rawCode10 from '!!dumi-raw-code-loader!/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useTitle/demo/demo1.tsx?dumi-raw-code';
import rawCode11 from '!!dumi-raw-code-loader!/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useToggle/demo/demo1.tsx?dumi-raw-code';
import rawCode12 from '!!dumi-raw-code-loader!/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useToggle/demo/demo2.tsx?dumi-raw-code';
import rawCode13 from '!!dumi-raw-code-loader!/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useUnmount/demo/demo1.tsx?dumi-raw-code';
import rawCode14 from '!!dumi-raw-code-loader!/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useUnmountedRef/demo/demo1.tsx?dumi-raw-code';
import rawCode15 from '!!dumi-raw-code-loader!/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useUpdate/demo/demo1.tsx?dumi-raw-code';
import rawCode16 from '!!dumi-raw-code-loader!/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useUpdateEffect/demo/demo1.tsx?dumi-raw-code';
import rawCode17 from '!!dumi-raw-code-loader!/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useUpdateEffect/index.ts?dumi-raw-code';
import rawCode18 from '!!dumi-raw-code-loader!/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/createUpdateEffect/index.ts?dumi-raw-code';

export default {
  'useboolean-demo1': {
    component: (require('/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useBoolean/demo/demo1.tsx')).default,
    previewerProps: {"sources":{"_":{"tsx":rawCode1}},"dependencies":{"react":{"version":"^16.8.0 || ^17.0.0 || ^18.0.0"},"cdy-hooks":{"version":"0.0.1"}},"title":"基础用法","description":"<div class=\"markdown\"><p>切换 boolean，可以接收默认值。</p></div>","identifier":"useboolean-demo1"},
  },
  'usedebounce-demo1': {
    component: (require('/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useDebounce/demo/demo1.tsx')).default,
    previewerProps: {"sources":{"_":{"tsx":rawCode2}},"dependencies":{"react":{"version":"^16.8.0 || ^17.0.0 || ^18.0.0"},"cdy-hooks":{"version":"0.0.1"}},"hideActions":["CSB"],"identifier":"usedebounce-demo1"},
  },
  'usedebouncefn-demo1': {
    component: (require('/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useDebounceFn/demo/demo1.tsx')).default,
    previewerProps: {"sources":{"_":{"tsx":rawCode3}},"dependencies":{"cdy-hooks":{"version":"0.0.1"},"react":{"version":"^16.8.0 || ^17.0.0 || ^18.0.0"}},"title":"基础用法","hideActions":["CSB"],"description":"<div class=\"markdown\"><p>频繁调用 run，但只会在所有点击完成 500ms 后执行一次相关函数</p></div>","identifier":"usedebouncefn-demo1"},
  },
  'uselatest-demo1': {
    component: (require('/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useLatest/demo/demo1.tsx')).default,
    previewerProps: {"sources":{"_":{"tsx":rawCode4}},"dependencies":{"react":{"version":"^16.8.0 || ^17.0.0 || ^18.0.0"},"cdy-hooks":{"version":"0.0.1"}},"title":"基础用法","hideActions":["CSB"],"description":"<div class=\"markdown\"><p>useLatest 返回的永远是最新值</p></div>","identifier":"uselatest-demo1"},
  },
  'usememoried-demo1': {
    component: (require('/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useMemoried/demo/demo1.tsx')).default,
    previewerProps: {"sources":{"_":{"tsx":rawCode5},"index.ts":{"import":"..","content":rawCode6}},"dependencies":{"react":{"version":"18.2.0"},"antd":{"version":"5.2.1"},"react-dom":{"version":">=16.9.0"}},"hideActions":["CSB"],"identifier":"usememoried-demo1"},
  },
  'usememoried-demo2': {
    component: (require('/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useMemoried/demo/demo2.tsx')).default,
    previewerProps: {"sources":{"_":{"tsx":rawCode7},"index.ts":{"import":"..","content":rawCode6}},"dependencies":{"react":{"version":"18.2.0"},"antd":{"version":"5.2.1"},"react-dom":{"version":">=16.9.0"}},"title":"useMemoizedFn 函数地址不会变化，可以用于性能优化","hideActions":["CSB"],"description":"<div class=\"markdown\"><p>示例中 <code>memoizedFn</code> 是不会变化的，<code>callbackFn</code> 在 count 变化时变化。</p></div>","identifier":"usememoried-demo2"},
  },
  'usethrottle-demo1': {
    component: (require('/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useThrottle/demo/demo1.tsx')).default,
    previewerProps: {"sources":{"_":{"tsx":rawCode8}},"dependencies":{"react":{"version":"^16.8.0 || ^17.0.0 || ^18.0.0"},"cdy-hooks":{"version":"0.0.1"}},"hideActions":["CSB"],"identifier":"usethrottle-demo1"},
  },
  'usethrottlefn-demo1': {
    component: (require('/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useThrottleFn/demo/demo1.tsx')).default,
    previewerProps: {"sources":{"_":{"tsx":rawCode9}},"dependencies":{"react":{"version":"^16.8.0 || ^17.0.0 || ^18.0.0"},"cdy-hooks":{"version":"0.0.1"}},"hideActions":["CSB"],"identifier":"usethrottlefn-demo1"},
  },
  'usetitle-demo1': {
    component: (require('/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useTitle/demo/demo1.tsx')).default,
    previewerProps: {"sources":{"_":{"tsx":rawCode10}},"dependencies":{"react":{"version":"^16.8.0 || ^17.0.0 || ^18.0.0"},"cdy-hooks":{"version":"0.0.1"}},"hideActions":["CSB"],"identifier":"usetitle-demo1"},
  },
  'usetoggle-demo1': {
    component: (require('/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useToggle/demo/demo1.tsx')).default,
    previewerProps: {"sources":{"_":{"tsx":rawCode11}},"dependencies":{"react":{"version":"^16.8.0 || ^17.0.0 || ^18.0.0"},"cdy-hooks":{"version":"0.0.1"}},"hideActions":["CSB"],"identifier":"usetoggle-demo1"},
  },
  'usetoggle-demo2': {
    component: (require('/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useToggle/demo/demo2.tsx')).default,
    previewerProps: {"sources":{"_":{"tsx":rawCode12}},"dependencies":{"react":{"version":"^16.8.0 || ^17.0.0 || ^18.0.0"},"cdy-hooks":{"version":"0.0.1"}},"hideActions":["CSB"],"identifier":"usetoggle-demo2"},
  },
  'useunmount-demo1': {
    component: (require('/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useUnmount/demo/demo1.tsx')).default,
    previewerProps: {"sources":{"_":{"tsx":rawCode13}},"dependencies":{"react":{"version":"^16.8.0 || ^17.0.0 || ^18.0.0"},"antd":{"version":"5.2.1"},"cdy-hooks":{"version":"0.0.1"},"react-dom":{"version":">=16.9.0"}},"hideActions":["CSB"],"identifier":"useunmount-demo1"},
  },
  'useunmountedref-demo1': {
    component: (require('/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useUnmountedRef/demo/demo1.tsx')).default,
    previewerProps: {"sources":{"_":{"tsx":rawCode14}},"dependencies":{"react":{"version":">=16.9.0"},"cdy-hooks":{"version":"0.0.1"},"antd":{"version":"5.2.1"},"react-dom":{"version":">=16.9.0"}},"hideActions":["CSB"],"identifier":"useunmountedref-demo1"},
  },
  'useupdate-demo1': {
    component: (require('/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useUpdate/demo/demo1.tsx')).default,
    previewerProps: {"sources":{"_":{"tsx":rawCode15}},"dependencies":{"react":{"version":"^16.8.0 || ^17.0.0 || ^18.0.0"},"cdy-hooks":{"version":"0.0.1"}},"identifier":"useupdate-demo1"},
  },
  'useupdateeffect-demo1': {
    component: (require('/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useUpdateEffect/demo/demo1.tsx')).default,
    previewerProps: {"sources":{"_":{"tsx":rawCode16},"index.ts":{"import":"..","content":rawCode17},"createUpdateEffect/index.ts":{"import":"../createUpdateEffect","content":rawCode18}},"dependencies":{"react":{"version":"18.2.0"}},"hideActions":["CSB"],"identifier":"useupdateeffect-demo1"},
  },
};

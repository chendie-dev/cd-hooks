// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';
import rawCode1 from '!!dumi-raw-code-loader!/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useBoolean/demo/demo1.tsx?dumi-raw-code';
import rawCode2 from '!!dumi-raw-code-loader!/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useDebounceFn/demo/demo1.tsx?dumi-raw-code';
import rawCode3 from '!!dumi-raw-code-loader!/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useLatest/demo/demo1.tsx?dumi-raw-code';
import rawCode4 from '!!dumi-raw-code-loader!/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useTitle/demo/demo1.tsx?dumi-raw-code';
import rawCode5 from '!!dumi-raw-code-loader!/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useToggle/demo/demo1.tsx?dumi-raw-code';
import rawCode6 from '!!dumi-raw-code-loader!/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useToggle/demo/demo2.tsx?dumi-raw-code';
import rawCode7 from '!!dumi-raw-code-loader!/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useUnmount/demo/demo1.tsx?dumi-raw-code';

export default {
  'useboolean-demo1': {
    component: (require('/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useBoolean/demo/demo1.tsx')).default,
    previewerProps: {"sources":{"_":{"tsx":rawCode1}},"dependencies":{"react":{"version":"^16.8.0 || ^17.0.0 || ^18.0.0"},"cd-hooks":{"version":"0.0.1"}},"title":"基础用法","description":"<div class=\"markdown\"><p>切换 boolean，可以接收默认值。</p></div>","identifier":"useboolean-demo1"},
  },
  'usedebouncefn-demo1': {
    component: (require('/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useDebounceFn/demo/demo1.tsx')).default,
    previewerProps: {"sources":{"_":{"tsx":rawCode2}},"dependencies":{"cd-hooks":{"version":"0.0.1"},"react":{"version":"^16.8.0 || ^17.0.0 || ^18.0.0"}},"title":"基础用法","hideActions":["CSB"],"description":"<div class=\"markdown\"><p>频繁调用 run，但只会在所有点击完成 500ms 后执行一次相关函数</p></div>","identifier":"usedebouncefn-demo1"},
  },
  'uselatest-demo1': {
    component: (require('/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useLatest/demo/demo1.tsx')).default,
    previewerProps: {"sources":{"_":{"tsx":rawCode3}},"dependencies":{"react":{"version":"^16.8.0 || ^17.0.0 || ^18.0.0"},"cd-hooks":{"version":"0.0.1"}},"title":"基础用法","hideActions":["CSB"],"description":"<div class=\"markdown\"><p>useLatest 返回的永远是最新值</p></div>","identifier":"uselatest-demo1"},
  },
  'usetitle-demo1': {
    component: (require('/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useTitle/demo/demo1.tsx')).default,
    previewerProps: {"sources":{"_":{"tsx":rawCode4}},"dependencies":{"react":{"version":"^16.8.0 || ^17.0.0 || ^18.0.0"},"cd-hooks":{"version":"0.0.1"}},"hideActions":["CSB"],"identifier":"usetitle-demo1"},
  },
  'usetoggle-demo1': {
    component: (require('/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useToggle/demo/demo1.tsx')).default,
    previewerProps: {"sources":{"_":{"tsx":rawCode5}},"dependencies":{"react":{"version":"^16.8.0 || ^17.0.0 || ^18.0.0"},"cd-hooks":{"version":"0.0.1"}},"hideActions":["CSB"],"identifier":"usetoggle-demo1"},
  },
  'usetoggle-demo2': {
    component: (require('/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useToggle/demo/demo2.tsx')).default,
    previewerProps: {"sources":{"_":{"tsx":rawCode6}},"dependencies":{"react":{"version":"^16.8.0 || ^17.0.0 || ^18.0.0"},"cd-hooks":{"version":"0.0.1"}},"hideActions":["CSB"],"identifier":"usetoggle-demo2"},
  },
  'useunmount-demo1': {
    component: (require('/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useUnmount/demo/demo1.tsx')).default,
    previewerProps: {"sources":{"_":{"tsx":rawCode7}},"dependencies":{"react":{"version":"^16.8.0 || ^17.0.0 || ^18.0.0"},"antd":{"version":"5.2.1"},"cd-hooks":{"version":"0.0.1"},"react-dom":{"version":">=16.9.0"}},"hideActions":["CSB"],"identifier":"useunmount-demo1"},
  },
};

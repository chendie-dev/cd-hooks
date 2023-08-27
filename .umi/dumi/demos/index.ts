// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';
import rawCode1 from '!!dumi-raw-code-loader!/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useToggle/demo/demo1.tsx?dumi-raw-code';
import rawCode2 from '!!dumi-raw-code-loader!/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useToggle/demo/demo2.tsx?dumi-raw-code';
import rawCode3 from '!!dumi-raw-code-loader!/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useBoolean/demo/demo1.tsx?dumi-raw-code';

export default {
  'usetoggle-demo1': {
    component: (require('/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useToggle/demo/demo1.tsx')).default,
    previewerProps: {"sources":{"_":{"tsx":rawCode1}},"dependencies":{"react":{"version":"18.2.0"}},"identifier":"usetoggle-demo1"},
  },
  'usetoggle-demo2': {
    component: (require('/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useToggle/demo/demo2.tsx')).default,
    previewerProps: {"sources":{"_":{"tsx":rawCode2}},"dependencies":{"react":{"version":"18.2.0"}},"identifier":"usetoggle-demo2"},
  },
  'useboolean-demo1': {
    component: (require('/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useBoolean/demo/demo1.tsx')).default,
    previewerProps: {"sources":{"_":{"tsx":rawCode3}},"dependencies":{"react":{"version":"18.2.0"}},"title":"基础用法","description":"<div class=\"markdown\"><p>切换 boolean，可以接收默认值。</p></div>","identifier":"useboolean-demo1"},
  },
};

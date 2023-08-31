// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/chendie/Documents/project/cd-hooks/node_modules/.pnpm/@umijs+runtime@3.5.41_react@16.14.0/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [require('../dumi/layout').default],
    "component": ((props) => {
        const React = require('react');
        const { default: getDemoRenderArgs } = require('/Users/chendie/Documents/project/cd-hooks/node_modules/.pnpm/@umijs+preset-dumi@1.1.48_react-dom@18.2.0_react-router@6.4.2_react@18.2.0_typescript@5.1.3_umi@3.5.41/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
        const { default: Previewer } = require('dumi-theme-default/es/builtins/Previewer.js');
        const { usePrefersColor, context } = require('dumi/theme');

        
      const { demos } = React.useContext(context);
      const [renderArgs, setRenderArgs] = React.useState([]);

      // update render args when props changed
      React.useLayoutEffect(() => {
        setRenderArgs(getDemoRenderArgs(props, demos));
      }, [props.match.params.uuid, props.location.query.wrapper, props.location.query.capture]);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
        })
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [require('../dumi/layout').default, require('/Users/chendie/Documents/project/cd-hooks/node_modules/.pnpm/dumi-theme-default@1.1.24_@umijs+preset-dumi@1.1.48_react-dom@18.2.0_react@18.2.0/node_modules/dumi-theme-default/es/layout.js').default],
    "routes": [
      {
        "path": "/hooks/use-boolean",
        "component": require('/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useBoolean/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useBoolean/index.md",
          "updatedTime": 1693308934000,
          "nav": {
            "path": "/hooks",
            "title": "UseBoolean"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useBoolean",
              "heading": "useboolean"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Params",
              "heading": "params"
            },
            {
              "depth": 3,
              "value": "Result",
              "heading": "result"
            },
            {
              "depth": 3,
              "value": "Actions",
              "heading": "actions"
            }
          ],
          "title": "useBoolean",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-boolean",
            "title": "UseBoolean"
          }
        },
        "title": "useBoolean - cd hooks"
      },
      {
        "path": "/hooks/use-debounce",
        "component": require('/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useDebounce/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useDebounce/index.md",
          "updatedTime": 1693312877000,
          "nav": {
            "path": "/hooks",
            "title": "UseDebounce"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useDebounce",
              "heading": "usedebounce"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Params",
              "heading": "params"
            },
            {
              "depth": 3,
              "value": "Options",
              "heading": "options"
            }
          ],
          "title": "useDebounce",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-debounce",
            "title": "UseDebounce"
          }
        },
        "title": "useDebounce - cd hooks"
      },
      {
        "path": "/hooks/use-debounce-fn",
        "component": require('/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useDebounceFn/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useDebounceFn/index.md",
          "updatedTime": 1693308934000,
          "nav": {
            "path": "/hooks",
            "title": "UseDebounceFn"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useDebounceFn",
              "heading": "usedebouncefn"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Params",
              "heading": "params"
            },
            {
              "depth": 3,
              "value": "Options",
              "heading": "options"
            },
            {
              "depth": 3,
              "value": "Result",
              "heading": "result"
            }
          ],
          "title": "useDebounceFn",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-debounce-fn",
            "title": "UseDebounceFn"
          }
        },
        "title": "useDebounceFn - cd hooks"
      },
      {
        "path": "/hooks/use-latest",
        "component": require('/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useLatest/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useLatest/index.md",
          "updatedTime": 1693308934000,
          "nav": {
            "path": "/hooks",
            "title": "UseLatest"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useLatest",
              "heading": "uselatest"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "useLatest",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-latest",
            "title": "UseLatest"
          }
        },
        "title": "useLatest - cd hooks"
      },
      {
        "path": "/hooks/use-memoried",
        "component": require('/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useMemoried/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useMemoried/index.md",
          "updatedTime": 1693469334486,
          "nav": {
            "path": "/hooks",
            "title": "UseMemoried"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useMemoizedFn",
              "heading": "usememoizedfn"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 3,
              "value": "性能提升",
              "heading": "性能提升"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Result",
              "heading": "result"
            },
            {
              "depth": 3,
              "value": "Params",
              "heading": "params"
            }
          ],
          "title": "useMemoizedFn",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-memoried",
            "title": "UseMemoried"
          }
        },
        "title": "useMemoizedFn - cd hooks"
      },
      {
        "path": "/hooks/use-throttle",
        "component": require('/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useThrottle/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useThrottle/index.md",
          "updatedTime": 1693438883505,
          "nav": {
            "path": "/hooks",
            "title": "UseThrottle"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useThrottle",
              "heading": "usethrottle"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Params",
              "heading": "params"
            },
            {
              "depth": 3,
              "value": "Options",
              "heading": "options"
            }
          ],
          "title": "useThrottle",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-throttle",
            "title": "UseThrottle"
          }
        },
        "title": "useThrottle - cd hooks"
      },
      {
        "path": "/hooks/use-throttle-fn",
        "component": require('/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useThrottleFn/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useThrottleFn/index.md",
          "updatedTime": 1693366102690,
          "nav": {
            "path": "/hooks",
            "title": "UseThrottleFn"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useThrottleFn",
              "heading": "usethrottlefn"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Params",
              "heading": "params"
            },
            {
              "depth": 3,
              "value": "Options",
              "heading": "options"
            },
            {
              "depth": 3,
              "value": "Result",
              "heading": "result"
            }
          ],
          "title": "useThrottleFn",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-throttle-fn",
            "title": "UseThrottleFn"
          }
        },
        "title": "useThrottleFn - cd hooks"
      },
      {
        "path": "/hooks/use-title",
        "component": require('/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useTitle/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useTitle/index.md",
          "updatedTime": 1693308934000,
          "nav": {
            "path": "/hooks",
            "title": "UseTitle"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useTitle",
              "heading": "usetitle"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Params",
              "heading": "params"
            },
            {
              "depth": 3,
              "value": "Options",
              "heading": "options"
            }
          ],
          "title": "useTitle",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-title",
            "title": "UseTitle"
          }
        },
        "title": "useTitle - cd hooks"
      },
      {
        "path": "/hooks/use-toggle",
        "component": require('/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useToggle/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useToggle/index.md",
          "updatedTime": 1693308934000,
          "nav": {
            "path": "/hooks",
            "title": "UseToggle"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useToggle",
              "heading": "usetoggle"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 3,
              "value": "高级用法",
              "heading": "高级用法"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Params",
              "heading": "params"
            },
            {
              "depth": 3,
              "value": "Result",
              "heading": "result"
            },
            {
              "depth": 3,
              "value": "Actions",
              "heading": "actions"
            }
          ],
          "title": "useToggle",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-toggle",
            "title": "UseToggle"
          }
        },
        "title": "useToggle - cd hooks"
      },
      {
        "path": "/hooks/use-unmount",
        "component": require('/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useUnmount/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useUnmount/index.md",
          "updatedTime": 1693308934000,
          "nav": {
            "path": "/hooks",
            "title": "UseUnmount"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useUnmount",
              "heading": "useunmount"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "参数",
              "heading": "参数"
            }
          ],
          "title": "useUnmount",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-unmount",
            "title": "UseUnmount"
          }
        },
        "title": "useUnmount - cd hooks"
      },
      {
        "path": "/hooks/use-unmounted-ref",
        "component": require('/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useUnmountedRef/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useUnmountedRef/index.md",
          "updatedTime": 1693361552731,
          "nav": {
            "path": "/hooks",
            "title": "UseUnmountedRef"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useUnmountedRef",
              "heading": "useunmountedref"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "Result",
              "heading": "result"
            }
          ],
          "title": "useUnmountedRef",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-unmounted-ref",
            "title": "UseUnmountedRef"
          }
        },
        "title": "useUnmountedRef - cd hooks"
      },
      {
        "path": "/hooks/use-update",
        "component": require('/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useUpdate/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useUpdate/index.md",
          "updatedTime": 1693450303660,
          "nav": {
            "path": "/hooks",
            "title": "UseUpdate"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useUpdate",
              "heading": "useupdate"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "useUpdate",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-update",
            "title": "UseUpdate"
          }
        },
        "title": "useUpdate - cd hooks"
      },
      {
        "path": "/hooks/use-update-effect",
        "component": require('/Users/chendie/Documents/project/cd-hooks/packages/hooks/src/useUpdateEffect/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useUpdateEffect/index.md",
          "updatedTime": 1693458250795,
          "nav": {
            "path": "/hooks",
            "title": "UseUpdateEffect"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useUpdateEffect",
              "heading": "useupdateeffect"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "useUpdateEffect",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-update-effect",
            "title": "UseUpdateEffect"
          }
        },
        "title": "useUpdateEffect - cd hooks"
      },
      {
        "path": "/",
        "component": require('/Users/chendie/Documents/project/cd-hooks/docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1693105747000,
          "title": "首页",
          "hero": {
            "image": "/logo.png",
            "desc": "<div class=\"markdown\"><p>React Hooks</p></div>",
            "actions": [
              {
                "text": "指南",
                "link": "/guide"
              },
              {
                "text": "Hooks 列表",
                "link": "/hooks"
              }
            ]
          },
          "footer": "<div class=\"markdown\"><p>Copyright (c) © 2023 by cd, All Rights Reserved</p></div>",
          "slugs": [
            {
              "depth": 2,
              "value": "✨ 特性",
              "heading": "-特性"
            },
            {
              "depth": 2,
              "value": "📦 安装",
              "heading": "-安装"
            },
            {
              "depth": 2,
              "value": "🔨 使用",
              "heading": "-使用"
            }
          ]
        },
        "title": "首页 - cd hooks"
      },
      {
        "path": "/guide",
        "component": require('/Users/chendie/Documents/project/cd-hooks/docs/guide/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/guide/index.md",
          "updatedTime": 1693308934000,
          "slugs": [
            {
              "depth": 1,
              "value": "cd-hooks",
              "heading": "cd-hooks"
            },
            {
              "depth": 2,
              "value": "⛰️ 能力支持",
              "heading": "️-能力支持"
            },
            {
              "depth": 3,
              "value": "1. 可靠的代码健壮",
              "heading": "1-可靠的代码健壮"
            },
            {
              "depth": 3,
              "value": "2. 完善的文档能力",
              "heading": "2-完善的文档能力"
            },
            {
              "depth": 3,
              "value": "3. 完整的测试用例",
              "heading": "3-完整的测试用例"
            },
            {
              "depth": 2,
              "value": "🌟 设计目的",
              "heading": "-设计目的"
            },
            {
              "depth": 2,
              "value": "⚒️ 技术选型",
              "heading": "️-技术选型"
            },
            {
              "depth": 3,
              "value": "包管理工具 -- pnpm",
              "heading": "包管理工具----pnpm"
            },
            {
              "depth": 3,
              "value": "构建工具 -- webpack & gulp",
              "heading": "构建工具----webpack--gulp"
            },
            {
              "depth": 3,
              "value": "静态文件打包工具 -- dumi",
              "heading": "静态文件打包工具----dumi"
            },
            {
              "depth": 3,
              "value": "测试工具 -- jest",
              "heading": "测试工具----jest"
            },
            {
              "depth": 2,
              "value": "其他",
              "heading": "其他"
            },
            {
              "depth": 3,
              "value": "生成 CHANGELOG",
              "heading": "生成-changelog"
            },
            {
              "depth": 2,
              "value": "📧 联系",
              "heading": "-联系"
            }
          ],
          "title": "cd-hooks",
          "nav": {
            "path": "/guide",
            "title": "Guide"
          }
        },
        "title": "cd-hooks - cd hooks"
      },
      {
        "path": "/hooks",
        "meta": {},
        "exact": true,
        "redirect": "/hooks/use-unmount"
      }
    ],
    "title": "cd hooks",
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}

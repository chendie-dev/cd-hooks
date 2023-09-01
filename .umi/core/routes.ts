// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from '/Users/chendie/Documents/project/cdy-hooks/node_modules/.pnpm/@umijs+runtime@3.5.41_react@16.14.0/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'../dumi/layout')})],
    "component": ((props) => dynamic({
          loader: async () => {
            const React = await import('react');
            const { default: getDemoRenderArgs } = await import(/* webpackChunkName: 'dumi_demos' */ '/Users/chendie/Documents/project/cdy-hooks/node_modules/.pnpm/@umijs+preset-dumi@1.1.48_react-dom@18.2.0_react-router@6.4.2_react@18.2.0_typescript@5.1.3_umi@3.5.41/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
            const { default: Previewer } = await import(/* webpackChunkName: 'dumi_demos' */ 'dumi-theme-default/es/builtins/Previewer.js');
            const { usePrefersColor, context } = await import(/* webpackChunkName: 'dumi_demos' */ 'dumi/theme');

            return props => {
              
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
    
            }
          },
          loading: () => null,
        }))()
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'../dumi/layout')}), dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'/Users/chendie/Documents/project/cdy-hooks/node_modules/.pnpm/dumi-theme-default@1.1.24_@umijs+preset-dumi@1.1.48_react-dom@18.2.0_react@18.2.0/node_modules/dumi-theme-default/es/layout.js')})],
    "routes": [
      {
        "path": "/",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__index.md' */'/Users/chendie/Documents/project/cdy-hooks/docs/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1693481439000,
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
        "title": "首页 - cdy hooks"
      },
      {
        "path": "/guide",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__guide__index.md' */'/Users/chendie/Documents/project/cdy-hooks/docs/guide/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/guide/index.md",
          "updatedTime": 1693527086000,
          "slugs": [
            {
              "depth": 1,
              "value": "cdy-hooks",
              "heading": "cdy-hooks"
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
          "title": "cdy-hooks",
          "nav": {
            "path": "/guide",
            "title": "Guide"
          }
        },
        "title": "cdy-hooks - cdy hooks"
      },
      {
        "path": "/hooks/use-boolean",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useBoolean__index.md' */'/Users/chendie/Documents/project/cdy-hooks/packages/hooks/src/useBoolean/index.md')}),
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
        "title": "useBoolean - cdy hooks"
      },
      {
        "path": "/hooks/use-debounce",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useDebounce__index.md' */'/Users/chendie/Documents/project/cdy-hooks/packages/hooks/src/useDebounce/index.md')}),
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
        "title": "useDebounce - cdy hooks"
      },
      {
        "path": "/hooks/use-debounce-fn",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useDebounceFn__index.md' */'/Users/chendie/Documents/project/cdy-hooks/packages/hooks/src/useDebounceFn/index.md')}),
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
        "title": "useDebounceFn - cdy hooks"
      },
      {
        "path": "/hooks/use-latest",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useLatest__index.md' */'/Users/chendie/Documents/project/cdy-hooks/packages/hooks/src/useLatest/index.md')}),
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
        "title": "useLatest - cdy hooks"
      },
      {
        "path": "/hooks/use-memoried",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useMemoried__index.md' */'/Users/chendie/Documents/project/cdy-hooks/packages/hooks/src/useMemoried/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useMemoried/index.md",
          "updatedTime": 1693479465000,
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
        "title": "useMemoizedFn - cdy hooks"
      },
      {
        "path": "/hooks/use-throttle",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useThrottle__index.md' */'/Users/chendie/Documents/project/cdy-hooks/packages/hooks/src/useThrottle/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useThrottle/index.md",
          "updatedTime": 1693479465000,
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
        "title": "useThrottle - cdy hooks"
      },
      {
        "path": "/hooks/use-throttle-fn",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useThrottleFn__index.md' */'/Users/chendie/Documents/project/cdy-hooks/packages/hooks/src/useThrottleFn/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useThrottleFn/index.md",
          "updatedTime": 1693479465000,
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
        "title": "useThrottleFn - cdy hooks"
      },
      {
        "path": "/hooks/use-title",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useTitle__index.md' */'/Users/chendie/Documents/project/cdy-hooks/packages/hooks/src/useTitle/index.md')}),
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
        "title": "useTitle - cdy hooks"
      },
      {
        "path": "/hooks/use-toggle",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useToggle__index.md' */'/Users/chendie/Documents/project/cdy-hooks/packages/hooks/src/useToggle/index.md')}),
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
        "title": "useToggle - cdy hooks"
      },
      {
        "path": "/hooks/use-unmount",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useUnmount__index.md' */'/Users/chendie/Documents/project/cdy-hooks/packages/hooks/src/useUnmount/index.md')}),
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
        "title": "useUnmount - cdy hooks"
      },
      {
        "path": "/hooks/use-unmounted-ref",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useUnmountedRef__index.md' */'/Users/chendie/Documents/project/cdy-hooks/packages/hooks/src/useUnmountedRef/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useUnmountedRef/index.md",
          "updatedTime": 1693479465000,
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
        "title": "useUnmountedRef - cdy hooks"
      },
      {
        "path": "/hooks/use-update",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useUpdate__index.md' */'/Users/chendie/Documents/project/cdy-hooks/packages/hooks/src/useUpdate/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useUpdate/index.md",
          "updatedTime": 1693479465000,
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
        "title": "useUpdate - cdy hooks"
      },
      {
        "path": "/hooks/use-update-effect",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useUpdateEffect__index.md' */'/Users/chendie/Documents/project/cdy-hooks/packages/hooks/src/useUpdateEffect/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useUpdateEffect/index.md",
          "updatedTime": 1693479465000,
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
        "title": "useUpdateEffect - cdy hooks"
      },
      {
        "path": "/hooks",
        "meta": {},
        "exact": true,
        "redirect": "/hooks/use-unmount"
      }
    ],
    "title": "cdy hooks",
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

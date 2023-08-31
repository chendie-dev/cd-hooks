export default {
  nodeModulesTransform: {
    type: 'none',
  },
  history: {
    type: 'hash'
  },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: '@alifd/next',
        style: false
      },
      'fusion',
    ],
  ],
  mode: 'site',
  title: 'cd hooks',
  logo: '/logo.png',
  favicon: '/logo.png',
  hash: true,
  alias: {
    cdHooks: process.cwd() + '/packages/hooks/src/index.ts',
  },
  resolve: {
    includes: [ 'packages/hooks/src','docs'],
  },
  links: [
    {
      rel: 'stylesheet',
      href: 'https://unpkg.com/@alifd/theme-design-pro@0.6.2/dist/next-noreset.min.css',
    },
    { rel: 'stylesheet', href: '/style.css' },
  ],
  navs: [
    { title: '指南', path: '/guide' },
    { title: 'Hooks', path: '/hooks' },
    { title: 'GitHub', path: 'https://github.com/chendie-dev/cd-hooks' },
  ],
  menus: {
    '/': [
      {
        title: '首页',
        path: 'index',
      },
    ],
    '/guide': [
      {
        title: '介绍',
        path: '/guide',
      },
    ],
    '/hooks': [
      {
        title: '生命周期',
        children: ['useUnmount','useUnmountedRef'],
      },
      // {
      //   title: '请求',
      //   children: [''],
      // },
      {
        title: '状态',
        children: ['useToggle','useBoolean','useDebounce','useThrottle'],
      },
      {
        title: 'Effect',
        children: ['useDebounceFn','useThrottleFn','useUpdate','useUpdateEffect'],
      },
      {
        title: 'DOM',
        children: ['useTitle',],
      },
      {
        title: '进阶',
        children: ['useLatest','useMemoried'],
      },
    ]
  }
}
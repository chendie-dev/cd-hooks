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
        title: '状态',
        children: ['useToggle','useBoolean'],
      },
    ]
  }
}
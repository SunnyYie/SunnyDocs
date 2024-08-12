import sidebarAlgorithm from './algorithm';

const sidebar = {
  '/': [
    {
      text: '简介',
      collapsed: false,
      items: [
        { text: '什么是SunnyDocs?', link: '/guide' },
        { text: '资源导航', link: '/favorites' },
        {
          text: '年终总结',
          items: [{ text: '2024 年终总结', link: '/2024' }],
        },
      ],
    },
    {
      text: '🔥学习动态',
      collapsed: false,
      items: [
        {
          text: '2024.09',
          link: '/weekly/202409',
        },
      ],
    },
    {
      text: '🎒 JS',
      collapsed: false,
      items: [
        {
          text: '📔 前端设计模式',
          collapsed: false,
          items: [
            { text: '导读', link: '/patterns/guide/' },
            { text: '单例模式', link: '/patterns/singleton-pattern/' },
            { text: '代理模式', link: '/patterns/proxy-pattern/' },
            { text: '提供者模式', link: '/patterns/provider-pattern/' },
            { text: '原型模式', link: '/patterns/prototype-pattern/' },
            {
              text: '容器/演示模式',
              link: '/patterns/container-presentational-pattern/',
            },
            { text: '观察者模式', link: '/patterns/observer-pattern/' },
            { text: '模块模式', link: '/patterns/module-pattern/' },
            { text: '混合模式', link: '/patterns/mixin-pattern/' },
            { text: '中介/中间件模式', link: '/patterns/middleware-pattern/' },
            { text: '高阶组件模式', link: '/patterns/hoc-pattern/' },
          ],
        },
      ],
    },
    {
      text: '🍎 React',
      collapsed: false,
      items: [{ text: '添加 sitemap', link: '/nextjs/sitemap/' }],
    },
    {
      text: '🍎 Next.js',
      collapsed: false,
      items: [{ text: '添加 sitemap', link: '/nextjs/sitemap/' }],
    },
    {
      text: '🍎 Nest.js',
      collapsed: false,
      items: [{ text: '添加 sitemap', link: '/nextjs/sitemap/' }],
    },
    {
      text: '📘 TS 学习',
      collapsed: false,
      items: [
        { text: '导读', link: '/ts/ch' },
        { text: '环境配置', link: '/ts/ch0' },
        { text: '基础操作', link: '/ts/ch1' },
        { text: '工具类', link: '/ts/ch2' },
        { text: '函数系统', link: '/ts/ch3' },
        { text: '泛型', link: '/ts/ch4' },
      ],
    },
    {
      text: '📘 小程序',
      collapsed: false,
      items: [{ text: '添加 sitemap', link: '/nextjs/sitemap/' }],
    },
    {
      text: '🎒 常用工具',
      collapsed: false,
      items: [
        { text: 'emoji-list', link: '/tool/emoji-list' },
        { text: 'finalcut 剪辑快捷键', link: '/tool/finalcut/' },
        { text: '如何正常访问 GitHub？', link: '/tool/github520' },
        { text: '版本管理，Git 基础', link: '/tool/git' },
      ],
    },
  ],
  '/algorithm': sidebarAlgorithm(),
};


export default sidebar;

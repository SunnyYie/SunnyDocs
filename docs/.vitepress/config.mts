import { defineConfig } from 'vitepress';

import { docsVersion, github, name, site, description, logo } from './meta.ts';
import defaultConfig from './defaultConfig.ts';

export default defineConfig({
  title: `${logo} ${name}`,
  description,
  themeConfig: {
    outline: 'deep',
    outlineTitle: '导航栏',
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    editLink: {
      pattern: `${github}/tree/main/docs/:path`,
      text: '在 GitHub 上编辑此页',
    },
    lastUpdatedText: '最后一次更新于',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/SunnyYie' }],

    // todo 移动端属性
    // returnToTopLabel: '返回顶部',
    // darkModeSwitchLabel: '外观',
    // sidebarMenuLabel: '归档',
  },
  ...defaultConfig,
});

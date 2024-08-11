import { defineConfig } from 'vitepress';
import { generateSitemap } from 'sitemap-ts';
import { genFeed } from './plugins/genFeed.ts';
import { docsVersion, github, name, site, description, logo, keywords } from './meta.ts';
import defaultConfig from './defaultConfig.ts';
import sidebar from './sidebar/sidebar.ts';
// import process from 'node:process';

export default defineConfig({
  title: `${logo} ${name}`,
  description,
  head: [
    ['meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }],
    ['meta', { name: 'keywords', content: keywords }],
    ['meta', { name: 'author', content: 'Yi Sun' }],
    ['meta', { property: 'og:type', content: 'article' }],
    ['meta', { name: 'application-name', content: name }],
    ['meta', { name: 'apple-mobile-web-app-title', content: name }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'default' }],
    ['meta', { name: 'theme-color', content: '#06f' }],

    // 设置了 Open Graph 协议的其他属性,用于描述网页、设置网页 URL 和指定网页的语言环境
    ['meta', { property: 'og:description', content: description }],
    ['meta', { property: 'og:url', content: site }],
    // data-website-id：存储网站的唯一标识符。
    // src：指定了脚本的来源URL。
    //  ['script', { 'async': '', 'defer': '', 'data-website-id': `${process.env.UMAMI_WEBSITE_ID || ''}`, 'src': `${process.env.UMAMI_ENDPOINT || ''}` }],
  ],
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
      {
        text: '⏰ 历史记录',
        items: [{ text: '🔥 24 年每周学习', link: '/weekly/2024' }],
      },
      {
        text: '🔥 专栏',
        items: [
          { text: '🔥 全栈知识', link: '/fullStack/' },
          { text: '📋 面试大全', link: '/interview/' },
        ],
      },
      {
        text: '编程',
        items: [
          { text: '⭐ 资源导航', link: '/favorites' },
          { text: '💻 编程学习', link: '/program/' },
          { text: '🔧 编程工具', link: '/tool/' },
        ],
      },
      {
        text: `v ${docsVersion}`,
        items: [
          { text: '🧱 参与贡献', link: '/contributing' },
          { text: '🎉 更新日志', link: `${github}/releases` },
        ],
      },
    ],
    search: {
      provider: 'local',
    },

    footer: {
      message: `用心做好前端学习交流网站，欢迎来 <a target="_blank" style="color: var(--vp-c-brand)" href="${github}">SunnyDocs ${logo}</a>一起进步`,
      copyright: `<a target="_blank" href="${github}/LICENSE">MIT License</a> | 版权所有 © ${new Date().getFullYear()} <a target="_blank" href="${github}">SunnyYie and SunnyDocs contributors</a>`,
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/SunnyYie' },
      {
        icon: {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="20" height="20"  viewBox="0 0 512 512" >
    <path fill="currentColor" d="M488.6 104.1c16.7 18.1 24.4 39.7 23.3 65.7v202.4c-.4 26.4-9.2 48.1-26.5 65.1c-17.2 17-39.1 25.9-65.5 26.7H92.02c-26.45-.8-48.21-9.8-65.28-27.2C9.682 419.4.767 396.5 0 368.2V169.8c.767-26 9.682-47.6 26.74-65.7C43.81 87.75 65.57 78.77 92.02 78h29.38L96.05 52.19c-5.75-5.73-8.63-13-8.63-21.79c0-8.8 2.88-16.06 8.63-21.797C101.8 2.868 109.1 0 117.9 0s16.1 2.868 21.9 8.603L213.1 78h88l74.5-69.397C381.7 2.868 389.2 0 398 0c8.8 0 16.1 2.868 21.9 8.603c5.7 5.737 8.6 12.997 8.6 21.797c0 8.79-2.9 16.06-8.6 21.79L394.6 78h29.3c26.4.77 48 9.75 64.7 26.1zm-38.8 69.7c-.4-9.6-3.7-17.4-10.7-23.5c-5.2-6.1-14-9.4-22.7-9.8H96.05c-9.59.4-17.45 3.7-23.58 9.8c-6.14 6.1-9.4 13.9-9.78 23.5v194.4c0 9.2 3.26 17 9.78 23.5s14.38 9.8 23.58 9.8H416.4c9.2 0 17-3.3 23.3-9.8c6.3-6.5 9.7-14.3 10.1-23.5V173.8zm-264.3 42.7c6.3 6.3 9.7 14.1 10.1 23.2V273c-.4 9.2-3.7 16.9-9.8 23.2c-6.2 6.3-14 9.5-23.6 9.5c-9.6 0-17.5-3.2-23.6-9.5c-6.1-6.3-9.4-14-9.8-23.2v-33.3c.4-9.1 3.8-16.9 10.1-23.2c6.3-6.3 13.2-9.6 23.3-10c9.2.4 17 3.7 23.3 10zm191.5 0c6.3 6.3 9.7 14.1 10.1 23.2V273c-.4 9.2-3.7 16.9-9.8 23.2c-6.1 6.3-14 9.5-23.6 9.5c-9.6 0-17.4-3.2-23.6-9.5c-7-6.3-9.4-14-9.7-23.2v-33.3c.3-9.1 3.7-16.9 10-23.2c6.3-6.3 14.1-9.6 23.3-10c9.2.4 17 3.7 23.3 10z"></path>
  </svg>`,
        },
        link: 'https://space.bilibili.com/687804751',
      },
    ],
    sidebar,

    // todo 移动端属性
    // returnToTopLabel: '返回顶部',
    // darkModeSwitchLabel: '外观',
    // sidebarMenuLabel: '归档',
  },
  // async buildEnd(siteConfig) {
  // 站点地图是一个XML文件，列出了网站上的所有页面，帮助搜索引擎更好地抓取和索引网站内容。
  //   await generateSitemap({ hostname: 'https://SunnyDocs.cn/' });
  // 生成RSS订阅源文件。RSS订阅源允许用户订阅网站内容更新
  //   await genFeed(siteConfig);
  // },

  ...defaultConfig,
});

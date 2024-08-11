---
layout: home
title: SunnyDocs

hero:
  name: "SunnyDocs"
  text: "FullStack Learning"
  tagline: ❤️ 坚持学习，方能不断前行，成就非凡自我 ！
  actions:
    - theme: brand
      text: 什么是SunnyDocs?
      link: /guide
    - theme: alt
      text: 快速开始
      link: /interview
    - theme: alt
      text: GitHub
      link: https://github.com/SunnyYie/SunnyDocs

features:
  - icon: 📋
    title: 面试专栏
    details: 海量前端面试问题解答，一站式阅读体验。
    link: /interview
    linkText: 开始刷题
  - icon: 💬
    title: 编程学习
    details: 同步 B 站视频，文档用于巩固知识。
    link: /program/npm-package
    linkText: 编程学习
  - icon: 🔧
    title: 编程工具
    details: 归纳一些编程相关工具与网站，提高效率。
    link: /tool
    linkText: 提高效率
  - icon: 🎉
    title: 技术视野
    details: 跟随前沿技术，深度和广度学习。
    link: https://github.com/SunnyYie
    linkText: 欢迎 Follow
---

<script setup>
import {VPTeamPage,VPTeamPageTitle, VPTeamMembers} from 'vitepress/theme';

const members = [
  {
    avatar: 'https://www.github.com/SunnyYie.png',
    name: 'Yi Sun',
    title: '坚持学习，方能不断前行，成就非凡自我',
    desc: 'FullStack Developer<br/>Creator @<a href="https://github.com/SunnyYie/SunnyDocs" target="_blank">SunnyDocs</a>',
    links: [
      { icon: 'github', link: 'https://github.com/SunnyYie' },
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      开发人员介绍
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members="members"/>
</VPTeamPage>

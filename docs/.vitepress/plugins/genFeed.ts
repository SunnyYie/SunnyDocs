import path from 'node:path';
import { writeFileSync } from 'node:fs';
import { Feed } from 'feed';
import { type SiteConfig, createContentLoader } from 'vitepress';
import { site as baseUrl, description, name } from '../meta';

function reName(name: string) {
  if (!name) name = 'Yi Sun';
  return name === 'Yi Sun' ? 'SunnyYie' : name;
}

function getGithubLink(name: string) {
  return `https://github.com/${reName(name)}`;
}

export async function genFeed(config: SiteConfig) {
  const feed = new Feed({
    title: name,
    description,
    id: baseUrl,
    link: baseUrl,
    language: 'zh-CN',
    copyright:
      'Copyright (c) present, Yi Sun and SunnyDocs contributors',
  })

  // 加载所有 Markdown 文件
  const posts = await createContentLoader('**/*.md', {
    excerpt: true,
    render: true,
  }).load()

  // 按日期排序
  posts.sort(
    (a, b) =>
      +new Date(b.frontmatter?.date as string)
      - +new Date(a.frontmatter?.date as string),
  )

  for (const { url, frontmatter, html } of posts) {
    // 从每个 Markdown 文件中提取标题、链接、作者、日期等信息，添加到Feed实例中
    let postTitle = '无题'
    postTitle = html?.match(/<h1 id=(.*)>(.*?)<a .*?>/)?.[2] || postTitle
    feed.addItem({
      title: frontmatter?.title || postTitle,
      id: `${baseUrl}${url.slice(1)}`,
      link: `${baseUrl}${url.slice(1)}`,
      guid: `${baseUrl}${url.slice(1)}`,
      description: html,
      content: html,
      author: [
        {
          name: frontmatter?.author || 'Yi Sun',
          link: frontmatter?.author
            ? getGithubLink(frontmatter?.author)
            : undefined,
        },
      ],
      date: frontmatter?.date || new Date('2021-07-01'),
    })
  }

  // 将生成的RSS订阅源写入到指定的输出目录中的 feed.xml 文件中。
  writeFileSync(path.join(config.outDir, 'feed.xml'), feed.rss2())
}

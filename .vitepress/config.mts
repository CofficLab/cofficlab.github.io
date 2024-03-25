import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Coffic Lab",
  description: "为软件做减法",
  base: "/",
  srcDir: "docs",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    logo: '/images/coffic/logo4.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Cisum', link: 'cisum' },
      { text: 'Kuaiyizhi', link: 'kuaiyizhi' },
      { text: 'TravelMode', link: 'travelmode' },
      { text: 'Documents', link: '/cisum/github_actions' }
    ],

    sidebar: [
      {
        text: 'Cisum',
        items: [
          { text: 'GitHub Actions', link: '/cisum/github_actions' },
          // { text: 'Markdown Examples', link: '/cisum/markdown-examples' },
          // { text: 'Runtime API Examples', link: '/cisum/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cofficlab' }
    ],

    footer: {
      message: 'All rights reserved.',
      copyright: 'Copyright © 2024-present Yueyi Network'
    }
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    fr: {
      label: '中文',
      lang: 'zh', // 可选，将作为 `lang` 属性添加到 `html` 标签中
      link: '/zh' // 默认 /fr/ -- 显示在导航栏翻译菜单上，可以是外部的

      // 其余 locale 特定属性...
    }
  }
})

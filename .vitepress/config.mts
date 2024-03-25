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
      { text: 'Cisum', link: '/products/cisum' },
      { text: '快易知', link: '/products/kuaiyizhi' },
      { text: '文档', link: '/cisum/github_actions' }
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
  }
})

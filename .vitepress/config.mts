import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "YueYi Network",
  description: "为软件做减法",
  base: "/",
  srcDir: "docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Cisum', link: '/products/cisum' },
      { text: '文档', link: '/cisum/github_actions' }
    ],

    logo: '/images/logo.png',

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
      { icon: 'github', link: 'https://github.com/YueyiNet/Cisum' }
    ],

    footer: {
      message: 'All rights reserved.',
      copyright: 'Copyright © 2024-present Yueyi Network'
    }
  }
})

import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Coffic Lab",
  description: "为软件做减法",
  base: "/",
  srcDir: "docs",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['script', { src: '/home.js' }]
  ],
  themeConfig: {
    logo: '/images/coffic/logo4.min.png',

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cofficlab' }
    ],

    footer: {
      message: 'All rights reserved.',
      copyright: 'Copyright © 2024-present Yueyi Network'
    }
  },
  locales: {
    en: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Cisum', link: '/en/cisum' },
          { text: 'Kuaiyizhi', link: '/en/kuaiyizhi' },
          { text: 'TravelMode', link: '/en/travelmode' },
          { text: 'Documents', link: '/en/coffic/github_actions' }
        ],
        sidebar: [
          {
            text: 'Coffic',
            items: [
              { text: 'GitHub Actions', link: '/en/coffic/github_actions' },
              // { text: 'Markdown Examples', link: '/cisum/markdown-examples' },
              // { text: 'Runtime API Examples', link: '/cisum/api-examples' }
            ]
          }
        ]
      }
    },
    zh: {
      label: '中文',
      lang: 'zh', // 可选，将作为 `lang` 属性添加到 `html` 标签中
      link: '/zh/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/zh/' },
          { text: 'Cisum-乐音', link: '/zh/cisum' },
          { text: '快易知', link: '/zh/kuaiyizhi' },
          { text: 'TravelMode', link: '/zh/travelmode' },
          { text: '文档', link: '/zh/coffic/github_actions' }
        ],
        sidebar: [
          {
            text: 'Coffic',
            items: [
              { text: 'GitHub Actions', link: '/zh/coffic/github_actions' }
            ]
          }
        ]
      }
    }
  }
})

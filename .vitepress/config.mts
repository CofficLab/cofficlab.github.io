import { defineConfig } from 'vitepress'
import { createSidebar } from './sidebar'
import { createNav } from './nav'

export default defineConfig({
  title: "Coffic Lab",
  description: "我们生产简洁无干扰的优质软件 We produce high-quality, distraction-free software",
  lastUpdated: true,
  srcDir: './docs',
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

    editLink: {
      pattern: 'https://github.com/cofficlab/cofficlab.github.io/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    nav: createNav('en'),
  },
  locales: {
    en: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: createNav('en'),
        sidebar: createSidebar('en')
      }
    },
    zh: {
      label: '中文',
      lang: 'zh',
      link: '/zh',
      themeConfig: {
        nav: createNav('zh'),
        sidebar: createSidebar('zh')
      }
    }
  }
})


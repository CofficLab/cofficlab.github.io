import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Coffic Lab",
  description: "我们生产简洁无干扰的优质软件 We produce high-quality, distraction-free software",
  base: "/",
  srcDir: "docs",
  lastUpdated: true,
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
  },
  locales: {
    en: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'JuiceEditor', link: '/en/juiceEditor/' },
          { text: 'Cisum', link: '/en/cisum' },
          { text: 'JuiceNote', link: '/en/juiceNote' },
          { text: 'TravelMode', link: '/en/travelmode' },
          { text: 'GitOK', link: '/en/gitok/' },
          {
            text: 'Documents', items: [
              { text: 'JuiceEditor', link: '/en/juiceEditor/documents/guide/introduce' },
            ]
          }
        ],

        sidebar: {
          '/en/coffic/': [
            {
              text: 'Coffic',
              items: [
                { text: 'GitHub Actions', link: '/en/coffic/github_actions' },
                { text: 'Softwares', link: '/en/coffic/softwares' }
              ]
            },
            {
              text: 'All in One',
              items: [
                { text: 'DeskMini 310', link: '/en/all-in-one/all-in-one' },
              ]
            }
          ],

          '/en/juiceEditor/': [
            {
              text: 'Guide',
              items: [
                { text: 'Introduce', link: '/en/juiceEditor/documents/guide/introduce' },
                { text: 'Start', link: '/en/juiceEditor/documents/guide/start' },
              ]
            },
            {
              text: 'Components',
              items: [
                { text: 'Banner', link: '/en/juiceEditor/documents/components/banner' },
                { text: 'BlockQuote', link: '/en/juiceEditor/documents/components/blockquote' },
                { text: 'Heading', link: '/en/juiceEditor/documents/components/heading' },
                { text: 'Image', link: '/en/juiceEditor/documents/components/image' },
                { text: 'Table', link: '/en/juiceEditor/documents/components/table' },
                { text: 'Link', link: '/en/juiceEditor/documents/components/link' },
                { text: 'Paragraph', link: '/en/juiceEditor/documents/components/paragraph' },
                { text: 'BulletList', link: '/en/juiceEditor/documents/components/bulletList' },
                { text: 'TaskList', link: '/en/juiceEditor/documents/components/tasklist' },
                { text: 'Kbd', link: '/en/juiceEditor/documents/components/keyboard' },
              ]
            },
            {
              text: 'API',
              items: [
                { text: 'Introduce', link: '/en/juiceEditor/documents/api/intro' },
              ]
            },
            {
              text: 'Data',
              items: [
                { text: 'Introduce', link: '/en/juiceEditor/documents/data/intro' },
                { text: 'Node', link: '/en/juiceEditor/documents/data/node' },
                { text: 'EditorData', link: '/en/juiceEditor/documents/data/editorData' },
              ]
            },
            {
              text: 'Plugins',
              items: [
                { text: 'Introduce', link: '/en/juiceEditor/documents/plugins/intro' },
                { text: 'LocalDB', link: '/en/juiceEditor/documents/plugins/localDB' },
                { text: 'Webkit', link: '/en/juiceEditor/documents/plugins/webkit' }
              ]
            },
            {
              text: 'Principle',
              items: [
                { text: 'CI/CD', link: '/en/juiceEditor/documents/principle/ci' },
                { text: 'Web Component', link: '/en/juiceEditor/documents/principle/web-component' }
              ]
            },
            {
              text: 'Projects',
              items: [
                { text: 'Kuaiyizhi Web', link: '/en/juiceEditor/documents/projects/kuaiyizhi_web' },
                { text: 'Kuaiyizhi APP', link: '/en/juiceEditor/documents/projects/kuaiyizhi_app' }
              ]
            },
          ],
        }
      }
    },
    zh: {
      label: '中文',
      lang: 'zh', // 可选，将作为 `lang` 属性添加到 `html` 标签中
      link: '/zh/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/zh/' },
          { text: 'JuiceEditor', link: '/zh/juiceEditor/' },
          { text: 'Cisum-乐音', link: '/zh/cisum' },
          { text: '聚思笔记', link: '/zh/juiceNote' },
          { text: 'TravelMode', link: '/zh/travelmode' },
          { text: 'GitOK', link: '/zh/gitok' },
          {
            text: '文档', items: [
              { text: 'JuiceEditor', link: '/zh/juiceEditor/documents/guide/introduce' },
            ]
          }
        ],
        sidebar: {
          '/zh/coffic/': [
            {
              text: 'Coffic',
              items: [
                { text: 'GitHub Actions', link: '/zh/coffic/github_actions' },
                { text: 'Softwares', link: '/zh/coffic/softwares' }
              ]
            },
            {
              text: 'All in One',
              items: [
                { text: 'DeskMini 310', link: '/zh/all-in-one/all-in-one' },
              ]
            }
          ],

          '/zh/juiceEditor/': [
            {
              text: '使用',
              items: [
                { text: '介绍', link: '/zh/juiceEditor/documents/guide/introduce' },
                { text: '开始', link: '/zh/juiceEditor/documents/guide/start' },
              ]
            },
            {
              text: '富文本组件',
              items: [
                { text: 'Banner', link: '/zh/juiceEditor/documents/components/banner' },
                { text: 'BlockQuote', link: '/zh/juiceEditor/documents/components/blockquote' },
                { text: 'Heading', link: '/zh/juiceEditor/documents/components/heading' },
                { text: 'Image', link: '/zh/juiceEditor/documents/components/image' },
                { text: 'Table', link: '/zh/juiceEditor/documents/components/table' },
                { text: 'Link', link: '/zh/juiceEditor/documents/components/link' },
                { text: 'Paragraph', link: '/zh/juiceEditor/documents/components/paragraph' },
                { text: 'BulletList', link: '/zh/juiceEditor/documents/components/bulletList' },
                { text: 'TaskList', link: '/zh/juiceEditor/documents/components/tasklist' },
                { text: 'Kbd', link: '/zh/juiceEditor/documents/components/keyboard' },
              ]
            },
            {
              text: 'API',
              items: [
                { text: '简介', link: '/zh/juiceEditor/documents/api/intro' },
              ]
            },
            {
              text: '数据结构',
              items: [
                { text: '简介', link: '/zh/juiceEditor/documents/data/intro' },
                { text: 'Node', link: '/zh/juiceEditor/documents/data/node' },
                { text: 'EditorData', link: '/zh/juiceEditor/documents/data/editorData' },
              ]
            },
            {
              text: '插件',
              items: [
                { text: '简介', link: '/zh/juiceEditor/documents/plugins/intro' },
                { text: 'LocalDB', link: '/zh/juiceEditor/documents/plugins/localDB' },
                { text: 'Webkit', link: '/zh/juiceEditor/documents/plugins/webkit' }
              ]
            },
            {
              text: '原理',
              items: [
                { text: 'CI/CD', link: '/zh/juiceEditor/documents/principle/ci' },
                { text: 'Web Component', link: '/zh/juiceEditor/documents/principle/web-component' }
              ]
            },
            {
              text: '案例',
              items: [
                { text: '快易知网站', link: '/zh/juiceEditor/documents/projects/kuaiyizhi_web' },
                { text: '快易知APP', link: '/zh/juiceEditor/documents/projects/kuaiyizhi_app' }
              ]
            },
          ],
        }
      }
    }
  }
})


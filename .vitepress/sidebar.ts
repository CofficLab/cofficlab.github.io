import type { DefaultTheme } from 'vitepress'

export const createSidebar = (lang: string): DefaultTheme.Sidebar => ({
    [`/${lang}/coffic/`]: [
        {
            text: 'Coffic',
            items: [
                { text: 'GitHub Actions', link: `/${lang}/coffic/github_actions` },
                { text: 'Softwares', link: `/${lang}/coffic/softwares` }
            ]
        },
        {
            text: 'All in One',
            items: [
                { text: 'DeskMini 310', link: `/${lang}/all-in-one/all-in-one` },
            ]
        }
    ],
    [`/${lang}/juiceEditor/`]: [
        {
            text: lang === 'zh' ? '使用' : 'Guide',
            items: [
                { text: lang === 'zh' ? '介绍' : 'Introduce', link: `/${lang}/juiceEditor/guide/introduce` },
                { text: lang === 'zh' ? '开始' : 'Start', link: `/${lang}/juiceEditor/guide/start` },
            ]
        },
        {
            text: lang === 'zh' ? '富文本组件' : 'Components',
            items: [
                { text: 'Banner', link: `/${lang}/juiceEditor/components/banner` },
                { text: 'BlockQuote', link: `/${lang}/juiceEditor/components/blockquote` },
                { text: 'Heading', link: `/${lang}/juiceEditor/components/heading` },
                { text: 'Image', link: `/${lang}/juiceEditor/components/image` },
                { text: 'Table', link: `/${lang}/juiceEditor/components/table` },
                { text: 'Link', link: `/${lang}/juiceEditor/components/link` },
                { text: 'Paragraph', link: `/${lang}/juiceEditor/components/paragraph` },
                { text: 'BulletList', link: `/${lang}/juiceEditor/components/bulletList` },
                { text: 'TaskList', link: `/${lang}/juiceEditor/components/tasklist` },
                { text: 'Kbd', link: `/${lang}/juiceEditor/components/keyboard` },
            ]
        },
        {
            text: 'API',
            items: [
                { text: lang === 'zh' ? '简介' : 'Introduce', link: `/${lang}/juiceEditor/api/intro` },
            ]
        },
        {
            text: lang === 'zh' ? '数据结构' : 'Data',
            items: [
                { text: lang === 'zh' ? '简介' : 'Introduce', link: `/${lang}/juiceEditor/data/intro` },
                { text: 'Node', link: `/${lang}/juiceEditor/data/node` },
                { text: 'EditorData', link: `/${lang}/juiceEditor/data/editorData` },
            ]
        },
        {
            text: lang === 'zh' ? '插件' : 'Plugins',
            items: [
                { text: lang === 'zh' ? '简介' : 'Introduce', link: `/${lang}/juiceEditor/plugins/intro` },
                { text: 'LocalDB', link: `/${lang}/juiceEditor/plugins/localDB` },
                { text: 'Webkit', link: `/${lang}/juiceEditor/plugins/webkit` }
            ]
        },
        {
            text: lang === 'zh' ? '原理' : 'Principle',
            items: [
                { text: 'CI/CD', link: `/${lang}/juiceEditor/principle/ci` },
                { text: 'Web Component', link: `/${lang}/juiceEditor/principle/web-component` }
            ]
        },
        {
            text: lang === 'zh' ? '案例' : 'Projects',
            items: [
                { text: lang === 'zh' ? '快易知网站' : 'Kuaiyizhi Web', link: `/${lang}/juiceEditor/projects/kuaiyizhi_web` },
                { text: lang === 'zh' ? '快易知APP' : 'Kuaiyizhi APP', link: `/${lang}/juiceEditor/projects/kuaiyizhi_app` }
            ]
        }
    ]
}) 
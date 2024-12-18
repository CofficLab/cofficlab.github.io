import type { DefaultTheme } from 'vitepress'

export const createNav = (lang: string): DefaultTheme.NavItem[] => [
    { text: 'Home', link: `/${lang}` },
    { text: 'JuiceEditor', link: `/${lang}/juiceEditor` },
    { text: lang === 'zh' ? 'Cisum-乐音' : 'Cisum', link: `/${lang}/cisum` },
    { text: lang === 'zh' ? '聚思笔记' : 'JuiceNote', link: `/${lang}/juiceNote` },
    { text: 'TravelMode', link: `/${lang}/travelmode` },
    { text: 'GitOK', link: `/${lang}/gitok` },
    {
        text: lang === 'zh' ? '文档' : 'Documents',
        items: [
            { text: 'JuiceEditor', link: `/${lang}/juiceEditor/guide/introduce` },
        ]
    }
] 
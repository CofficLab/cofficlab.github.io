// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import vue from '@astrojs/vue';
import starlightUtils from '@lorenzo_lewis/starlight-utils';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://cofficlab.github.io',
  redirects: {
    '/zh/juiceEditor': '/juiceEditor',
  },
  integrations: [
    starlight({
      plugins: [
        starlightUtils({
          navLinks: {
            leading: { useSidebarLabelled: 'leadingNavLinks' },
          },
        }),
      ],
      customCss: ['./src/styles/custom.css'],
      title: 'Coffic',
      defaultLocale: 'en',
      locales: {
        // 英文文档在 `src/content/docs/en/` 中。
        en: {
          label: 'English',
        },
        // 简体中文文档在 `src/content/docs/zh-cn/` 中。
        'zh-cn': {
          label: '简体中文',
          lang: 'zh-CN',
        },
      },
      logo: {
        light: './src/assets/coffic/logo4.min.png',
        dark: './src/assets/coffic/logo4.min.png',
      },
      components: {
        PageFrame: './src/custom/PageFrame.astro',
        ContentPanel: './src/custom/ContentPanel.astro',
      },
      social: {
        github: 'https://github.com/cofficlab',
      },
      sidebar: [
        {
          label: 'JuiceEditor',
          autogenerate: { directory: 'juiceEditor' },
        },
        {
          label: 'leadingNavLinks',
          items: [
            { label: 'Cisum', link: '/cisum' },
            { label: 'Gitok', link: '/gitok' },
            { label: 'TravelMode', link: '/travelmode' },
            { label: 'JuiceNote', link: '/juice_note' },
            { label: 'JuiceEditor', link: '/juice_editor' },
          ],
        },
      ],
    }),
    vue({
      include: ['**/*.vue'], // 明确包含Vue组件
    }),
    tailwind(),
  ],
});

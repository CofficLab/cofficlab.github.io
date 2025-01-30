// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import vue from '@astrojs/vue';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Coffic',
      logo: {
        light: './src/assets/coffic/logo3.min.png',
        dark: './src/assets/coffic/logo3.min.png',
      },
      components: {
        Header: './src/custom/Header.astro',
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
      ],
    }),
    vue({
      include: ['**/*.vue'], // 明确包含Vue组件
    }),
    tailwind(),
  ],
});

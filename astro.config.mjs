// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import vue from '@astrojs/vue';
import tailwind from '@astrojs/tailwind';
import starlightConfig from './src/config/starlight.config.mjs';
import redirectsConfig from './src/config/redirects.config.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://cofficlab.github.io',
  vite: {
    server: {
      watch: {
        // 监听配置文件目录变化
        ignored: ['!**/src/config/**'],
      },
    },
  },
  redirects: redirectsConfig,
  integrations: [
    starlight(starlightConfig),
    vue({
      include: ['**/*.vue'],
    }),
    tailwind(),
  ],
});

// @ts-check
import { defineConfig } from 'astro/config';
import path from 'path';
import pagefind from 'astro-pagefind';
import tailwindcss from '@tailwindcss/vite';
import vue from '@astrojs/vue';

import markdoc from '@astrojs/markdoc';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import robotsTxt from 'astro-robots-txt';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://cofficlab.github.io',

  prefetch: {
    prefetchAll: true,
  },

  vite: {
    server: {
      hmr: {
        overlay: false,
      },
    },

    resolve: {
      alias: {
        '@': path.resolve('./src'),
        '@components': path.resolve('./src/components'),
        '@utils': path.resolve('./src/utils'),
        '@paths': path.resolve('./src/paths'),
        '@database': path.resolve('./src/database'),
        '@models': path.resolve('./src/models'),
        '@layouts': path.resolve('./src/layouts'),
        '@interface': path.resolve('./src/interface'),
        '@assets': path.resolve('./src/assets'),
      },
    },

    plugins: [tailwindcss()],
  },

  integrations: [
    pagefind(),
    vue(),
    markdoc(),
    mdx(),
    sitemap({
      filter: (page) => page !== 'https://kuaiyizhi.cn/auth/login',
    }),
    robotsTxt({
      policy: [
        {
          userAgent: '*',
          allow: '/',
          disallow: ['/auth/login'],
        },
      ],
    }),
  ],

  adapter: cloudflare(),
});
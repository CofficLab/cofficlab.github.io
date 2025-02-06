import starlightUtils from '@lorenzo_lewis/starlight-utils';
import sidebarConfig from './sidebar.config.mjs';
import starlightBlog from 'starlight-blog';
import starlightLinksValidator from 'starlight-links-validator';
import smartHeaderPlugin from '../../plugins/smart-header';
import smartStylePlugin from '../../plugins/smart-style';
import smartSearchPlugin from '../../plugins/smart-search';
import smartPagePlugin from '../../plugins/smart-page';

export default {
  plugins: [
    smartStylePlugin(),
    smartSearchPlugin(),
    smartHeaderPlugin(),
    smartPagePlugin(),
    starlightLinksValidator(),
    starlightBlog(),
    starlightUtils({
      navLinks: {
        leading: { useSidebarLabelled: 'leadingNavLinks' },
      },
    }),
  ],
  title: 'Coffic',
  defaultLocale: 'root',
  locales: {
    root: {
      label: 'English',
      lang: 'en',
    },
    zh: {
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
  sidebar: sidebarConfig,
};

import DefaultTheme from 'vitepress/theme';
import Layout from './Layout.vue';

import './coffic2.postcss';
import CisumHero from '../../../docs/components/Cisum/CisumHero.vue';

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('Cisum', CisumHero)
  }
};

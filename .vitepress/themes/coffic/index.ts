import type { Theme } from 'vitepress';
import Layout from './components/Layout.vue';
import AppFeature from './components/AppFeature.vue';
import HeroSection from './components/HeroSection.vue';
import FeatureGrid from './components/FeatureGrid.vue';

// 引入 VitePress 默认主题的基础样式
import 'vitepress/dist/client/theme-default/styles/vars.css';
import 'vitepress/dist/client/theme-default/styles/base.css';
import 'vitepress/dist/client/theme-default/styles/utils.css';
import 'vitepress/dist/client/theme-default/styles/components/custom-block.css';
import 'vitepress/dist/client/theme-default/styles/components/vp-code.css';

import './styles/tailwind.postcss';

export default {
  Layout,
  enhanceApp({ app }) {
    // 注册全局组件
    app.component('AppFeature', AppFeature);
    app.component('HeroSection', HeroSection);
    app.component('FeatureGrid', FeatureGrid);
  }
} satisfies Theme;

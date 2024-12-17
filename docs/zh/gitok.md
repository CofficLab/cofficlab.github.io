---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "GitOK"
  text: "简洁强大的项目管理软件"
  tagline: 让你专注于创造
  image: 
    src: /images/gitok/logo-512x512.png
  actions:
    - theme: brand
      text: GitHub
      link: https://github.com/Cofficlab/GitOK

features:
  - icon: 🔌
    title: 可扩展
    details: 灵活的插件系统，可扩展
  - icon: 📱
    title: 可嵌入应用
    details: 所有 API 开放，可嵌入应用
  - icon: 🌐
    title: Web Component
    details: 基于 Web Components，可在任何框架中使用
  - icon: 🕷️
    title: SEO 友好
    details: 基于 HTML 结构，自然 SEO 友好
  - icon: 📚
    title: 丰富的内置组件
    details: 丰富的组件，包括图片、表格、代码块等
  - icon: 🎁
    title: 简单易用
    details: 简单易用，无需复杂配置
---

<GitFeature lang="zh" />
<BannerFeature lang="zh" />
<IconFeature lang="zh" />
<ApiFeature lang="zh" />
<DbFeature lang="zh" />


<script setup>
import GitFeature from '../components/GitOK/GitFeature.vue'
import BannerFeature from '../components/GitOK/BannerFeature.vue'
import IconFeature from '../components/GitOK/IconFeature.vue'
import ApiFeature from '../components/GitOK/ApiFeature.vue'
import DbFeature from '../components/GitOK/DbFeature.vue'
</script>

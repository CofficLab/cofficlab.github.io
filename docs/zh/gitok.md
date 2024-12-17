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
    title: Extensible
    details: Comes with a flexible plugin system, extensible
  - icon: 📱
    title: Can be embedded in apps
    details: All APIs are open, can be embedded in apps
  - icon: 🌐
    title: Web Component
    details: Built on Web Components, usable in any framework
  - icon: 🕷️
    title: SEO friendly
    details: Based on HTML structure, naturally SEO friendly
  - icon: 📚
    title: Rich built-in components
    details: Comes with rich components, including images, tables, code blocks, etc.
  - icon: 🎁
    title: Simple and easy to use
    details: Simple to use, no complex configuration required
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

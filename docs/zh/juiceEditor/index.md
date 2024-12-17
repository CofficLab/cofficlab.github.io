---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 'Juice Editor'
  text: '简洁强大的富文本编辑器'
  tagline: 仅需一个标签，嵌入到任何项目中
  image:
    src: /images/juiceEditor/logo-512x512.png
  actions:
    - theme: brand
      text: GitHub
      link: https://github.com/Cofficlab/JuiceEditor
    - theme: alt
      text: 文档
      link: /zh/juiceEditor/documents/guide/introduce
# features:
#   - icon: 🔌
#     title: 可扩展
#     details: 自带灵活的插件系统，可扩展
#   - icon: 📱
#     title: 可嵌入APP
#     details: API全部开放，可嵌入APP
#   - icon: 🌐
#     title: Web Component
#     details: 基于 Web Component 构建，任何框架都可用
#   - icon: 🕷️
#     title: SEO友好
#     details: 以HTML结构为基础，天然SEO友好
#   - icon: 📚
#     title: 自带丰富组件
#     details: 自带丰富的组件，包括图片、表格、代码块等
#   - icon: 🎁
#     title: 简洁易用
#     details: 使用简单，无需复杂的配置
---

<Features lang="zh" />

<script setup>
import Features from '../../components/JuiceEditor/Features.vue'
</script>

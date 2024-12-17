---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Cisum"
  text: "听音乐本该如此简单"
  tagline: 打造自己的音乐库
  image: 
    src: /images/cisum/logo-512x512.png
  actions:
    # - theme: brand
    #   text: Markdown Examples
    #   link: /markdown-examples
    # - theme: alt
    #   text: API Examples
    #   link: /api-examples
    - theme: brand
      text: macOS & iOS
      link: https://apps.apple.com/cn/app/cisum/id6466401036
    - theme: alt
      text: GitHub
      link: https://github.com/CofficLab/Cisum_SwiftUI
    - theme: alt
      text: 交流社区
      link: https://support.qq.com/products/647007

features:
  - icon: 🔕
    title: 无需注册、登录、扫码
    details: 打开即用
  - icon: ☁️
    title: iCloud 同步
    details: 针对 iCloud 进行了优化
  - icon: 📺
    title: 优雅简洁的界面
    details: 简洁、明确，无心智负担
  - icon: 🍵
    title: 无广告、无干扰
    details: 尊重用户体验
---

<Features lang="zh" />

<script setup>
import Features from '../components/Cisum/Features.vue'
</script>

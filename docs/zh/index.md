---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Coffic Lab 工作室"
  text: 简洁软件，用心创造
  tagline: with coffee and music
  image: 
    src: /images/coffic/logo4.png
  actions:
    - theme: alt
      text: GitHub
      link: https://github.com/cofficlab

# features:
#   - icon: 🔕
#     title: 无需注册、登录、扫码
#     details: 打开即用
#   - icon: ☁️
#     title: iCloud 同步
#     details: 针对 iCloud 进行了优化
#   - icon: 📺
#     title: 优雅简洁的界面
#     details: 简洁、明确，无心智负担
#   - icon: 🍵
#     title: 无广告、无干扰
#     details: 尊重用户体验
---

<Products lang="zh" />

<Members lang="zh" />

<script setup>
import Products from '@/Coffic/Products.vue'
import Members from '@/Coffic/Members.vue'
</script>

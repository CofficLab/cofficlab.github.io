---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Cisum"
  text: "Listening to music should be so simple"
  tagline: Build my own music lab
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
      text: Community
      link: https://support.qq.com/products/647007

features:
  - icon: 🔕
    title: No need to register, log in, or scan code
    details: Open and Play
  - icon: ☁️
    title: Support iCloud Features
    details: Adapted for iCloud
  - icon: 📺
    title: Elegant and simple interface
    details: Simple and powerful
  - icon: 🍵
    title: No ads, no distractions
    details: Respect user experience
---

<Features lang="en" />

<script setup>
import Features from '@/Cisum/Features.vue'
</script>

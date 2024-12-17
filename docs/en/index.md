---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Coffic Lab"
  text: "build wonderful softwares with love"
  tagline: "without distraction"
  image: 
    src: /images/coffic/logo4.png
  actions:
    - theme: alt
      text: GitHub
      link: https://github.com/cofficlab

# features:
#   - icon: 🔕
#     title: No Registration, Login, or Scanning Required
#     details: Ready to use upon opening
#   - icon: ☁️
#     title: iCloud Sync
#     details: Optimized for iCloud
#   - icon: 📺
#     title: Elegant and Simple Interface
#     details: Simple and clear, no mental burden
#   - icon: 🍵
#     title: No Ads, No Distractions
#     details: Respecting user experience
---

## Products

Simple and powerful, never compromising user experience.

<Products />

## Team

A group of ordinary people who refuse to be mediocre.

<Members lang="en" />

<script setup>
import Products from '../components/Products.vue'
import Members from '../components/Members.vue'
</script>

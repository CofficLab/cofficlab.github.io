---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Coffic Lab 工作室"
  # text: "软件本该如此"
  tagline: 精彩软件，一起创造
  # image: 
  #   src: images/hero3.min.png
  actions:
    - theme: alt
      text: GitHub
      link: https://github.com/cofficlab

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
---

## 我们的产品

简洁而强大，绝不破坏用户体验。

<Products />

---

## 我们的团队

一群不甘平凡的普通人。

<VPTeamMembers size="small" :members="members" />

---

## 我们的好朋友

也许我们有共同的好朋友。

<VPTeamMembers size="small" :members="friends" />

<script setup>
import { VPTeamMembers } from 'vitepress/theme'
import Products from '../components/Products.vue'

const members = [
  {
    avatar: '/images/coffic/logo3.min.png',
    name: 'Coffic Lab',
    title: '我们的组织，名字来源于 Coffee and Music',
    links: [
      { icon: 'github', link: 'https://github.com/cofficlab' }
    ]
  },
  {
    avatar: '/images/team/nookery.png',
    name: 'Nookery',
    title: '我喜欢简洁，能自己写的软件我就自己写',
    links: [
      { icon: 'github', link: 'https://github.com/nookery' }
    ]
  },
  {
    avatar: '/images/team/sunrunning.png',
    name: 'Sunrunning',
    title: '有个人创造了熊猫烧香病毒，他和我一个名字',
    links: [
      { icon: 'github', link: 'https://github.com/sunrunning' }
    ]
  },
  {
    avatar: '/images/team/edith.min.png',
    name: 'Edith',
    title: "拥有什么样的内心，就能看到什么样的世界。悄悄告诉你，我可是天才们的邻居"
  },
]

const friends = [
  {
    avatar: '/images/friends/laravel.png',
    name: 'Laravel',
    title: '搭建充满创意的网站，快速又优雅',
    links: [
      { icon: 'github', link: 'https://github.com/laravel' }
    ]
  },
  {
    avatar: '/images/friends/flutter.png',
    name: 'Flutter',
    title: '全能型的 APP 开发选手，为所有屏幕创造精彩',
    links: [
      { icon: 'github', link: 'https://github.com/flutter' }
    ]
  },
  {
    avatar: '/images/friends/swift.svg',
    name: 'SwiftUI',
    title: 'Apple 平台的造梦师',
    links: [
      { icon: 'github', link: 'https://developer.apple.com/cn/xcode/swiftui/' }
    ]
  },
  {
    avatar: '/images/friends/vuejs.png',
    name: 'Vue.js',
    title: '易学易用，性能出色，适用场景丰富的 Web 前端框架',
    links: [
      { icon: 'github', link: 'https://github.com/vuejs/vue' }
    ]
  },
  {
    avatar: '/images/friends/go.png',
    name: 'Go',
    title: '新时代的编程语言',
    links: [
      { icon: 'github', link: 'https://github.com/golang/go' }
    ]
  },
  {
    avatar: '/images/friends/tailwindcss.png',
    name: 'Tailwind CSS',
    title: 'CSS 从未如此简单',
    links: [
      { icon: 'github', link: 'https://github.com/tailwindlabs/tailwindcss' }
    ]
  },
  {
    avatar: '/images/friends/github.png',
    name: 'GitHub',
    title: '每个人都喜欢我',
    links: [
      { icon: 'github', link: 'https://github.com/github' }
    ]
  },
  {
    avatar: '/images/friends/linux.min.png',
    name: 'Linux',
    title: '天才的作品',
    links: [
      { icon: 'github', link: 'https://github.com/torvalds/linux' }
    ]
  },
]
</script>
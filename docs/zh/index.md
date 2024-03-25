---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "一起创造简约的软件"
  # text: "软件本该如此"
  # tagline: 我们生产简洁强大的软件
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

# 我们的产品

简洁而强大，绝不破坏用户体验。

<VPTeamMembers size="small" :members="products" />

---

# 我们的团队

一群不甘平凡的普通人。

<VPTeamMembers size="small" :members="members" />

---

# 我们的好朋友

也许我们有共同的好朋友。

<VPTeamMembers size="small" :members="friends" />



<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const products = [
  {
    avatar: '/images/cisum/logo.min.png',
    name: 'Cisum-乐音',
    title: '音乐播放器，我们工作的时候都喜欢用',
    links: [
      { icon: 'github', link: 'https://github.com/yueyinet/cisum' }
    ]
  },
  {
    avatar: '/images/kuaiyizhi/logo.min.png',
    name: '快易知',
    title: '笔记软件，我们用它来记录大量文档',
    links: [
      { icon: 'github', link: 'https://apps.apple.com/cn/app/%E5%BF%AB%E6%98%93%E7%9F%A5/id6457892799?mt=12' }
    ]
  },
  {
    avatar: '/images/travelmode/logo.min.png',
    name: 'TravelMode',
    title: '阻止应用联网',
    links: [
      { icon: 'github', link: 'https://apps.apple.com/cn/app/travelmode/id6474899051?mt=12' }
    ]
  },
]

const members = [
  {
    avatar: '/images/coffic/logo3.min.png',
    name: 'Coffic Lab',
    title: '我们的组织',
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
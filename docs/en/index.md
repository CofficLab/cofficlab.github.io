---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Let's create wonderful software together"
  # text: "软件本该如此"
  # tagline: 我们生产简洁强大的软件
  # image: 
  #   src: images/hero3.min.png
  actions:
    - theme: alt
      text: GitHub
      link: https://github.com/cofficlab

features:
  # - icon: 🔕
  #   title: 无需注册、登录、扫码
  #   details: 打开即用
  # - icon: ☁️
  #   title: iCloud 同步
  #   details: 针对 iCloud 进行了优化
  # - icon: 📺
  #   title: 优雅简洁的界面
  #   details: 简洁、明确，无心智负担
  # - icon: 🍵
  #   title: 无广告、无干扰
  #   details: 尊重用户体验
---
---

# Products

<!-- 简洁而强大，绝不破坏用户体验。 -->

<VPTeamMembers size="small" :members="products" />

---

# Team

<!-- 一群不甘平凡的普通人。 -->

<VPTeamMembers size="small" :members="members" />

---

# Friends

I can't wait to introduce my good friends to you

<VPTeamMembers size="small" :members="friends" />



<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const products = [
  {
    avatar: '/images/cisum/logo.min.png',
    name: 'Cisum',
    title: 'A music player',
    links: [
      { icon: 'github', link: 'https://github.com/yueyinet/cisum' }
    ]
  },
  {
    avatar: '/images/kuaiyizhi/logo.min.png',
    name: 'Kuaiyizhi',
    title: 'A note application',
    links: [
      { icon: 'github', link: 'https://apps.apple.com/cn/app/%E5%BF%AB%E6%98%93%E7%9F%A5/id6457892799?mt=12' }
    ]
  },
  {
    avatar: '/images/travelmode/logo.min.png',
    name: 'TravelMode',
    title: 'Control your network',
    links: [
      { icon: 'github', link: 'https://apps.apple.com/cn/app/travelmode/id6474899051?mt=12' }
    ]
  },
]

const members = [
  {
    avatar: '/images/coffic/logo3.min.png',
    name: 'Coffic Lab',
    title: 'That\'s our team',
    links: [
      { icon: 'github', link: 'https://github.com/cofficlab' }
    ]
  },
  {
    avatar: 'https://www.github.com/nookery.png',
    name: 'Nookery',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/nookery' }
    ]
  },
]

const friends = [
  {
    avatar: 'https://www.github.com/laravel.png',
    name: 'Laravel',
    title: 'The PHP Framework for Web Artisans',
    links: [
      { icon: 'github', link: 'https://github.com/laravel' }
    ]
  },
  {
    avatar: 'https://www.github.com/flutter.png',
    name: 'Flutter',
    title: 'Build apps for any screens',
    links: [
      { icon: 'github', link: 'https://github.com/flutter' }
    ]
  },
  {
    avatar: '/images/friends/swift.svg',
    name: 'SwiftUI',
    title: 'Build apps for iOS, macOS, tvOS, and watchOS',
    links: [
      { icon: 'github', link: 'https://developer.apple.com/cn/xcode/swiftui/' }
    ]
  },
  {
    avatar: 'https://github.com/vuejs.png',
    name: 'Vue.js',
    title: 'Wonderful and Powerful',
    links: [
      { icon: 'github', link: 'https://github.com/vuejs/vue' }
    ]
  },
  {
    avatar: 'https://github.com/golang.png',
    name: 'Go',
    title: 'Program Language for everyone',
    links: [
      { icon: 'github', link: 'https://github.com/golang/go' }
    ]
  },
  {
    avatar: 'https://github.com/tailwindlabs.png',
    name: 'Tailwind CSS',
    title: 'Make CSS simple',
    links: [
      { icon: 'github', link: 'https://github.com/tailwindlabs/tailwindcss' }
    ]
  },
  {
    avatar: 'https://github.com/github.png',
    name: 'GitHub',
    title: 'Everybody likes me',
    links: [
      { icon: 'github', link: 'https://github.com/github' }
    ]
  },
  {
    avatar: '/images/friends/linux.min.png',
    name: 'Linux',
    title: 'Whose\'s Author is Genius of the Universe',
    links: [
      { icon: 'github', link: 'https://github.com/torvalds/linux' }
    ]
  },
]
</script>
---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Coffic Lab"
  text: "build wonderful softwares"
  tagline:  with coffee and music
  image: 
    src: /images/coffic/logo4.png
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

## Products

Simple and powerful, never compromising user experience.

<Products />


## Team

A group of ordinary people who refuse to be mediocre.

<VPTeamMembers size="small" :members="members" />


## Friends

I can't wait to introduce my good friends to you

<VPTeamMembers size="small" :members="friends" />

<Footer />

<script setup>
import { VPTeamMembers } from 'vitepress/theme'
import Products from '../components/Products.vue'
import Footer from '../components/Footer.vue'

const members = [
  {
    avatar: '/images/coffic/logo3.min.png',
    name: 'Coffic Lab',
    title: 'That\'s our team, full of coffee and music',
    links: [
      { icon: 'github', link: 'https://github.com/cofficlab' }
    ]
  },
  {
    avatar: '/images/team/nookery.png',
    name: 'Nookery',
    title: 'Work for Joy & Live for Love',
    links: [
      { icon: 'github', link: 'https://github.com/nookery' }
    ]
  },
  {
    avatar: '/images/team/sunrunning.png',
    name: 'Sunrunning',
    title: 'Almost a genius',
    links: [
      { icon: 'github', link: 'https://github.com/sunrunning' }
    ]
  },
  {
    avatar: '/images/team/edith.min.png',
    name: 'Edith',
    title: "Life is 10% what happens to us and 90% how we react to it. BTW, I am the neighbor of geniuses."
  },
]

const friends = [
  {
    avatar: '/images/friends/laravel.png',
    name: 'Laravel',
    title: 'The PHP Framework for Web Artisans',
    links: [
      { icon: 'github', link: 'https://github.com/laravel' }
    ]
  },
  {
    avatar: '/images/friends/flutter.png',
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
    avatar: '/images/friends/vuejs.png',
    name: 'Vue.js',
    title: 'Wonderful and Powerful',
    links: [
      { icon: 'github', link: 'https://github.com/vuejs/vue' }
    ]
  },
  {
    avatar: '/images/friends/go.png',
    name: 'Go',
    title: 'Program Language for everyone',
    links: [
      { icon: 'github', link: 'https://github.com/golang/go' }
    ]
  },
  {
    avatar: '/images/friends/tailwindcss.png',
    name: 'Tailwind CSS',
    title: 'Make CSS simple',
    links: [
      { icon: 'github', link: 'https://github.com/tailwindlabs/tailwindcss' }
    ]
  },
  {
    avatar: '/images/friends/github.png',
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

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #ad34f0 30%, #add1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #ad34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
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

<VPTeamMembers size="small" :members="members" />


## Friends

I can't wait to introduce my good friends to you

<VPTeamMembers size="small" :members="friends" />

<script setup>
import { VPTeamMembers } from 'vitepress/theme'
import Products from '../components/Products.vue'

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
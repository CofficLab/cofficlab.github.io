---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 'Juice Editor'
  text: 'A concise and powerful rich text editor'
  tagline: Embed into any project with just one tag
  image:
    src: /images/juiceEditor/logo-512x512.png
  actions:
    - theme: brand
      text: GitHub
      link: https://github.com/Cofficlab/JuiceEditor
    - theme: alt
      text: Documentation
      link: /en/juiceEditor/documents/guide/introduce
# features:
#   - icon: 🔌
#     title: Extensible
#     details: Comes with a flexible plugin system, extensible
#   - icon: 📱
#     title: Can be embedded in apps
#     details: All APIs are open, can be embedded in apps
#   - icon: 🌐
#     title: Web Component
#     details: Built on Web Components, usable in any framework
#   - icon: 🕷️
#     title: SEO friendly
#     details: Based on HTML structure, naturally SEO friendly
#   - icon: 📚
#     title: Rich built-in components
#     details: Comes with rich components, including images, tables, code blocks, etc.
#   - icon: 🎁
#     title: Simple and easy to use
#     details: Simple to use, no complex configuration required
---

<ElegantFeature lang="en" />
<ApiFeature lang="en" />
<PlatformFeature lang="en" />
<FrameworkFeature lang="en" />
<AiFeature lang="en" />
<EmbedFeature lang="en" />

<script setup>
import ElegantFeature from '../../components/JuiceEditor/ElegantFeature.vue'
import ApiFeature from '../../components/JuiceEditor/ApiFeature.vue'
import PlatformFeature from '../../components/JuiceEditor/PlatformFeature.vue'
import FrameworkFeature from '../../components/JuiceEditor/FrameworkFeature.vue'
import AiFeature from '../../components/JuiceEditor/AiFeature.vue'
import EmbedFeature from '../../components/JuiceEditor/EmbedFeature.vue'
</script>

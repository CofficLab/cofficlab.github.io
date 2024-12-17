---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 'Coffic Lab 工作室'
  text: '简洁软件，用心创造'
  tagline: 'with coffee and music'
  image:
    src: /images/coffic/logo4.png
    alt: Coffic Lab Logo
  actions:
    - theme: brand
      text: 开始使用
      link: /guide/
    - theme: alt
      text: GitHub
      link: https://github.com/cofficlab
---

<FeatureGrid>
  <div class="feature-card">
    <h3 class="text-xl font-bold mb-2">Easy to Use</h3>
    <p>Intuitive interface that anyone can master</p>
  </div>
  <div class="feature-card">
    <h3 class="text-xl font-bold mb-2">Powerful Features</h3>
    <p>Advanced capabilities for power users</p>
  </div>
  <div class="feature-card">
    <h3 class="text-xl font-bold mb-2">Fast & Reliable</h3>
    <p>Built for performance and stability</p>
  </div>
</FeatureGrid>

<AppFeature>
  <template #title>
    Feature Highlight
  </template>
  <template #description>
    Discover how our app can help you achieve more
  </template>
  <template #image>
    <img src="/apple-touch-icon.png" alt="Feature" class="rounded-lg shadow-xl">
  </template>
</AppFeature>

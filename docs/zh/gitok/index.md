---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "GitOK"
  text: "简洁强大的项目管理软件"
  tagline: 让你专注于创造
  image: 
    src: /images/gitok/logo-512x512.png
  actions:
    - theme: brand
      text: GitHub
      link: https://github.com/Cofficlab/GitOK

features:
  - icon: 🔌
    title: Extensible
    details: Comes with a flexible plugin system, extensible
  - icon: 📱
    title: Can be embedded in apps
    details: All APIs are open, can be embedded in apps
  - icon: 🌐
    title: Web Component
    details: Built on Web Components, usable in any framework
  - icon: 🕷️
    title: SEO friendly
    details: Based on HTML structure, naturally SEO friendly
  - icon: 📚
    title: Rich built-in components
    details: Comes with rich components, including images, tables, code blocks, etc.
  - icon: 🎁
    title: Simple and easy to use
    details: Simple to use, no complex configuration required
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
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
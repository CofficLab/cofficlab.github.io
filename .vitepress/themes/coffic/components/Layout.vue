<template>
  <div class="theme-container dark:bg-gray-900 dark:text-gray-100">
    <header
      class="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200 dark:bg-gray-900/80 dark:border-gray-800">
      <div class="container mx-auto px-4">
        <nav class="flex items-center justify-between h-16">
          <div class="flex items-center gap-8">
            <a href="/" class="text-xl font-bold dark:text-white">
              {{ siteTitle }}
            </a>
            <div class="hidden md:flex items-center gap-4">
              <template v-for="item in nav" :key="item.link">
                <!-- 普通链接 -->
                <a v-if="!item.items" :href="item.link"
                  class="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                  {{ item.text }}
                </a>
                <!-- 下拉菜单 -->
                <div v-else class="relative group">
                  <button
                    class="flex items-center gap-1 text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                    {{ item.text }}
                    <span class="i-carbon-chevron-down" />
                  </button>
                  <div
                    class="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div class="py-2">
                      <a v-for="subItem in item.items" :key="subItem.link" :href="subItem.link"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                        {{ subItem.text }}
                      </a>
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <!-- 语言切换 -->
            <div class="relative group">
              <button class="flex items-center gap-1 p-2 hover:bg-gray-100 rounded-lg dark:hover:bg-gray-800">
                {{ currentLang.label }}
                <span class="i-carbon-chevron-down" />
              </button>
              <div
                class="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div class="py-2">
                  <a v-for="locale in locales" :key="locale.link" :href="locale.link"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                    {{ locale.label }}
                  </a>
                </div>
              </div>
            </div>
            <!-- 暗色模式切换 -->
            <button @click="toggleDark()" class="p-2 hover:bg-gray-100 rounded-full dark:hover:bg-gray-800">
              {{ isDark ? '🌙' : '☀️' }}
            </button>
            <!-- GitHub 链接 -->
            <a href="https://github.com/cofficlab" target="_blank"
              class="p-2 hover:bg-gray-100 rounded-lg dark:hover:bg-gray-800">
              <span class="i-carbon-logo-github w-5 h-5" />
            </a>
          </div>
        </nav>
      </div>
    </header>

    <main class="page">
      <HeroSection v-if="frontmatter.layout === 'home'" v-bind="frontmatter.hero" />
      <div class="container mx-auto px-4 py-8">
        <!-- 添加侧边栏和内容的布局 -->
        <div class="flex">
          <!-- 侧边栏 -->
          <aside v-if="sidebar.length" class="sidebar w-64 pr-8 hidden lg:block">
            <nav class="sidebar-nav">
              <div v-for="group in sidebar" :key="group.text" class="mb-6">
                <h2 class="font-bold mb-2 text-gray-900 dark:text-gray-100">{{ group.text }}</h2>
                <ul class="space-y-1">
                  <li v-for="item in group.items" :key="item.link">
                    <a :href="item.link" :class="[
                      'block py-1 px-2 rounded-lg transition-colors',
                      isActive(item.link)
                        ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/20'
                        : 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
                    ]">
                      {{ item.text }}
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </aside>

          <!-- 主要内容 -->
          <div :class="[
            'w-full transition-all',
            sidebar.length ? 'lg:w-[calc(100%-32rem)]' : 'lg:w-[calc(100%-16rem)]'
          ]">
            <div class="vp-doc">
              <Content />
            </div>
          </div>

          <!-- 右侧目录 -->
          <aside class="w-64 pl-8 hidden lg:block">
            <div class="sticky top-24">
              <h3 class="font-bold mb-2 text-gray-900 dark:text-gray-100">{{ lang === 'zh' ? '本页导航' : 'On This Page' }}
              </h3>
              <nav v-if="headers.length" class="space-y-1">
                <a v-for="header in headers" :key="header.title" :href="`#${header.slug}`" :class="[
                  'block py-1 text-sm transition-colors',
                  {
                    'pl-0': header.level === 1,
                    'pl-4': header.level === 2,
                    'pl-8': header.level === 3,
                    'pl-12': header.level === 4
                  },
                  'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
                ]">
                  {{ header.title }}
                </a>
              </nav>
            </div>
          </aside>
        </div>
      </div>
    </main>

    <Footer :lang="lang" />
  </div>
</template>

<script setup lang="ts">
import { Content, useData } from 'vitepress'
import { useData as useVPData } from 'vitepress'
import { computed } from 'vue'
import Footer from './Footer.vue'
import HeroSection from './HeroSection.vue'

const { site, lang, frontmatter, theme, page } = useData()
const siteTitle = site.value.title
const nav = site.value.themeConfig.nav || []

// 语言配置
const locales = [
  { label: 'English', link: '/en/' },
  { label: '中文', link: '/zh/' }
]
const currentLang = lang.value === 'zh' ? locales[1] : locales[0]

// 使用 VitePress 的暗色模式
const { isDark } = useVPData()
const toggleDark = () => {
  const html = document.documentElement
  const current = html.classList.contains('dark')
  html.classList.toggle('dark', !current)
  isDark.value = !current
}

// 修改获取侧边栏数据的逻辑
const sidebar = computed(() => {
  const sidebarConfig = theme.value.sidebar || {}
  const currentPath = `/${lang.value}/${page.value.relativePath.split('/')[1]}/`

  // 直接返回当前语言对应路径的侧边栏配置
  return sidebarConfig[currentPath] || []
})

// 修改激活状态判断逻辑
const isActive = (link: string) => {
  return `/${page.value.relativePath}` === link
}

// 修改获取页面标题列表的逻辑
const headers = computed(() => {
  const rawHeaders = page.value.headers || []
  console.log('Raw headers:', rawHeaders) // 调试用

  return rawHeaders
    .filter(h => h.level > 1 && h.level <= 4) // 只显示 h2-h4
    .map(h => ({
      ...h,
      title: h.title.trim(),
      level: h.level - 1 // 调整层级缩进
    }))
})
</script>

<style>
.group:hover>.group-hover\:block {
  display: block;
}

.group-hover\:opacity-100 {
  opacity: 1;
}

.group-hover\:visible {
  visibility: visible;
}

.group>div::before {
  content: '';
  position: absolute;
  top: -4px;
  left: 20px;
  width: 8px;
  height: 8px;
  background: white;
  transform: rotate(45deg);
  border-left: 1px solid #e5e7eb;
  border-top: 1px solid #e5e7eb;
}

.dark .group>div::before {
  background: #1f2937;
  border-color: #374151;
}
</style>

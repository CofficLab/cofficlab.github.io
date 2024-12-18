<template>
    <div class="py-16 px-8 text-center w-full">
        <h2 class="text-4xl mb-4">{{ translations[lang].platform }}</h2>
        <p class="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            {{ translations[lang].description }}
        </p>

        <div class="flex flex-row justify-center gap-8 mx-auto w-full">
            <div class="feature-card">
                <div class="mb-4">
                    <div class="text-4xl">🖥️</div>
                </div>
                <h3 class="text-lg font-medium">{{ translations[lang].desktop }}</h3>
            </div>

            <div class="feature-card">
                <div class="mb-4">
                    <div class="text-4xl">📱</div>
                </div>
                <h3 class="text-lg font-medium">{{ translations[lang].mobile }}</h3>
            </div>

            <div class="feature-card">
                <div class="mb-4">
                    <div class="text-4xl">🌐</div>
                </div>
                <h3 class="text-lg font-medium">{{ translations[lang].web }}</h3>
            </div>

            <div class="feature-card">
                <div class="mb-4">
                    <div class="text-4xl">⚡</div>
                </div>
                <h3 class="text-lg font-medium">{{ translations[lang].electron }}</h3>
            </div>
        </div>
    </div>
</template>

<style lang="postcss" scoped>
.feature-card {
    @apply bg-white/10 backdrop-blur-lg rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-1 shadow-lg;
}
</style>

<script setup>
const translations = {
    en: {
        platform: 'Multi-Platform',
        description: 'Works seamlessly across all platforms',
        desktop: 'Desktop',
        mobile: 'Mobile',
        web: 'Web',
        electron: 'Electron'
    },
    zh: {
        platform: '多平台支持',
        description: '在所有平台上无缝运行',
        desktop: '桌面端',
        mobile: '移动端',
        web: '网页端',
        electron: 'Electron'
    }
}

defineProps({
    lang: {
        type: String,
        default: 'zh',
        validator: (value) => ['en', 'zh'].includes(value)
    },
})
</script>
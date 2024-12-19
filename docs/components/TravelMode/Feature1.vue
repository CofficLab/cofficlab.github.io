<template>
    <div class="py-16 px-8 text-center w-full">
        <h2 class="text-4xl mb-4">{{ translations[lang].musicLibrary }}</h2>
        <p class="text-lg mb-12 text-center max-w-2xl mx-auto">
            {{ translations[lang].description }}
        </p>

        <div class="flex flex-row justify-center gap-8 mx-auto w-full">
            <div class="feature-card">
                <div class="mb-4">
                    <div class="text-4xl">📥</div>
                </div>
                <h3 class="text-lg font-medium">{{ translations[lang].importable }}</h3>
            </div>

            <div class="feature-card">
                <div class="mb-4">
                    <div class="text-4xl">🔌</div>
                </div>
                <h3 class="text-lg font-medium">{{ translations[lang].offline }}</h3>
            </div>

            <div class="feature-card">
                <div class="mb-4">
                    <div class="text-4xl">📤</div>
                </div>
                <h3 class="text-lg font-medium">{{ translations[lang].exportable }}</h3>
            </div>

            <div class="feature-card">
                <div class="mb-4">
                    <div class="text-4xl">🔄</div>
                </div>
                <h3 class="text-lg font-medium">{{ translations[lang].syncable }}</h3>
            </div>
        </div>
    </div>
</template>

<style lang="postcss" scoped>
.feature-card {
    @apply bg-white/10 backdrop-blur-lg rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-1 shadow;
}
</style>

<script setup>
const translations = {
    en: {
        musicLibrary: 'Ad-free Experience',
        description: 'Focus on what matters - no ads, no distractions',
        importable: 'No Ads',
        offline: 'No Tracking',
        exportable: 'No Popups',
        syncable: 'No In-app Purchases'
    },
    zh: {
        musicLibrary: '无广告体验',
        description: '专注于重要的事 - 无广告，无干扰',
        importable: '无广告',
        offline: '无跟踪',
        exportable: '无弹窗',
        syncable: '无应用内购'
    }
}

defineProps({
    lang: {
        type: String,
        default: 'en',
        validator: (value) => ['en', 'zh'].includes(value)
    },
})
</script>

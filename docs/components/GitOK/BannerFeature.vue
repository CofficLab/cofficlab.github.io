<template>
    <div class="py-16 px-8 text-center w-full">
        <h2 class="text-4xl mb-4">{{ translations[lang].bannerGenerator }}</h2>
        <p class="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            {{ translations[lang].description }}
        </p>

        <div class="flex flex-row justify-center gap-8 mx-auto w-full">
            <div class="feature-card">
                <div class="mb-4">
                    <div class="text-4xl">📱</div>
                </div>
                <h3 class="text-lg font-medium">{{ translations[lang].appStore }}</h3>
            </div>

            <div class="feature-card">
                <div class="mb-4">
                    <div class="text-4xl">🎨</div>
                </div>
                <h3 class="text-lg font-medium">{{ translations[lang].templates }}</h3>
            </div>

            <div class="feature-card">
                <div class="mb-4">
                    <div class="text-4xl">⚙️</div>
                </div>
                <h3 class="text-lg font-medium">{{ translations[lang].customizable }}</h3>
            </div>

            <div class="feature-card">
                <div class="mb-4">
                    <div class="text-4xl">📦</div>
                </div>
                <h3 class="text-lg font-medium">{{ translations[lang].multiFormat }}</h3>
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
        bannerGenerator: 'Banner Generator',
        description: 'Create professional promotional images for your projects',
        appStore: 'App Store Ready',
        templates: 'Multiple Templates',
        customizable: 'Customizable',
        multiFormat: 'Multi-Format'
    },
    zh: {
        bannerGenerator: 'Banner 生成器',
        description: '为您的项目创建专业的宣传图',
        appStore: 'App Store 适配',
        templates: '多种模板',
        customizable: '自定义设计',
        multiFormat: '多种格式'
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

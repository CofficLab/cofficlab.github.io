<template>
    <div class="py-16 px-8 text-center w-full">
        <h2 class="text-4xl mb-4">{{ translations[lang].iconGenerator }}</h2>
        <p class="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            {{ translations[lang].description }}
        </p>

        <div class="flex flex-row justify-center gap-8 mx-auto w-full">
            <div class="feature-card">
                <div class="mb-4">
                    <div class="text-4xl">💻</div>
                </div>
                <h3 class="text-lg font-medium">{{ translations[lang].multiPlatform }}</h3>
            </div>

            <div class="feature-card">
                <div class="mb-4">
                    <div class="text-4xl">📏</div>
                </div>
                <h3 class="text-lg font-medium">{{ translations[lang].autoSize }}</h3>
            </div>

            <div class="feature-card">
                <div class="mb-4">
                    <div class="text-4xl">🎨</div>
                </div>
                <h3 class="text-lg font-medium">{{ translations[lang].customDesign }}</h3>
            </div>

            <div class="feature-card">
                <div class="mb-4">
                    <div class="text-4xl">📤</div>
                </div>
                <h3 class="text-lg font-medium">{{ translations[lang].quickExport }}</h3>
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
        iconGenerator: 'Icon Generator',
        description: 'Create professional icons for your applications',
        multiPlatform: 'Multi-Platform',
        autoSize: 'Auto-Size',
        customDesign: 'Custom Design',
        quickExport: 'Quick Export'
    },
    zh: {
        iconGenerator: 'Icon 生成器',
        description: '为您的应用创建专业的图标',
        multiPlatform: '多平台支持',
        autoSize: '自动尺寸',
        customDesign: '自定义设计',
        quickExport: '快速导出'
    }
}

defineProps({
    lang: {
        type: String,
        default: 'zh',
        validator: (value) => ['en', 'zh'].includes(value)
    }
})
</script>

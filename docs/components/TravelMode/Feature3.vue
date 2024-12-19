<template>
    <div class="py-16 px-8 text-center w-full">
        <h2 class="text-4xl mb-4">{{ translations[lang].musicLibrary }}</h2>
        <p class="text-lg mb-12 text-center max-w-2xl mx-auto">
            {{ translations[lang].description }}
        </p>

        <div class="flex flex-row justify-center gap-8 mx-auto w-full">
            <div class="feature-card">
                <div class="mb-4">
                    <div class="text-4xl">🎯</div>
                </div>
                <h3 class="text-lg font-medium">{{ translations[lang].clean }}</h3>
            </div>

            <div class="feature-card">
                <div class="mb-4">
                    <div class="text-4xl">🎨</div>
                </div>
                <h3 class="text-lg font-medium">{{ translations[lang].modern }}</h3>
            </div>

            <div class="feature-card">
                <div class="mb-4">
                    <div class="text-4xl">⚡️</div>
                </div>
                <h3 class="text-lg font-medium">{{ translations[lang].fast }}</h3>
            </div>

            <div class="feature-card">
                <div class="mb-4">
                    <div class="text-4xl">🌙</div>
                </div>
                <h3 class="text-lg font-medium">{{ translations[lang].dark }}</h3>
            </div>
        </div>
    </div>
</template>

<script setup>
const translations = {
    en: {
        musicLibrary: 'Clean Interface',
        description: 'Modern design that feels native to macOS',
        clean: 'Clean UI',
        modern: 'Modern Design',
        fast: 'Fast Response',
        dark: 'Dark Mode'
    },
    zh: {
        musicLibrary: '简约界面',
        description: '现代设计，原生 macOS 风格',
        clean: '简约界面',
        modern: '现代设计',
        fast: '快速响应',
        dark: '深色模式'
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

<style lang="postcss" scoped>
.feature-card {
    @apply bg-white/10 backdrop-blur-lg rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-1 shadow;
}
</style>
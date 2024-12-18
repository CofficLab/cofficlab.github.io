<template>
    <div class="py-16 px-8 text-center w-full">
        <h2 class="text-4xl mb-4">{{ translations[lang].api }}</h2>
        <p class="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            {{ translations[lang].description }}
        </p>

        <div class="flex flex-row justify-center gap-8 mx-auto w-full">
            <div class="feature-card">
                <div class="mb-4">
                    <div class="text-4xl">🔌</div>
                </div>
                <h3 class="text-lg font-medium">{{ translations[lang].extensible }}</h3>
            </div>

            <div class="feature-card">
                <div class="mb-4">
                    <div class="text-4xl">📚</div>
                </div>
                <h3 class="text-lg font-medium">{{ translations[lang].documented }}</h3>
            </div>

            <div class="feature-card">
                <div class="mb-4">
                    <div class="text-4xl">📝</div>
                </div>
                <h3 class="text-lg font-medium">{{ translations[lang].typed }}</h3>
            </div>

            <div class="feature-card">
                <div class="mb-4">
                    <div class="text-4xl">🔒</div>
                </div>
                <h3 class="text-lg font-medium">{{ translations[lang].stable }}</h3>
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
        api: 'Powerful APIs',
        description: 'Rich and well-documented APIs for full control',
        extensible: 'Extensible',
        documented: 'Documented',
        typed: 'TypeScript',
        stable: 'Stable'
    },
    zh: {
        api: '强大的 API',
        description: '丰富且文档完善的 API，掌控所有细节',
        extensible: '可扩展',
        documented: '文档完善',
        typed: 'TypeScript',
        stable: '稳定可靠'
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
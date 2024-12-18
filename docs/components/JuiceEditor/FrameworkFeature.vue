<template>
    <div class="py-16 px-8 text-center w-full">
        <h2 class="text-4xl mb-4">{{ translations[lang].framework }}</h2>
        <p class="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            {{ translations[lang].description }}
        </p>

        <div class="flex flex-row justify-center gap-8 mx-auto w-full">
            <div class="feature-card">
                <div class="mb-4">
                    <div class="text-4xl">⚡</div>
                </div>
                <h3 class="text-lg font-medium">{{ translations[lang].vue }}</h3>
            </div>

            <div class="feature-card">
                <div class="mb-4">
                    <div class="text-4xl">⚛️</div>
                </div>
                <h3 class="text-lg font-medium">{{ translations[lang].react }}</h3>
            </div>

            <div class="feature-card">
                <div class="mb-4">
                    <div class="text-4xl">🅰️</div>
                </div>
                <h3 class="text-lg font-medium">{{ translations[lang].angular }}</h3>
            </div>

            <div class="feature-card">
                <div class="mb-4">
                    <div class="text-4xl">🎯</div>
                </div>
                <h3 class="text-lg font-medium">{{ translations[lang].svelte }}</h3>
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
        framework: 'Framework Support',
        description: 'Compatible with all major frameworks',
        vue: 'Vue',
        react: 'React',
        angular: 'Angular',
        svelte: 'Svelte'
    },
    zh: {
        framework: '框架支持',
        description: '兼容所有主流框架',
        vue: 'Vue',
        react: 'React',
        angular: 'Angular',
        svelte: 'Svelte'
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
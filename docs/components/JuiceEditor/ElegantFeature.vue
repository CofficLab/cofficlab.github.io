<template>
    <div class="py-16 px-8 text-center w-full">
        <h2 class="text-4xl mb-4">{{ translations[lang].elegant }}</h2>
        <p class="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            {{ translations[lang].description }}
        </p>

        <div class="flex flex-row justify-center gap-8 mx-auto w-full">
            <div class="feature-card">
                <div class="mb-4">
                    <div class="text-4xl">🎨</div>
                </div>
                <h3 class="text-lg font-medium">{{ translations[lang].flexible }}</h3>
            </div>

            <div class="feature-card">
                <div class="mb-4">
                    <div class="text-4xl">💪</div>
                </div>
                <h3 class="text-lg font-medium">{{ translations[lang].powerful }}</h3>
            </div>

            <div class="feature-card">
                <div class="mb-4">
                    <div class="text-4xl">✨</div>
                </div>
                <h3 class="text-lg font-medium">{{ translations[lang].concise }}</h3>
            </div>

            <div class="feature-card">
                <div class="mb-4">
                    <div class="text-4xl">👆</div>
                </div>
                <h3 class="text-lg font-medium">{{ translations[lang].intuitive }}</h3>
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
        elegant: 'Elegant & Flexible',
        description: 'Clean interface with powerful capabilities',
        flexible: 'Flexible',
        powerful: 'Powerful',
        concise: 'Concise',
        intuitive: 'Intuitive'
    },
    zh: {
        elegant: '灵活优雅',
        description: '简洁的界面蕴含强大的功能',
        flexible: '灵活',
        powerful: '强大',
        concise: '简洁',
        intuitive: '直观'
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
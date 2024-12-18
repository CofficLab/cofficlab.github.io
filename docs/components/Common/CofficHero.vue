<template>
    <div class="py-16 px-8 text-center w-full h-screen">
        <img :src="image.src" :alt="image.alt" class="h-1/2 mx-auto mb-8" />
        <h2 class="text-4xl mb-4">{{ translations[lang][titleKey] }}</h2>
        <p class="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            {{ translations[lang][descriptionKey] }}
        </p>

        <div class="flex flex-row justify-center gap-8 mx-auto w-full">
            <div v-for="feature in features" :key="feature.key" class="feature-card">
                <div class="mb-4">
                    <div class="text-4xl">{{ feature.emoji }}</div>
                </div>
                <h3 class="text-lg font-medium">{{ translations[lang][feature.key] }}</h3>
            </div>
        </div>

        <div class="flex flex-row justify-center gap-8 mx-auto w-full">
            <a v-for="link in links" :key="link.text" :href="link.href" class="btn btn-primary">{{ link.text }}</a>
        </div>
    </div>
</template>

<style lang="postcss" scoped>
.feature-card {
    @apply bg-white/10 backdrop-blur-lg rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-1 shadow-lg;
}
</style>

<script setup>
defineProps({
    lang: {
        type: String,
        default: 'zh',
        validator: (value) => ['en', 'zh'].includes(value)
    },
    translations: {
        type: Object,
        required: true
    },
    titleKey: {
        type: String,
        required: true
    },
    descriptionKey: {
        type: String,
        required: true
    },
    image: {
        type: Object,
        required: true,
        default: {
            src: '/images/juiceEditor/logo-512x512.png',
            alt: 'Juice Editor Logo'
        }
    },
    features: {
        type: Array,
        required: true,
        // 每个feature对象应该包含 {key: string, emoji: string}
    },
    links: {
        type: Array,
        required: true,
        default: []
    }
})
</script>

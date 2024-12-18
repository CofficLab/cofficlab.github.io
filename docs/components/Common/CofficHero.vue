<template>
    <div class="py-16 px-8 text-center w-full h-screen">
        <img :src="image.src" :alt="image.alt" class="h-1/2 mx-auto mb-8" />
        <h2 class="text-4xl mb-4">{{ title }}</h2>
        <p class="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            {{ description }}
        </p>

        <div class="flex flex-row justify-center gap-8 mx-auto w-full">
            <a v-for="link in links" :key="link.text" :href="link.href" class="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium
                       transition-all duration-300 ease-in-out
                       hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                       active:bg-blue-800 active:translate-y-0">
                {{ link.text }}
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
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
    links: {
        type: Array,
        required: true,
        default: []
    }
})
</script>

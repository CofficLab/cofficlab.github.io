<template>
    <div class="hero min-h-[600px] py-20 bg-gradient-to-r from-blue-600 to-indigo-800">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row items-center justify-between">
                <div class="text-center md:text-left md:w-1/2">
                    <h1 v-if="name" class="text-2xl font-bold text-white mb-4">{{ name }}</h1>
                    <p v-if="text" class="text-5xl font-bold text-white mb-6">{{ text }}</p>
                    <p v-if="tagline" class="text-xl text-gray-200 mb-8">{{ tagline }}</p>
                    <div class="flex flex-wrap justify-center md:justify-start gap-4">
                        <a v-for="action in actions" :key="action.link" :href="action.link" :class="[
                            action.theme === 'brand' ? 'btn-primary' : 'btn-secondary',
                        ]">
                            {{ action.text }}
                        </a>
                    </div>
                </div>
                <div v-if="image" class="md:w-1/2 mt-8 md:mt-0">
                    <img :src="image.src" :alt="image.alt || ''" class="max-w-full h-auto">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Action {
    theme?: 'brand' | 'alt'
    text: string
    link: string
}

interface Image {
    src: string
    alt?: string
}

interface Props {
    name?: string
    text?: string
    tagline?: string
    image?: Image
    actions?: Action[]
}

defineProps<Props>()
</script>
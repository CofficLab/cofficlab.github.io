<template>
    <component :is="link.length > 0 ? 'a' : 'div'" :href="link.length > 0 ? link : undefined"
        :target="link.length > 0 ? '_blank' : undefined" :rel="link.length > 0 ? 'noopener noreferrer' : undefined"
        class="feature-card">
        <div class="mb-4">
            <div class="text-4xl">{{ emoji }}</div>
        </div>
        <h3 class="text-lg font-medium">{{ title }}</h3>
    </component>
</template>

<style lang="postcss" scoped>
.feature-card {
    @apply bg-white/10 backdrop-blur-lg rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-1 shadow;
}
</style>

<script setup lang="ts">
defineProps({
    emoji: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        default: ''
    }
})
</script>
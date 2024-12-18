<template>
    <JuiceNoteHero :lang="lang" />

    <Features :lang="lang" />
</template>

<script setup>
import Features from './Features.vue'
import JuiceNoteHero from './TravelModeHero.vue'

const props = defineProps({
    lang: {
        type: String,
        default: 'en'
    }
})
</script>
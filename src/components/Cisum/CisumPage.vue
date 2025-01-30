<template>
    <CisumHero :lang="lang" />
    <Features :lang="lang" />
</template>

<script setup>
import Features from './Features.vue'
import CisumHero from './CisumHero.vue'

const props = defineProps({
    lang: {
        type: String,
        default: 'en'
    }
})
</script>

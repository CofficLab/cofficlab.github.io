<template>
    <TravelModeHero :lang="lang" />

    <Features :lang="lang" />
</template>

<script setup>
import Features from './Features.vue'
import TravelModeHero from './TravelModeHero.vue'
import { normalizeLang } from '@/utils/lang'
const props = defineProps({
    lang: {
        type: String,
        default: 'en'
    }
})

const lang = normalizeLang(props.lang)
</script>
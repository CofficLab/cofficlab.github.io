<template>
    <CisumHero :lang="lang" />
    <Features :lang="lang" />
</template>

<script setup lang="ts">
import Features from './Features.vue'
import CisumHero from './CisumHero.vue'
import { normalizeLang } from '@/utils/lang'
const props = defineProps({
    lang: {
        type: String,
        default: 'en'
    }
})

const lang = normalizeLang(props.lang)
</script>

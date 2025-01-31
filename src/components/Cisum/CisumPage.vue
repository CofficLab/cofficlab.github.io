<template>
    <CisumHero :lang="lang" />
    <Features :lang="lang" />
</template>

<script setup lang="ts">
import Features from './Features.vue'
import CisumHero from './CisumHero.vue'

const props = defineProps({
    lang: {
        type: String,
        default: 'en'
    }
})

const lang = ['zh-cn', 'zh-CN'].includes(props.lang) ? 'zh' : props.lang
</script>

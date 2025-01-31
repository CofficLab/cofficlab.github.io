<template>
    <JuiceEditorHero :lang="lang" />

    <Features :lang="lang" />
</template>

<script setup>
import Features from './Features.vue'
import JuiceEditorHero from './JuiceEditorHero.vue'

const props = defineProps({
    lang: {
        type: String,
        default: 'en'
    }
})

const lang = ['zh-cn', 'zh-CN'].includes(props.lang) ? 'zh' : props.lang
</script>

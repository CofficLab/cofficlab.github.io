<template>
    <JuiceNoteHero :lang="lang" />

    <Features :lang="lang" />
</template>

<script setup lang="ts">
import Features from './Features.vue'
import JuiceNoteHero from './JuiceNoteHero.vue'
import { normalizeLang } from '@/utils/lang'
const props = defineProps({
    lang: {
        type: String,
        default: 'en',
        validator: (value: string) => ['en', 'zh-cn'].includes(value)
    }
})

const lang = normalizeLang(props.lang)
</script>
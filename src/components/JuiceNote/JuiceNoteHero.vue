<template>
    <CofficHero :title="title" :description="description" :links="links">
        <template #app>
            <JuiceNoteApp :lang="lang" />
        </template>
    </CofficHero>
</template>

<script setup lang="ts">
import CofficHero from '../Common/CofficHero.vue';
import JuiceNoteApp from './JuiceNoteApp.vue';

const props = defineProps({
    lang: {
        type: String,
        default: 'zh-cn',
        validator: (value: string) => ['en', 'zh-cn'].includes(value)
    }
})

const title = props.lang === 'zh-cn' ? '聚思笔记' : 'JuiceNote'

const description = props.lang === 'zh-cn'
    ? '一个笔记应用，支持多端同步'
    : 'A note app, support multi-device sync'

const image = {
    src: '/images/juiceNote/logo-512x512.png',
    alt: 'Juice Note Logo'
}

const links = [
    { text: 'macOS', href: 'https://apps.apple.com/cn/app/juice-note/id6457892799?mt=12' },
]
</script>

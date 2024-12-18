<template>
    <CofficHero :title="title" :description="description" :image="image" :links="links" />
</template>

<script setup lang="ts">
import CofficHero from '../Common/CofficHero.vue';

const props = defineProps({
    lang: {
        type: String,
        default: 'zh',
        validator: (value: string) => ['en', 'zh'].includes(value)
    }
})

const title = 'Cisum'

const description = props.lang === 'zh' ? '播放音乐，本该如此简单' : 'Play music, it should be so simple'

const image = {
    src: '/images/cisum/logo-512x512.png',
    alt: 'Cisum Logo'
}

const links = [
    { text: 'GitHub', href: 'https://github.com/Cofficlab/Cisum_SwiftUI' },
    { text: 'macOS & iOS', href: 'https://apps.apple.com/cn/app/cisum/id6466401036' },
]
</script>

<template>
    <CofficHero :title="title" :description="description" :image="image" :links="links" />
</template>

<script setup>
import CofficHero from '../Common/CofficHero.vue';

const props = defineProps({
    lang: {
        type: String,
        default: 'zh',
        validator: (value) => ['en', 'zh'].includes(value)
    }
})

const title = ' '

const description = props.lang === 'zh'
    ? '控制 macOS APP 的连网权限'
    : 'Control the network permission of macOS APP'

const image = {
    src: '/images/travelmode/logo-512x512.png',
    alt: 'TravelMode Logo'
}

const links = [
    { text: 'macOS', href: 'https://apps.apple.com/cn/app/travelmode/id6474899051?mt=12' },
    { text: 'GitHub', href: 'https://github.com/CofficLab/TravelMode' },
]
</script>
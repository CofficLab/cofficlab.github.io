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

const title = 'GitOK'

const description = props.lang === 'zh' ? '一个Git管理工具' : 'A Git management tool'

const image = {
    src: '/images/gitok/logo-512x512.png',
    alt: 'GitOK Logo'
}

const links = [
    { text: 'GitHub', href: 'https://github.com/Cofficlab/GitOK' },
]
</script>
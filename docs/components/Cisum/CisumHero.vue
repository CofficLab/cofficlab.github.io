<template>
    <CofficHero :title="title" :description="description" :image="image" :links="links" />
</template>

<script setup lang="ts">
import CofficHero from '@/Common/CofficHero.vue';

const props = defineProps({
    lang: {
        type: String,
        default: 'zh',
        validator: (value: string) => ['en', 'zh'].includes(value)
    }
})

const title = 'Cisum'

const description = props.lang === 'zh' ? '仅需一个标签，嵌入到任何项目中' : 'A powerful and flexible rich text editor'

const image = {
    src: '/images/juiceEditor/logo-512x512.png',
    alt: 'Juice Editor Logo'
}

const links = [
    { text: 'GitHub', href: 'https://github.com/Cofficlab/JuiceEditor' },
    { text: '文档', href: `/${props.lang}/juiceEditor/documents/guide/introduce` }
]
</script>
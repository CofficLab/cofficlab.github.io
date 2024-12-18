<template>
    <CofficHero :title="title" :description="description" :features="features" :image="image" :links="links" />
</template>

<script setup>
import CofficHero from '@/Common/CofficHero.vue';

const props = defineProps({
    lang: {
        type: String,
        default: 'zh',
        validator: (value) => ['en', 'zh'].includes(value)
    }
})

const title = 'Juice Editor'

const description = props.lang === 'zh'
    ? '仅需一个标签，嵌入到任何项目中'
    : 'A powerful and flexible rich text editor'

const features = [
    { key: props.lang === 'zh' ? '连续互通' : 'Continuity', emoji: '📱' },
    { key: props.lang === 'zh' ? '工作空间' : 'Workspace', emoji: '🖥️' },
    { key: props.lang === 'zh' ? '游戏体验' : 'Gaming', emoji: '🎮' },
    { key: props.lang === 'zh' ? '同步互联' : 'Sync', emoji: '🔄' }
]

const image = {
    src: '/images/juiceEditor/logo-512x512.png',
    alt: 'Juice Editor Logo'
}

const links = [
    { text: 'GitHub', href: 'https://github.com/Cofficlab/JuiceEditor' },
    { text: '文档', href: `/${props.lang}/juiceEditor/documents/guide/introduce` }
]
</script>
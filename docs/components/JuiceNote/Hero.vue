<template>
    <CofficHero :lang="lang" :translations="translations" titleKey="title" descriptionKey="description"
        :features="features" :image="image" :links="links" />
</template>

<script setup>
import CofficHero from '@/Common/CofficHero.vue';

const translations = {
    en: {
        title: 'Juice Editor',
        description: 'A powerful and flexible rich text editor',
        continuity: 'Continuity',
        workspace: 'Workspace',
        gaming: 'Gaming',
        sync: 'Sync'
    },
    zh: {
        title: 'Juice Editor',
        description: '仅需一个标签，嵌入到任何项目中',
        continuity: '连续互通',
        workspace: '工作空间',
        gaming: '游戏体验',
        sync: '同步互联'
    }
}

const features = [
    { key: 'continuity', emoji: '📱' },
    { key: 'workspace', emoji: '🖥️' },
    { key: 'gaming', emoji: '🎮' },
    { key: 'sync', emoji: '🔄' }
]

const image = {
    src: '/images/juiceEditor/logo-512x512.png',
    alt: 'Juice Editor Logo'
}

const links = [
    { text: 'GitHub', href: 'https://github.com/Cofficlab/JuiceEditor' },
    { text: '文档', href: '/zh/juiceEditor/documents/guide/introduce' }
]

defineProps({
    lang: {
        type: String,
        default: 'zh',
        validator: (value) => ['en', 'zh'].includes(value)
    }
})
</script>
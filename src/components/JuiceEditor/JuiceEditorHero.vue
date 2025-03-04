<template>
    <CofficHero :title="title" :description="description" :links="links">
        <template #app>
            <JuiceEditorApp :lang="lang" />
        </template>
    </CofficHero>
</template>

<script setup lang="ts">
import CofficHero from '../Common/CofficHero.vue';
import JuiceEditorApp from './JuiceEditorApp.vue';

const props = defineProps({
    lang: {
        type: String,
        default: 'zh-cn',
        validator: (value: string) => ['en', 'zh-cn'].includes(value)
    }
})

const title = 'Juice Editor'

const description = props.lang === 'zh-cn' ? '仅需一个标签，嵌入到任何项目中' : 'A powerful and flexible rich text editor'

const image = {
    src: '/images/juiceEditor/logo-512x512.png',
    alt: 'Juice Editor Logo'
}

const links = [
    { text: 'GitHub', href: 'https://github.com/Cofficlab/JuiceEditor' },
    { text: 'Documents', href: `/${props.lang}/juice_editor_docs/guide/introduce` },
    { text: 'Issues', href: 'https://github.com/Cofficlab/JuiceEditor/issues' },
]
</script>
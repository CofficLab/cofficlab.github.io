<template>
    <BaseFeature :lang="lang" :translations="translations" :extraClass="extraClass" titleKey="musicLibrary"
        :buttons="['importable', 'offline', 'exportable', 'syncable']">
        <template #bottom>
            <JuiceApp :lang="lang" />
        </template>
    </BaseFeature>
</template>

<script setup>
import BaseFeature from '../BaseFeature.vue';
import JuiceApp from './JuiceApp.vue';

const translations = {
    en: {
        musicLibrary: 'Simple and powerful',
        importable: 'Importable',
        offline: 'Offline',
        exportable: 'Exportable',
        syncable: 'Syncable'
    },
    zh: {
        musicLibrary: '简于形 - 强于心',
        importable: '可导入',
        offline: '可离线',
        exportable: '可导出',
        syncable: '可同步'
    }
}

defineProps({
    lang: {
        type: String,
        default: 'en',
        validator: (value) => ['en', 'zh'].includes(value)
    },
    extraClass: {
        type: String,
        default: 'bg-gradient-to-br from-emerald-300 to-sky-500'
    }
})
</script>

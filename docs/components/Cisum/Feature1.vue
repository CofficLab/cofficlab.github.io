<template>
    <BaseFeature :lang="lang" :translations="translations" :gradientClass="gradientClass" titleKey="musicLibrary"
        :buttons="['importable', 'offline', 'exportable', 'syncable']">

        <template #right>
            <Player :lang="lang" />
        </template>
    </BaseFeature>
</template>

<script setup>
import Player from './Player.vue';
import BaseFeature from '../BaseFeature.vue';

const translations = {
    en: {
        musicLibrary: 'Music Library',
        importable: 'Importable',
        offline: 'Offline',
        exportable: 'Exportable',
        syncable: 'Syncable'
    },
    zh: {
        musicLibrary: '音乐仓库 - 随心随意',
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
    gradientClass: {
        type: String,
        default: 'bg-gradient-to-br from-emerald-300 to-sky-500'
    }
})
</script>

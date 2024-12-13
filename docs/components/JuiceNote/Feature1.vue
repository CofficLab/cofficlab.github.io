<template>
    <BaseFeature :lang="lang" :translations="translations" gradientClass="bg-gradient-to-br from-emerald-300 to-sky-500"
        titleKey="musicLibrary" :buttons="['importable', 'offline', 'exportable', 'syncable']">
    </BaseFeature>
</template>

<script setup>
import Player from '../Cisum/Player.vue';
import BaseFeature from '../BaseFeature.vue';

const translations = {
    en: {
        musicLibrary: 'Ad-free - Freedom for you',
        importable: 'Importable',
        offline: 'Offline',
        exportable: 'Exportable',
        syncable: 'Syncable'
    },
    zh: {
        musicLibrary: '广告全无 - 自在由你',
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
    }
})
</script>

<template>
    <div class="py-16 px-8 text-center w-full">
        <h2 class="text-4xl mb-4">{{ translations[lang].musicLibrary }}</h2>
        <p class="text-lg mb-12 text-center max-w-2xl mx-auto">
            {{ translations[lang].description }}
        </p>

        <div class="flex flex-row justify-center gap-8 mx-auto w-full">
            <div class="feature-card">
                <div class="mb-4">
                    <div class="text-4xl">📥</div>
                </div>
                <h3 class="text-lg font-medium">{{ translations[lang].importable }}</h3>
            </div>

            <div class="feature-card">
                <div class="mb-4">
                    <div class="text-4xl">🔌</div>
                </div>
                <h3 class="text-lg font-medium">{{ translations[lang].offline }}</h3>
            </div>

            <div class="feature-card">
                <div class="mb-4">
                    <div class="text-4xl">📤</div>
                </div>
                <h3 class="text-lg font-medium">{{ translations[lang].exportable }}</h3>
            </div>

            <div class="feature-card">
                <div class="mb-4">
                    <div class="text-4xl">🔄</div>
                </div>
                <h3 class="text-lg font-medium">{{ translations[lang].syncable }}</h3>
            </div>
        </div>

        <div class="mt-12">
            <JuiceNoteApp :lang="lang" />
        </div>
    </div>
</template>

<style lang="postcss" scoped>
.feature-card {
    @apply bg-white/10 backdrop-blur-lg rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-1 shadow-lg;
}
</style>

<script setup>
import JuiceNoteApp from './JuiceNoteApp.vue';

const translations = {
    en: {
        musicLibrary: 'Simple and powerful',
        description: 'Powerful features with simple interface',
        importable: 'Importable',
        offline: 'Offline',
        exportable: 'Exportable',
        syncable: 'Syncable'
    },
    zh: {
        musicLibrary: '简于形 - 强于心',
        description: '强大功能，简约界面',
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
})
</script>

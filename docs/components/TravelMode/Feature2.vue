<template>
    <div class="py-16 px-8 text-center w-full">
        <h2 class="text-4xl mb-4">{{ translations[lang].musicLibrary }}</h2>
        <p class="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
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
            <TravelModeApp :lang="lang" />
        </div>
    </div>
</template>

<style lang="postcss" scoped>
.feature-card {
    @apply bg-white/10 backdrop-blur-lg rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-1 shadow-lg;
}
</style>

<script setup>
import TravelModeApp from './TravelModeApp.vue';

const translations = {
    en: {
        musicLibrary: 'Simple Yet Powerful',
        description: 'Control network access with just one click',
        importable: 'One Click',
        offline: 'Quick Setup',
        exportable: 'Easy Rules',
        syncable: 'Auto Save'
    },
    zh: {
        musicLibrary: '简单而强大',
        description: '一键控制应用网络访问权限',
        importable: '一键操作',
        offline: '快速设置',
        exportable: '简易规则',
        syncable: '自动保存'
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

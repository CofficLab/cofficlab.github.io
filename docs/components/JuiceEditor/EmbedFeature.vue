<template>
    <BaseFeature :lang="lang" :translations="translations"
        gradientClass="bg-gradient-to-br from-purple-500 to-indigo-500" titleKey="embed"
        :buttons="['native', 'webview', 'iframe', 'component']">

        <template #description>
            <p>{{ translations[lang].description }}</p>
        </template>

        <template #right>
            <div class="app-preview">
                <div class="app-header">
                    <div class="app-dots">
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                    </div>
                </div>
                <div class="app-content">
                    <div class="editor-area"></div>
                </div>
            </div>
        </template>
    </BaseFeature>
</template>

<script setup>
import BaseFeature from '../BaseFeature.vue'

const translations = {
    en: {
        embed: 'App Integration',
        description: 'Easily embed into any application',
        native: 'Native',
        webview: 'WebView',
        iframe: 'IFrame',
        component: 'Component'
    },
    zh: {
        embed: '应用集成',
        description: '轻松嵌入任何应用',
        native: '原生',
        webview: 'WebView',
        iframe: 'IFrame',
        component: '组件'
    }
}

defineProps({
    lang: {
        type: String,
        default: 'zh',
        validator: (value) => ['en', 'zh'].includes(value)
    }
})
</script>

<style scoped>
.app-preview {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    overflow: hidden;
    width: 300px;
}

.app-header {
    background: rgba(255, 255, 255, 0.1);
    padding: 0.5rem;
}

.app-dots {
    display: flex;
    gap: 0.25rem;
}

.dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
}

.app-content {
    padding: 1rem;
}

.editor-area {
    height: 150px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
}
</style>
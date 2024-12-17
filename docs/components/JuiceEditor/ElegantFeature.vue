<template>
    <BaseFeature :lang="lang" :translations="translations" titleKey="elegant"
        :buttons="['flexible', 'powerful', 'concise', 'intuitive']">

        <template #description>
            <p>{{ translations[lang].description }}</p>
        </template>

        <template #right>
            <div class="editor-preview">
                <div class="toolbar">
                    <span class="tool">B</span>
                    <span class="tool">I</span>
                    <span class="tool">/</span>
                </div>
                <div class="content">
                    <div class="text-line"></div>
                    <div class="text-line short"></div>
                </div>
            </div>
        </template>
    </BaseFeature>
</template>

<script setup>
import BaseFeature from '../BaseFeature.vue'

const translations = {
    en: {
        elegant: 'Elegant & Flexible',
        description: 'Clean interface with powerful capabilities',
        flexible: 'Flexible',
        powerful: 'Powerful',
        concise: 'Concise',
        intuitive: 'Intuitive'
    },
    zh: {
        elegant: '灵活优雅',
        description: '简洁的界面蕴含强大的功能',
        flexible: '灵活',
        powerful: '强大',
        concise: '简洁',
        intuitive: '直观'
    }
}

defineProps({
    lang: {
        type: String,
        default: 'zh',
        validator: (value) => ['en', 'zh'].includes(value)
    },
})
</script>

<style scoped>
.editor-preview {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 1rem;
    width: 300px;
}

.toolbar {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.tool {
    background: rgba(255, 255, 255, 0.2);
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.9rem;
}

.text-line {
    height: 8px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    margin-bottom: 0.5rem;
}

.short {
    width: 60%;
}
</style>
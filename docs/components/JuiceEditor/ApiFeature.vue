<template>
    <BaseFeature :lang="lang" :translations="translations" titleKey="api"
        :buttons="['extensible', 'documented', 'typed', 'stable']">

        <template #description>
            <p>{{ translations[lang].description }}</p>
        </template>

        <template #right>
            <div class="code-preview">
                <div class="code-line"><span class="keyword">import</span> { Editor } <span class="keyword">from</span>
                    'juice-editor'</div>
                <div class="code-line"><span class="keyword">const</span> editor = <span class="keyword">new</span>
                    Editor()</div>
                <div class="code-line">editor.on(<span class="string">'change'</span>, onChange)</div>
                <div class="code-line">editor.command(<span class="string">'bold'</span>)</div>
            </div>
        </template>
    </BaseFeature>
</template>

<script setup>
import BaseFeature from '../BaseFeature.vue'

const translations = {
    en: {
        api: 'Powerful APIs',
        description: 'Rich and well-documented APIs for full control',
        extensible: 'Extensible',
        documented: 'Documented',
        typed: 'TypeScript',
        stable: 'Stable'
    },
    zh: {
        api: '强大的 API',
        description: '丰富且文档完善的 API，掌控所有细节',
        extensible: '可扩展',
        documented: '文档完善',
        typed: 'TypeScript',
        stable: '稳定可靠'
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
.code-preview {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    padding: 1rem;
    font-family: monospace;
    line-height: 1.5;
}

.code-line {
    color: #e5e7eb;
}

.keyword {
    color: #93c5fd;
}

.string {
    color: #86efac;
}
</style>
<template>
    <BaseFeature :lang="lang" :translations="translations" titleKey="ai"
        :buttons="['smart', 'assistant', 'enhance', 'suggest']">

        <template #description>
            <p>{{ translations[lang].description }}</p>
        </template>

        <template #right>
            <div class="ai-interface">
                <div class="ai-message">How can I help you today?</div>
                <div class="ai-suggestions">
                    <div class="suggestion">Improve writing</div>
                    <div class="suggestion">Fix grammar</div>
                    <div class="suggestion">Translate</div>
                </div>
            </div>
        </template>
    </BaseFeature>
</template>

<script setup>
import BaseFeature from '../BaseFeature.vue'

const translations = {
    en: {
        ai: 'AI Integration',
        description: 'AI-powered features in every detail',
        smart: 'Smart',
        assistant: 'Assistant',
        enhance: 'Enhancement',
        suggest: 'Suggestions'
    },
    zh: {
        ai: 'AI 集成',
        description: 'AI 功能深入每个细节',
        smart: '智能',
        assistant: '助手',
        enhance: '增强',
        suggest: '建议'
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
.ai-interface {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    padding: 1rem;
}

.ai-message {
    background: rgba(255, 255, 255, 0.1);
    padding: 1rem;
    border-radius: 8px;
    margin-bottom: 1rem;
}

.ai-suggestions {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
}

.suggestion {
    background: rgba(255, 255, 255, 0.2);
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    font-size: 0.9rem;
}
</style>
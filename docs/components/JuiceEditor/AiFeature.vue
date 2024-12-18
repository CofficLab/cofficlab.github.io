<template>
    <div class="py-16 px-8 text-center w-full">
        <h2 class="text-4xl mb-4">{{ translations[lang].ai }}</h2>
        <p class="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            {{ translations[lang].description }}
        </p>

        <div class="flex flex-row justify-center gap-8 mx-auto w-full">
            <div class="feature-card">
                <div class="mb-4">
                    <div class="text-4xl">🧠</div>
                </div>
                <h3 class="text-lg font-medium">{{ translations[lang].smart }}</h3>
            </div>

            <div class="feature-card">
                <div class="mb-4">
                    <div class="text-4xl">💬</div>
                </div>
                <h3 class="text-lg font-medium">{{ translations[lang].assistant }}</h3>
            </div>

            <div class="feature-card">
                <div class="mb-4">
                    <div class="text-4xl">⚡</div>
                </div>
                <h3 class="text-lg font-medium">{{ translations[lang].enhance }}</h3>
            </div>

            <div class="feature-card">
                <div class="mb-4">
                    <div class="text-4xl">💡</div>
                </div>
                <h3 class="text-lg font-medium">{{ translations[lang].suggest }}</h3>
            </div>
        </div>
    </div>
</template>

<style lang="postcss" scoped>
.feature-card {
    @apply bg-white/10 backdrop-blur-lg rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-1 shadow-lg;
}
</style>

<script setup>
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
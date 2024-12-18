<template>
    <div class="py-16 px-8 text-center w-full">
        <h2 class="text-4xl mb-4">{{ translations[lang].apiTester }}</h2>
        <p class="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            {{ translations[lang].description }}
        </p>

        <div class="flex flex-row justify-center gap-8 mx-auto w-full">
            <div class="feature-card">
                <div class="mb-4">
                    <div class="text-4xl">🔄</div>
                </div>
                <h3 class="text-lg font-medium">{{ translations[lang].multiMethod }}</h3>
            </div>

            <div class="feature-card">
                <div class="mb-4">
                    <div class="text-4xl">📊</div>
                </div>
                <h3 class="text-lg font-medium">{{ translations[lang].visualResponse }}</h3>
            </div>

            <div class="feature-card">
                <div class="mb-4">
                    <div class="text-4xl">⚙️</div>
                </div>
                <h3 class="text-lg font-medium">{{ translations[lang].paramManager }}</h3>
            </div>

            <div class="feature-card">
                <div class="mb-4">
                    <div class="text-4xl">📝</div>
                </div>
                <h3 class="text-lg font-medium">{{ translations[lang].history }}</h3>
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
        apiTester: 'API Tester',
        description: 'Convenient API debugging environment',
        multiMethod: 'Multiple Methods',
        visualResponse: 'Visual Response',
        paramManager: 'Parameter Manager',
        history: 'History Tracking'
    },
    zh: {
        apiTester: 'API 测试工具',
        description: '便捷的 API 调试环境',
        multiMethod: '多种请求方法',
        visualResponse: '可视化响应',
        paramManager: '参数管理',
        history: '历史记录'
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

<template>
    <BaseFeature :lang="lang" :translations="translations" :extraClass="extraClass" titleKey="apiTester"
        :buttons="['multiMethod', 'visualResponse', 'paramManager', 'history']">

        <template #description>
            <p>{{ translations[lang].description }}</p>
        </template>

        <template #right>
            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24">
                <path fill="currentColor"
                    d="M7,7H5A2,2 0 0,0 3,9V17H5V13H7V17H9V9A2,2 0 0,0 7,7M7,11H5V9H7V11M14,7H10V17H12V13H14A2,2 0 0,0 16,11V9A2,2 0 0,0 14,7M14,11H12V9H14V11M20,9V15H21V17H17V15H18V9H17V7H21V9H20Z" />
            </svg>
        </template>
    </BaseFeature>
</template>

<script setup>
import BaseFeature from '../BaseFeature.vue'

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
    },
    extraClass: {
        type: String,
        default: 'bg-gradient-to-br from-orange-500 to-red-500'
    }
})
</script>

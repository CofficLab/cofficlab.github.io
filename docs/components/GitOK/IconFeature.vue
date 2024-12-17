<template>
    <BaseFeature :lang="lang" :translations="translations"
        gradientClass="bg-gradient-to-br from-emerald-500 to-teal-500" titleKey="iconGenerator"
        :buttons="['multiPlatform', 'autoSize', 'customDesign', 'quickExport']">

        <template #description>
            <p>{{ translations[lang].description }}</p>
        </template>

        <template #right>
            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24">
                <path fill="currentColor"
                    d="M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M12,4C7.58,4 4,7.58 4,12C4,16.42 7.58,20 12,20C16.42,20 20,16.42 20,12C20,7.58 16.42,4 12,4M12,6C15.31,6 18,8.69 18,12C18,15.31 15.31,18 12,18C8.69,18 6,15.31 6,12C6,8.69 8.69,6 12,6Z" />
            </svg>
        </template>
    </BaseFeature>
</template>

<script setup>
import BaseFeature from '../BaseFeature.vue'

const translations = {
    en: {
        iconGenerator: 'Icon Generator',
        description: 'Create professional icons for your applications',
        multiPlatform: 'Multi-Platform',
        autoSize: 'Auto-Size',
        customDesign: 'Custom Design',
        quickExport: 'Quick Export'
    },
    zh: {
        iconGenerator: 'Icon 生成器',
        description: '为您的应用创建专业的图标',
        multiPlatform: '多平台支持',
        autoSize: '自动尺寸',
        customDesign: '自定义设计',
        quickExport: '快速导出'
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
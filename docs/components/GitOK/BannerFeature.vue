<template>
    <BaseFeature :lang="lang" :translations="translations" :gradientClass="gradientClass" titleKey="bannerGenerator"
        :buttons="['appStore', 'templates', 'customizable', 'multiFormat']">

        <template #description>
            <p>{{ translations[lang].description }}</p>
        </template>

        <template #right>
            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24">
                <path fill="currentColor"
                    d="M20,6H4V4H20V6M20,8H4V10H20V8M4,16H20V14H4V16M4,20H20V18H4V20M3,12H21V2H3V12M5,4H19V10H5V4Z" />
            </svg>
        </template>
    </BaseFeature>
</template>

<script setup>
import BaseFeature from '../BaseFeature.vue'

const translations = {
    en: {
        bannerGenerator: 'Banner Generator',
        description: 'Create professional promotional images for your projects',
        appStore: 'App Store Ready',
        templates: 'Multiple Templates',
        customizable: 'Customizable',
        multiFormat: 'Multi-Format'
    },
    zh: {
        bannerGenerator: 'Banner 生成器',
        description: '为您的项目创建专业的宣传图',
        appStore: 'App Store 适配',
        templates: '多种模板',
        customizable: '自定义设计',
        multiFormat: '多种格式'
    }
}

defineProps({
    lang: {
        type: String,
        default: 'zh',
        validator: (value) => ['en', 'zh'].includes(value)
    },
    gradientClass: {
        type: String,
        default: 'bg-gradient-to-br from-orange-500 to-red-500'
    }
})
</script>

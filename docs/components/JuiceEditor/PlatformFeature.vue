<template>
    <BaseFeature :lang="lang" :translations="translations"
        gradientClass="bg-gradient-to-br from-green-500 to-emerald-500" titleKey="platform"
        :buttons="['desktop', 'mobile', 'web', 'electron']">

        <template #description>
            <p>{{ translations[lang].description }}</p>
        </template>

        <template #right>
            <div class="platform-icons">
                <div class="platform">
                    <div class="icon">🖥️</div>
                    <div class="label">Desktop</div>
                </div>
                <div class="platform">
                    <div class="icon">📱</div>
                    <div class="label">Mobile</div>
                </div>
                <div class="platform">
                    <div class="icon">🌐</div>
                    <div class="label">Web</div>
                </div>
            </div>
        </template>
    </BaseFeature>
</template>

<script setup>
import BaseFeature from '../BaseFeature.vue'

const translations = {
    en: {
        platform: 'Multi-Platform',
        description: 'Works seamlessly across all platforms',
        desktop: 'Desktop',
        mobile: 'Mobile',
        web: 'Web',
        electron: 'Electron'
    },
    zh: {
        platform: '多平台支持',
        description: '在所有平台上无缝运行',
        desktop: '桌面端',
        mobile: '移动端',
        web: '网页端',
        electron: 'Electron'
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
.platform-icons {
    display: flex;
    gap: 2rem;
}

.platform {
    text-align: center;
}

.icon {
    font-size: 3rem;
    margin-bottom: 0.5rem;
}

.label {
    font-size: 0.9rem;
    opacity: 0.8;
}
</style>
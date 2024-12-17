<template>
    <BaseFeature :lang="lang" :translations="translations" :gradientClass="gradientClass" titleKey="framework"
        :buttons="['vue', 'react', 'angular', 'svelte']">

        <template #description>
            <p>{{ translations[lang].description }}</p>
        </template>

        <template #right>
            <div class="framework-logos">
                <div v-for="framework in ['Vue', 'React', 'Angular', 'Svelte']" :key="framework" class="framework">{{
                    framework }}</div>
            </div>
        </template>
    </BaseFeature>
</template>

<script setup>
import BaseFeature from '../BaseFeature.vue'

const translations = {
    en: {
        framework: 'Framework Support',
        description: 'Compatible with all major frameworks',
        vue: 'Vue',
        react: 'React',
        angular: 'Angular',
        svelte: 'Svelte'
    },
    zh: {
        framework: '框架支持',
        description: '兼容所有主流框架',
        vue: 'Vue',
        react: 'React',
        angular: 'Angular',
        svelte: 'Svelte'
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
        default: 'bg-gradient-to-br from-yellow-500 to-orange-500'
    }
})
</script>

<style scoped>
.framework-logos {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
}

.framework {
    background: rgba(255, 255, 255, 0.2);
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
    font-weight: bold;
}
</style>
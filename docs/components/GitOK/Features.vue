<template>
    <FeatureGroup>
        <GitFeature :lang="lang" />
        <BannerFeature :lang="lang" />
        <IconFeature :lang="lang" />
        <ApiFeature :lang="lang" />
        <DbFeature :lang="lang" />
    </FeatureGroup>
</template>

<script setup>
import FeatureGroup from '@/Common/FeatureGroup.vue'
import GitFeature from './GitFeature.vue'
import BannerFeature from './BannerFeature.vue'
import IconFeature from './IconFeature.vue'
import ApiFeature from './ApiFeature.vue'
import DbFeature from './DbFeature.vue'

const props = defineProps({
    lang: {
        type: String,
        default: 'en'
    }
})
</script>

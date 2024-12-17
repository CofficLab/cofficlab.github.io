<template>
    <FeatureGroup>
        <GitFeature :lang="lang" :gradientClass="'bg-gradient-to-br from-purple-500 to-pink-500'" />
        <BannerFeature :lang="lang" :gradientClass="'bg-gradient-to-br from-blue-500 to-cyan-500'" />
        <IconFeature :lang="lang" :gradientClass="'bg-gradient-to-br from-emerald-500 to-teal-500'" />
        <ApiFeature :lang="lang" :gradientClass="'bg-gradient-to-br from-orange-500 to-red-500'" />
        <DbFeature :lang="lang" :gradientClass="'bg-gradient-to-br from-indigo-500 to-purple-500'" />
    </FeatureGroup>
</template>

<script setup>
import FeatureGroup from '../FeatureGroup.vue'
import GitFeature from './GitFeature.vue'
import BannerFeature from './BannerFeature.vue'
import IconFeature from './IconFeature.vue'
import ApiFeature from './ApiFeature.vue'
import DbFeature from './DbFeature.vue'
</script>

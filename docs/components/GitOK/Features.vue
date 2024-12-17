<template>
    <FeatureGroup>
        <GitFeature :lang="lang"
            :extraClass="'bg-gradient-to-br from-purple-500 to-pink-500 backdrop-filter backdrop-blur-lg bg-opacity-10'" />
        <BannerFeature :lang="lang"
            :extraClass="'bg-gradient-to-br from-blue-500 to-cyan-500 backdrop-filter backdrop-blur-lg bg-opacity-50'" />
        <IconFeature :lang="lang"
            :extraClass="'bg-gradient-to-br from-emerald-500 to-teal-500 backdrop-filter backdrop-blur-lg'" />
        <ApiFeature :lang="lang"
            :extraClass="'bg-gradient-to-br from-orange-500 to-red-500 backdrop-filter backdrop-blur-lg'" />
        <DbFeature :lang="lang"
            :extraClass="'bg-gradient-to-br from-indigo-500 to-purple-500 backdrop-filter backdrop-blur-lg'" />
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

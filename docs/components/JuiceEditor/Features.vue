<template>
    <FeatureGroup>
        <ElegantFeature :lang="lang" />
        <ApiFeature :lang="lang" />
        <PlatformFeature :lang="lang" />
        <FrameworkFeature :lang="lang" />
        <AiFeature :lang="lang" />
        <EmbedFeature :lang="lang" />
    </FeatureGroup>
</template>

<script setup>
import FeatureGroup from '../Common/FeatureGroup.vue'
import ElegantFeature from './ElegantFeature.vue'
import ApiFeature from './ApiFeature.vue'
import PlatformFeature from './PlatformFeature.vue'
import FrameworkFeature from './FrameworkFeature.vue'
import AiFeature from './AiFeature.vue'
import EmbedFeature from './EmbedFeature.vue'

defineProps({
    lang: {
        type: String,
        default: 'en',
        validator: (value) => ['en', 'zh'].includes(value)
    }
})
</script>

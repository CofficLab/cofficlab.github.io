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
import FeatureGroup from '../../components/FeatureGroup.vue'
import ElegantFeature from '../../components/JuiceEditor/ElegantFeature.vue'
import ApiFeature from '../../components/JuiceEditor/ApiFeature.vue'
import PlatformFeature from '../../components/JuiceEditor/PlatformFeature.vue'
import FrameworkFeature from '../../components/JuiceEditor/FrameworkFeature.vue'
import AiFeature from '../../components/JuiceEditor/AiFeature.vue'
import EmbedFeature from '../../components/JuiceEditor/EmbedFeature.vue'

defineProps({
    lang: {
        type: String,
        default: 'en',
        validator: (value) => ['en', 'zh'].includes(value)
    }
})
</script>

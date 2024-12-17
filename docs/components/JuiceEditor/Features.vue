<template>
    <FeatureGroup>
        <ElegantFeature :lang="lang" :gradientClass="'bg-gradient-to-b from-violet-400 to-indigo-400'" />
        <ApiFeature :lang="lang" :gradientClass="'bg-gradient-to-b from-indigo-400 to-blue-400'" />
        <PlatformFeature :lang="lang" :gradientClass="'bg-gradient-to-b from-blue-400 to-teal-400'" />
        <FrameworkFeature :lang="lang" :gradientClass="'bg-gradient-to-b from-teal-400 to-green-400'" />
        <AiFeature :lang="lang" :gradientClass="'bg-gradient-to-b from-green-400 to-yellow-400'" />
        <EmbedFeature :lang="lang" :gradientClass="'bg-gradient-to-b from-yellow-400 to-orange-400'" />
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

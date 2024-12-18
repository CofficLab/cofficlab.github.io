<template>
    <FeatureGroup>
        <Feature1 :lang="lang" />
        <Feature2 :lang="lang" />
        <Feature3 :lang="lang" />
    </FeatureGroup>
</template>

<script setup>
import FeatureGroup from '../Common/FeatureGroup.vue'
import Feature1 from './Feature1.vue'
import Feature2 from './Feature2.vue'
import Feature3 from './Feature3.vue'
defineProps({
    lang: {
        type: String,
        default: 'en',
        validator: (value) => ['en', 'zh'].includes(value)
    }
})
</script>

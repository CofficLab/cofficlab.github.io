<template>
    <FeatureGroup>
        <Feature1 :lang="lang" :extraClass="'bg-gradient-to-br from-emerald-300 to-sky-500'" />
        <Feature2 :lang="lang" :extraClass="'bg-gradient-to-tr from-emerald-300 to-sky-500'" />
    </FeatureGroup>
</template>

<script setup>
import FeatureGroup from '../../components/FeatureGroup.vue'
import Feature1 from './Feature1.vue'
import Feature2 from './Feature2.vue'

defineProps({
    lang: {
        type: String,
        default: 'en',
        validator: (value) => ['en', 'zh'].includes(value)
    }
})
</script>

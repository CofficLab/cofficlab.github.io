<template>
    <BannerBox>
        <div class="py-16 px-8 text-center w-full" data-type="smart-banner">
            <h2 class="text-4xl mb-4">{{ banner.getTitle(lang) }}</h2>

            <p class="text-lg mb-12 text-center max-w-2xl mx-auto" v-if="banner.getDescription(lang).length > 0">
                {{ banner.getDescription(lang) }}
            </p>

            <div class="flex flex-row justify-center gap-8 mx-auto w-full mt-24">
                <div class="feature-card" v-for="feature in banner.getFeatures()" :key="feature.getTitle(lang)">
                    <div class="mb-4">
                        <div class="text-4xl">{{ feature.emoji }}</div>
                    </div>
                    <h3 class="text-lg font-medium">{{ feature.getTitle(lang) }}</h3>
                </div>
            </div>

            <!-- <div class="mt-12">
                <TravelModeApp :lang="banner.lang" />
            </div> -->
        </div>
    </BannerBox>
</template>

<style lang="postcss" scoped>
.feature-card {
    @apply bg-white/10 backdrop-blur-lg rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-1 shadow;
}
</style>

<script setup lang="ts">
import Banner from '../Model/Banner';
import BannerBox from './BannerBox.vue';

defineProps({
    lang: {
        type: String,
        default: 'en',
        validator: (value: string) => ['en', 'zh'].includes(value)
    },
    banner: {
        type: Banner,
        required: true
    }
})
</script>
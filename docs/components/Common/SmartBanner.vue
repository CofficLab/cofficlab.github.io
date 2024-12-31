<template>
    <BannerBox :backgroundClassIndex="backgroundClassIndex">
        <div class="flex flex-col justify-center w-full h-full p-[5%] text-center rounded-2xl" data-type="smart-banner">
            <h2 class="text-[min(4vw,2.25rem)] mb-[2%]">{{ banner.getTitle(lang) }}</h2>

            <p class="text-[min(2vw,1.125rem)] text-center max-w-[80%] mx-auto"
                v-if="banner.getDescription(lang).length > 0">
                {{ banner.getDescription(lang) }}
            </p>

            <div class="flex flex-row flex-wrap justify-center gap-[3%] mx-auto w-full mt-[5%]">
                <FeatureCard v-for="feature in banner.getFeatures()" :key="feature.getTitle(lang)"
                    :emoji="feature.emoji" :title="feature.getTitle(lang)" :link="feature.link" />
            </div>

            <div class="mt-[3%]">
                <component v-if="banner.getComponent()" :is="banner.getComponent()"
                    v-bind="banner.getComponentProps()" />
            </div>
        </div>
    </BannerBox>
</template>

<script setup lang="ts">
import Banner from '../Model/Banner';
import BannerBox from './BannerBox.vue';
import FeatureCard from './FeatureCard.vue';

defineProps({
    lang: {
        type: String,
        default: 'en',
        validator: (value: string) => ['en', 'zh'].includes(value)
    },
    banner: {
        type: Banner,
        required: true
    },
    backgroundClassIndex: {
        type: Number,
        default: 0
    }
})
</script>
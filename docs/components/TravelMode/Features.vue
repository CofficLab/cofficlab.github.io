<template>
    <div class="flex flex-col gap-8">
        <SmartBanner v-for="banner in banners" :key="banner.getTitle(props.lang)" :banner="banner" :lang="props.lang" />
    </div>
</template>

<script setup lang="ts">
import SmartBanner from '../Common/SmartBanner.vue';
import Banner from '../Model/Banner';
import Feature from '../Model/Feature';

const props = defineProps({
    lang: {
        type: String,
        default: 'en',
        validator: (value: string) => ['en', 'zh'].includes(value)
    }
})

const banners = [
    Banner.create()
        .setZhTitle('简约强大 - 干净利落')
        .setEnTitle('Clean and Powerful')
        .withFeatures([
            Feature.createWithIcon('🖱️').setZh('一键操作').setEn('One-click Operation'),
            Feature.createWithIcon('⚙️').setZh('快速设置').setEn('Quick Settings'),
            Feature.createWithIcon('📤').setZh('简易规则').setEn('Simple Rules'),
            Feature.createWithIcon('🔄').setZh('自动保存').setEn('Auto Save'),
        ]),

    Banner.create()
        .setZhTitle('广告全无 - 清新轻松')
        .setEnTitle('Ad-free Experience')
        .withFeatures([
            Feature.createWithIcon('🪧').setZh('无广告').setEn('No Ads'),
            Feature.createWithIcon('🔍').setZh('无跟踪').setEn('No Tracking'),
            Feature.createWithIcon('🪤').setZh('无弹窗').setEn('No Popups'),
            Feature.createWithIcon('💰').setZh('无内购').setEn('No In-App Purchases')
        ])
];
</script>

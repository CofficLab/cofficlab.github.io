<template>
    <div class="flex flex-col gap-8">
        <SmartBanner v-for="banner in banners" :key="banner.getTitle(props.lang)" :banner="banner" :lang="props.lang" />
    </div>
</template>

<script setup lang="ts">
import FeatureGroup from '../Common/FeatureGroup.vue'
import SmartBanner from '../Common/SmartBanner.vue';
import Banner from '../Model/Banner';
import Feature from '../Model/Feature';
import CisumApp from './CisumApp.vue';

const props = defineProps({
    lang: {
        type: String,
        default: 'en',
        validator: (value: string) => ['en', 'zh'].includes(value)
    }
})

const banners = [
    Banner.create()
        .setZhTitle('广告全无 - 自在由你')
        .setEnTitle('Ad-free - Freedom for you')
        .setComponent(CisumApp)
        .setComponentProps({ height: 'h-[32rem]' })
        .withFeatures([
            Feature.createWithIcon('📥').setZh('可导入').setEn('Importable'),
            Feature.createWithIcon('🔌').setZh('可离线').setEn('Offline'),
            Feature.createWithIcon('📤').setZh('可导出').setEn('Exportable'),
            Feature.createWithIcon('🔄').setZh('可同步').setEn('Syncable'),
        ]),

    Banner.create()
        .setZhTitle('简于形 - 强于心')
        .setEnTitle('Simple and powerful')
        .setComponent(CisumApp)
        .setComponentProps({ height: 'h-[32rem]' })
        .withFeatures([
            Feature.createWithIcon('📥').setZh('可导入').setEn('Importable'),
            Feature.createWithIcon('🔌').setZh('可离线').setEn('Offline'),
            Feature.createWithIcon('📤').setZh('可导出').setEn('Exportable'),
            Feature.createWithIcon('🔄').setZh('可同步').setEn('Syncable'),
        ]),
];
</script>
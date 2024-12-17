<template>
    <BaseFeature :lang="lang" :translations="translations" :gradientClass="gradientClass" titleKey="subtitle"
        :buttons="['noAds', 'noScan', 'noMember', 'noLogin']">
        <template #right>
            <Player :lang="lang" />
        </template>
    </BaseFeature>
</template>

<script setup>
import Player from './Player.vue';
import BaseFeature from '../BaseFeature.vue';

const translations = {
    en: {
        subtitle: 'Should Be This Simple',
        noAds: 'No Ads',
        noScan: 'No Scan',
        noMember: 'No Membership',
        noLogin: 'No Login'
    },
    zh: {
        subtitle: '用户体验 - 清新轻松',
        noAds: '无广告',
        noScan: '无扫码',
        noMember: '无会员',
        noLogin: '无登录'
    }
}

defineProps({
    lang: {
        type: String,
        default: 'en',
        validator: (value) => ['en', 'zh'].includes(value)
    },
    gradientClass: {
        type: String,
        default: 'bg-gradient-to-tr from-emerald-300 to-sky-500'
    }
})
</script>

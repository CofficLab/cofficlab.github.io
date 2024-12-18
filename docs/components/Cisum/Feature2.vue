<template>
    <div class="py-16 px-8 text-center w-full">
        <h2 class="text-4xl mb-4">{{ translations[lang].subtitle }}</h2>

        <div class="flex flex-row justify-center gap-8 mx-auto w-full">
            <div class="feature-card">
                <div class="mb-4">
                    <div class="text-4xl">🚫</div>
                </div>
                <h3 class="text-lg font-medium">{{ translations[lang].noAds }}</h3>
            </div>

            <div class="feature-card">
                <div class="mb-4">
                    <div class="text-4xl">📱</div>
                </div>
                <h3 class="text-lg font-medium">{{ translations[lang].noScan }}</h3>
            </div>

            <div class="feature-card">
                <div class="mb-4">
                    <div class="text-4xl">👤</div>
                </div>
                <h3 class="text-lg font-medium">{{ translations[lang].noMember }}</h3>
            </div>

            <div class="feature-card">
                <div class="mb-4">
                    <div class="text-4xl">🔑</div>
                </div>
                <h3 class="text-lg font-medium">{{ translations[lang].noLogin }}</h3>
            </div>
        </div>
    </div>
</template>

<style lang="postcss" scoped>
.feature-card {
    @apply bg-white/10 backdrop-blur-lg rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-1;
}
</style>

<script setup>

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
})
</script>

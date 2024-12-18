<template>
    <div class="py-16 px-8 text-center w-full">
        <h2 class="text-4xl mb-4">{{ translations[lang].dbManager }}</h2>
        <p class="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            {{ translations[lang].description }}
        </p>

        <div class="flex flex-row justify-center gap-8 mx-auto w-full">
            <div class="feature-card">
                <div class="mb-4">
                    <div class="text-4xl">💾</div>
                </div>
                <h3 class="text-lg font-medium">{{ translations[lang].multiDb }}</h3>
            </div>

            <div class="feature-card">
                <div class="mb-4">
                    <div class="text-4xl">📊</div>
                </div>
                <h3 class="text-lg font-medium">{{ translations[lang].visualData }}</h3>
            </div>

            <div class="feature-card">
                <div class="mb-4">
                    <div class="text-4xl">📝</div>
                </div>
                <h3 class="text-lg font-medium">{{ translations[lang].sqlQuery }}</h3>
            </div>

            <div class="feature-card">
                <div class="mb-4">
                    <div class="text-4xl">🔄</div>
                </div>
                <h3 class="text-lg font-medium">{{ translations[lang].dataIo }}</h3>
            </div>
        </div>
    </div>
</template>

<style lang="postcss" scoped>
.feature-card {
    @apply bg-white/10 backdrop-blur-lg rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-1 shadow-lg;
}
</style>

<script setup>

const translations = {
    en: {
        dbManager: 'Database Manager',
        description: 'Simple and efficient database management tool',
        multiDb: 'MySQL & SQLite',
        visualData: 'Visual Data',
        sqlQuery: 'SQL Query',
        dataIo: 'Data I/O'
    },
    zh: {
        dbManager: '数据库管理器',
        description: '简单高效的数据库管理工具',
        multiDb: 'MySQL 和 SQLite',
        visualData: '可视化数据',
        sqlQuery: 'SQL 查询',
        dataIo: '数据导入导出'
    }
}

defineProps({
    lang: {
        type: String,
        default: 'zh',
        validator: (value) => ['en', 'zh'].includes(value)
    },
})
</script>

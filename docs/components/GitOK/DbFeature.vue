<template>
    <BaseFeature :lang="lang" :translations="translations"
        gradientClass="bg-gradient-to-br from-indigo-500 to-purple-500" titleKey="dbManager"
        :buttons="['multiDb', 'visualData', 'sqlQuery', 'dataIo']">

        <template #description>
            <p>{{ translations[lang].description }}</p>
        </template>

        <template #right>
            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24">
                <path fill="currentColor"
                    d="M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C16.42,11 20,9.21 20,7C20,4.79 16.42,3 12,3M4,9V12C4,14.21 7.58,16 12,16C16.42,16 20,14.21 20,12V9C20,11.21 16.42,13 12,13C7.58,13 4,11.21 4,9M4,14V17C4,19.21 7.58,21 12,21C16.42,21 20,19.21 20,17V14C20,16.21 16.42,18 12,18C7.58,18 4,16.21 4,14Z" />
            </svg>
        </template>
    </BaseFeature>
</template>

<script setup>
import BaseFeature from '../BaseFeature.vue'

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
    }
})
</script>
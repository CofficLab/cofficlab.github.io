<template>
    <BaseFeature :lang="lang" :translations="translations" titleKey="gitManagement"
        :buttons="['visualHistory', 'branchManagement', 'fileTracking', 'conflictResolution']">

        <template #description>
            <p>{{ translations[lang].description }}</p>
        </template>

        <template #right>
            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24">
                <path fill="currentColor"
                    d="M2.6,10.59L8.38,4.8L10.07,6.5C9.83,7.35 10.22,8.28 11,8.73V14.27C10.4,14.61 10,15.26 10,16A2,2 0 0,0 12,18A2,2 0 0,0 14,16C14,15.26 13.6,14.61 13,14.27V9.41L15.07,11.5C15,11.65 15,11.82 15,12A2,2 0 0,0 17,14A2,2 0 0,0 19,12A2,2 0 0,0 17,10C16.82,10 16.65,10 16.5,10.07L13.93,7.5C14.19,6.57 13.71,5.55 12.78,5.16C12.35,5 11.9,4.96 11.5,5.07L9.8,3.38L10.59,2.6C11.37,1.81 12.63,1.81 13.41,2.6L21.4,10.59C22.19,11.37 22.19,12.63 21.4,13.41L13.41,21.4C12.63,22.19 11.37,22.19 10.59,21.4L2.6,13.41C1.81,12.63 1.81,11.37 2.6,10.59Z" />
            </svg>
        </template>
    </BaseFeature>
</template>

<script setup>
import BaseFeature from '../BaseFeature.vue'

const translations = {
    en: {
        gitManagement: 'Git Management',
        description: 'Intuitive Git interface for effortless project management',
        visualHistory: 'Visual History',
        branchManagement: 'Branch Management',
        fileTracking: 'File Tracking',
        conflictResolution: 'Conflict Resolution'
    },
    zh: {
        gitManagement: 'Git 项目管理',
        description: '提供直观的 Git 操作界面，轻松管理您的项目',
        visualHistory: '可视化历史',
        branchManagement: '分支管理',
        fileTracking: '文件追踪',
        conflictResolution: '冲突解决'
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

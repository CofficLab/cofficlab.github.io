<template>
    <MacWindow :height="height" title="TravelMode" @close="handleCloseWindow" @minimize="handleMinimizeWindow"
        @maximize="handleMaximizeWindow">
        <!-- 应用列表 -->
        <div class="flex-1 p-4 overflow-y-auto custom-scrollbar">
            <div class="space-y-2">
                <div v-for="app in apps.slice(0, appsCount)" :key="app.name"
                    class="flex items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors group"
                    :class="{
                        'bg-red-100 dark:bg-red-900/30': blockedApps.has(app.bundleId)
                    }">
                    <div class="w-8 h-8 flex items-center justify-center text-xl">{{ app.icon }}</div>
                    <div class="ml-3 flex-1">
                        <div class="flex items-center justify-between">
                            <div class="flex flex-col">
                                <div class="font-medium text-gray-900 dark:text-gray-100 text-start">{{ app.name }}
                                </div>
                                <div class="flex flex-row gap-2">
                                    <div class="text-sm text-gray-500">{{ app.pid }}</div>
                                    <div class="text-sm text-gray-500">{{ app.bundleId }}</div>
                                </div>
                            </div>
                            <div class="flex items-center space-x-2" v-if="showActionButtons">
                                <!-- 新增的按钮组，默认隐，group-hover时显示 -->
                                <div class="hidden group-hover:flex space-x-2">
                                    <button @click="handleBlockNetwork(app)"
                                        class="p-1.5 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 text-red-600 dark:text-red-400 disabled:opacity-50 disabled:cursor-not-allowed"
                                        :disabled="blockedApps.has(app.bundleId)">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                            fill="currentColor">
                                            <path fill-rule="evenodd"
                                                d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </button>
                                    <button @click="handleAllowNetwork(app)"
                                        class="p-1.5 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 text-green-600 dark:text-green-400 disabled:opacity-50 disabled:cursor-not-allowed"
                                        :disabled="!blockedApps.has(app.bundleId)">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                            fill="currentColor">
                                            <path fill-rule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 对话框组件 -->
        <ConfirmDialog v-model="showConfirmDialog" :title="confirmDialogTitle" :message="confirmDialogMessage"
            @confirm="handleDialogConfirm" />
        <AlertDialog v-model="showAlertDialog" :message="alertMessage" />
    </MacWindow>
</template>

<script setup>
import { ref } from 'vue'
import MacWindow from '../Common/MacWindow.vue'
import ConfirmDialog from '../Common/ConfirmDialog.vue'
import AlertDialog from '../Common/AlertDialog.vue'

const props = defineProps({
    height: {
        type: String,
        default: 'h-96'
    },
    showActionButtons: {
        type: Boolean,
        default: true
    },
    appsCount: {
        type: Number,
        default: 10
    }
})

const apps = [
    {
        name: 'Google Chrome',
        bundleId: 'com.google.Chrome',
        pid: '122',
        icon: '🌐'
    },
    {
        name: 'ClashX Pro',
        bundleId: 'com.west2online.ClashXPro',
        pid: '87',
        icon: '🔰'
    },
    {
        name: 'Cursor',
        bundleId: 'com.todesktop.230313mzl4w4u92',
        pid: '7',
        icon: '📝'
    },
    {
        name: 'OrbStack',
        bundleId: 'dev.kdrag0n.MacVirt',
        pid: '2',
        icon: '🔄'
    },
    {
        name: 'Safari',
        bundleId: 'com.apple.Safari',
        pid: '1',
        icon: '🧭'
    },
    {
        name: 'Visual Studio Code',
        bundleId: 'com.microsoft.VSCode',
        pid: '156',
        icon: '💻'
    },
    {
        name: 'Spotify',
        bundleId: 'com.spotify.client',
        pid: '203',
        icon: '🎵'
    },
    {
        name: 'Discord',
        bundleId: 'com.discord.app',
        pid: '189',
        icon: '💬'
    },
    {
        name: 'Docker Desktop',
        bundleId: 'com.docker.docker',
        pid: '167',
        icon: '🐳'
    },
    {
        name: 'Slack',
        bundleId: 'com.slack.Slack',
        pid: '145',
        icon: '💼'
    },
    {
        name: 'Notion',
        bundleId: 'notion.id',
        pid: '134',
        icon: '📔'
    },
    {
        name: 'WeChat',
        bundleId: 'com.tencent.xinWeChat',
        pid: '178',
        icon: '💭'
    },
    {
        name: 'Postman',
        bundleId: 'com.postman.app',
        pid: '198',
        icon: '📮'
    },
    {
        name: 'Microsoft Teams',
        bundleId: 'com.microsoft.teams',
        pid: '167',
        icon: '👥'
    },
    {
        name: 'Figma',
        bundleId: 'com.figma.Desktop',
        pid: '143',
        icon: '🎨'
    },
    {
        name: 'iTerm',
        bundleId: 'com.googlecode.iterm2',
        pid: '129',
        icon: '⌨️'
    },
    {
        name: 'Alfred',
        bundleId: 'com.runningwithcrayons.Alfred',
        pid: '112',
        icon: '🎩'
    },
    {
        name: 'Telegram',
        bundleId: 'org.telegram.desktop',
        pid: '156',
        icon: '✈️'
    },
    {
        name: 'Zoom',
        bundleId: 'us.zoom.xos',
        pid: '187',
        icon: '🎥'
    },
    {
        name: 'Rectangle',
        bundleId: 'com.knollsoft.Rectangle',
        pid: '89',
        icon: '⬜'
    }
]

// 对话框状态
const showConfirmDialog = ref(false)
const confirmDialogTitle = ref('')
const confirmDialogMessage = ref('')
const pendingAction = ref(null)

// 添加 Alert 对话框状态
const showAlertDialog = ref(false)
const alertMessage = ref('')

// 添加一个新的 ref 来跟踪被禁止的应用
const blockedApps = ref(new Set(['com.apple.Safari']))

const handleBlockNetwork = (app) => {
    confirmDialogTitle.value = '确认禁止联网'
    confirmDialogMessage.value = `确定要禁止 ${app.name} 联网吗？（演示）`
    pendingAction.value = () => {
        blockedApps.value.add(app.bundleId)
        alertMessage.value = '操作已确认（演示）'
        showAlertDialog.value = true
    }
    showConfirmDialog.value = true
}

const handleAllowNetwork = (app) => {
    confirmDialogTitle.value = '确认允许联网'
    confirmDialogMessage.value = `确定要允许 ${app.name} 联网吗？（这是演示）`
    pendingAction.value = () => {
        blockedApps.value.delete(app.bundleId)
        alertMessage.value = '操作已确认（演示）'
        showAlertDialog.value = true
    }
    showConfirmDialog.value = true
}

const handleDialogConfirm = () => {
    if (pendingAction.value) {
        pendingAction.value()
        pendingAction.value = null
    }
}
</script>

<style scoped>
/* 自定义滚动条样式 */
.custom-scrollbar {
    scrollbar-width: thin;
    /* Firefox */
    scrollbar-color: rgba(156, 163, 175, 0.5) transparent;
    /* Firefox */
}

/* Webkit (Chrome, Safari, Edge) 滚动条样式 */
.custom-scrollbar::-webkit-scrollbar {
    width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: rgba(156, 163, 175, 0.5);
    border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background-color: rgba(156, 163, 175, 0.7);
}

/* 暗色模式滚动条 */
:dark .custom-scrollbar {
    scrollbar-color: rgba(156, 163, 175, 0.3) transparent;
}

:dark .custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: rgba(156, 163, 175, 0.3);
}

:dark .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background-color: rgba(156, 163, 175, 0.5);
}
</style>
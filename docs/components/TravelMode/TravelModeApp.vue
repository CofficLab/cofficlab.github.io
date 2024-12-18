<template>
    <div class="flex bg-white/90 dark:bg-gray-800 relative rounded-2xl overflow-hidden max-w-5xl self-center mx-auto shadow-xl"
        :class="height">
        <!-- 窗口控制按钮 -->
        <div
            class="absolute top-0 left-0 right-0 flex items-center h-12 px-4 bg-gray-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
            <div class="flex items-center space-x-2">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div class="ml-6 text-sm font-medium text-gray-700 dark:text-gray-200">TravelMode</div>
        </div>

        <!-- 主要内容区域 -->
        <div class="flex-1 flex flex-col pt-12">
            <!-- 应用列表 -->
            <div class="flex-1 p-4 overflow-y-auto custom-scrollbar">
                <div class="space-y-2 ">
                    <div v-for="app in apps" :key="app.name"
                        class="flex items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                        <div class="w-8 h-8 flex items-center justify-center text-xl">{{ app.icon }}</div>
                        <div class="ml-3 flex-1">
                            <div class="flex items-center justify-between">
                                <div class="flex flex-col">
                                    <div class="font-medium text-gray-900 dark:text-gray-100 text-start">{{ app.name }}
                                    </div>
                                    <div class="text-sm text-gray-500">{{ app.bundleId }}</div>
                                </div>
                                <div class="text-sm text-gray-500">{{ app.pid }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    height: {
        type: String,
        default: 'h-96'
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
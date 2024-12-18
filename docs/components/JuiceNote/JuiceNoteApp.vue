<template>
    <div class="flex bg-white/90 dark:bg-gray-800 relative rounded-2xl overflow-hidden max-w-3xl self-center mx-auto shadow-xl"
        :class="height">
        <!-- 窗口控制按钮 -->
        <div
            class="absolute top-0 left-0 right-0 flex items-center h-12 px-4 bg-gray-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
            <div class="flex items-center space-x-2">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div class="ml-6 text-sm font-medium text-gray-700 dark:text-gray-200">JuiceNote</div>
        </div>

        <!-- 左侧边栏 -->
        <div
            class="w-48 bg-gray-50 dark:bg-gray-700/90 text-gray-700 dark:text-gray-200 pt-12 text-sm border-r border-gray-200 dark:border-gray-600">
            <div class="p-4">
                <div>
                    <div class="flex items-center space-x-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded">
                        <RiHome2Line class="w-4 h-4" />
                        <span>{{ translations[lang].documentRepo }}</span>
                    </div>
                    <div class="flex items-center space-x-2 p-2 ml-4 hover:bg-gray-100 dark:hover:bg-gray-600 rounded">
                        <RiArticleLine class="w-4 h-4" />
                        <span>{{ translations[lang].spring }}</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- 主要内容区域 -->
        <div class="flex-1 flex flex-col pt-12">
            <!-- 顶部工具栏 -->
            <div
                class="h-10 bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600 flex items-center justify-end px-4">
                <div class="flex items-center space-x-4">
                    <button
                        class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200">
                        <RiNotificationLine class="w-4 h-4" />
                    </button>
                    <button
                        class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200">
                        <RiSettings3Line class="w-4 h-4" />
                    </button>
                </div>
            </div>

            <!-- 内容区域 -->
            <div class="flex-1 overflow-auto p-6 bg-transparent text-gray-800 dark:text-gray-200 custom-scrollbar">
                <div class="space-y-0 text-center">
                    <div class="p-4 rounded-lg">
                        <h3 class="text-lg font-semibold mb-2">{{ translations[lang].spring }}</h3>
                        <p class="whitespace-pre-line">{{ translations[lang].poem }}</p>
                    </div>
                </div>
            </div>

            <!-- 底部状态栏 -->
            <div
                class="h-6 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600 flex items-center justify-end px-4 text-sm">
                <div class="flex items-center space-x-0">
                    <button class="hover:text-blue-600 dark:hover:text-blue-400 p-2 text-gray-700 dark:text-gray-200">
                        <RiGitRepositoryLine class="w-4 h-4" />
                    </button>
                    <button class="hover:text-blue-600 dark:hover:text-blue-400 p-2 text-gray-700 dark:text-gray-200">
                        <RiMessageLine class="w-4 h-4" />
                    </button>
                    <button class="hover:text-blue-600 dark:hover:text-blue-400 p-2 text-gray-700 dark:text-gray-200">
                        <RiInfoCardLine class="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { RiGitRepositoryLine, RiInfoCardLine, RiMessageLine, RiArticleLine, RiHome2Line, RiNotificationLine, RiSettings3Line } from '@remixicon/vue'

defineProps({
    height: {
        type: String,
        default: 'h-[40rem]',
        validator: (value) => {
            return [
                'h-64',
                'h-96',
                'h-[32rem]',
                'h-[40rem]',
                'h-[48rem]',
                'h-[56rem]'
            ].includes(value)
        }
    },
    lang: {
        type: String,
        default: 'en',
        validator: (value) => ['en', 'zh'].includes(value)
    }
})

const translations = {
    en: {
        documentRepo: 'Repository',
        spring: 'Spring',
        poem: `
            Spring brings gentle breeze and sun,
            Nature's dance has just begun.
            Flowers bloom in morning light,
            Creating such a lovely sight.
        `
    },
    zh: {
        documentRepo: '文档仓库',
        spring: '春日',
        poem: `
            春风拂柳绿如烟，
            花落花开又一年。
            蝴蝶纷飞春意闹，
            小园深处好晴天。
        `
    }
}
</script>

<style scoped>
.custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: rgba(156, 163, 175, 0.5) transparent;
}

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
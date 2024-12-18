<template>
    <div class="flex h-88 bg-gray-100 relative rounded-2xl overflow-hidden max-w-3xl self-center mx-auto">
        <!-- 窗口控制按钮 -->
        <div class="absolute top-0 left-0 right-0 flex items-center justify-start h-8 px-4">
            <div class="flex items-center space-x-2">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div class="flex items-center space-x-3 ml-12">
                <button class="p-2 rounded-full hover:bg-gray-100">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
                <button class="p-2 rounded-full hover:bg-gray-100">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                    </svg>
                </button>
            </div>
        </div>

        <!-- 左侧边栏 -->
        <div class="w-48 bg-gray-700/90 text-white pt-6 text-sm">
            <div class="p-4">
                <div>
                    <div class="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
                        <RiHome2Line class="w-4 h-4" />
                        <span>{{ translations[lang].documentRepo }}</span>
                    </div>
                    <div class="flex items-center space-x-2 p-2 ml-4 hover:bg-gray-700 rounded">
                        <RiArticleLine class="w-4 h-4" />
                        <span>{{ translations[lang].spring }}</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- 主要内容区域 -->
        <div class="flex-1 flex flex-col">
            <!-- 顶部工具栏 -->
            <div
                class="h-10 bg-gradient-to-r from-cyan-700/90 to-cyan-800/90 border-b flex items-center justify-end px-4">
                <div class="flex items-center space-x-4">
                    <button class="p-2 rounded-full hover:bg-gray-100">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9">
                            </path>
                        </svg>
                    </button>
                    <button class="p-2 rounded-full hover:bg-gray-100">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>

            <!-- 内容区域 -->
            <div class="flex-1 overflow-auto p-6 bg-transparent text-gray-800">
                <div class="space-y-0 text-center">
                    <!-- 示例内容 -->
                    <div class="p-4 rounded-lg">
                        <h3 class="text-lg font-semibold mb-2">{{ translations[lang].spring }}</h3>
                        <p class="whitespace-pre-line">{{ translations[lang].poem }}</p>
                    </div>
                </div>
            </div>

            <!-- 底部状态栏 -->
            <div
                class="h-6 bg-gradient-to-r from-cyan-700/90 to-cyan-800/90 border-t flex items-center justify-end px-4 text-sm">
                <div class="flex items-center space-x-0">
                    <button class="hover:text-blue-600 p-2">
                        <RiGitRepositoryLine class="w-4 h-4" />
                    </button>
                    <button class="hover:text-blue-600 p-2">
                        <RiMessageLine class="w-4 h-4" />
                    </button>
                    <button class="hover:text-blue-600 p-2">
                        <RiInfoCardLine class="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { RiGitRepositoryLine } from '@remixicon/vue';
import { RiInfoCardLine } from '@remixicon/vue';
import { RiMessageLine } from '@remixicon/vue';
import { RiArticleLine } from '@remixicon/vue';
import { RiHome2Line } from '@remixicon/vue';

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

defineProps({
    lang: {
        type: String,
        default: 'en',
        validator: (value) => ['en', 'zh'].includes(value)
    }
})
</script>
<template>
    <div class="flex bg-emerald-500 relative rounded-2xl overflow-hidden max-w-5xl self-center mx-auto shadow-xl"
        :class="height">
        <!-- 窗口控制按钮 -->
        <div class="absolute top-0 left-0 right-0 flex items-center h-12 px-4">
            <div class="flex items-center space-x-2">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div class="ml-6 text-sm font-medium text-white">Cisum Player</div>
        </div>

        <!-- 主要内容区域 -->
        <div class="flex-1 flex flex-col">
            <!-- 播放器区域 -->
            <div class="flex-none pt-12 px-8 pb-4 text-white">
                <div class="text-2xl font-medium mb-4">{{ songs[0].name }}</div>
                <!-- 进度条 -->
                <div class="flex items-center space-x-4">
                    <span class="text-sm">00:00</span>
                    <div class="flex-1 h-1 bg-white/30 rounded-full">
                        <div class="w-1/4 h-full bg-white rounded-full"></div>
                    </div>
                    <span class="text-sm">04:32</span>
                </div>
                <!-- 控制按钮 -->
                <div class="flex items-center justify-center space-x-8 mt-4">
                    <button class="text-2xl">
                        <RiShuffleLine class="w-8 h-8" />
                    </button>
                    <button class="text-2xl">
                        <RiPlayCircleLine class="w-8 h-8" />
                    </button>
                    <button class="text-3xl">
                        <RiSkipForwardLine class="w-8 h-8" />
                    </button>
                    <button class="text-2xl">
                        <RiShuffleLine class="w-8 h-8" />
                    </button>
                    <button class="text-2xl">
                        <RiRepeatLine class="w-8 h-8" />
                    </button>
                </div>
            </div>

            <!-- 歌曲列表 -->
            <div class="flex-1 bg-white dark:bg-gray-800 p-4 overflow-y-auto custom-scrollbar">
                <!-- 标签页 -->
                <div class="flex justify-center space-x-4 mb-4 text-gray-600">
                    <button class="px-4 py-1 rounded-full bg-gray-100">仓库</button>
                    <button class="px-4 py-1 rounded-full">设置</button>
                    <button class="px-4 py-1 rounded-full">订阅</button>
                </div>
                <div class="text-sm text-gray-500 mb-2">共 2918</div>
                <!-- 歌曲列表 -->
                <div class="space-y-2">
                    <div v-for="song in songs" :key="song.name"
                        class="flex items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                        <div
                            class="w-12 h-12 rounded-lg bg-gray-200 flex-shrink-0 flex items-center justify-center text-2xl">
                            {{ song.cover }}
                        </div>
                        <div class="ml-3 flex-1 flex flex-col justify-start text-start">
                            <div class="font-medium text-gray-900 dark:text-gray-100">{{ song.name }}</div>
                            <div class="text-sm text-gray-500">{{ song.size }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { RiPlayCircleLine } from '@remixicon/vue';
import { RiShuffleLine } from '@remixicon/vue';
import { RiSkipForwardLine } from '@remixicon/vue';
import { RiRepeatLine } from '@remixicon/vue';
const props = defineProps({
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
    }
})

const songs = [
    { name: 'Various Artists - 那年的情书.wav', size: '48.1MB', cover: '💌' },
    { name: '林俊杰-生生.mp3', size: '10.4MB', cover: '🌱' },
    { name: '林俊杰-不为谁而作的歌.wav', size: '46.9MB', cover: '🎸' },
    { name: '光良-每一次喊你 (Live)-6.mp3', size: '4.8MB', cover: '🎤' },
    { name: '光良-1901的上一位房客-6.mp3', size: '11.5MB', cover: '🏠' },
    { name: '周杰伦-她de睡颜.wav', size: '41.1MB', cover: '😴' },
    { name: 'Groove Coverage - On The Radio.wav', size: '31.9MB', cover: '📻' },
    { name: '伍佰-那威威的森林.wav', size: '69.1MB', cover: '🌳' },
    { name: 'ai mini - 遇.wav', size: '65.8MB', cover: '🤖' },
    { name: '孙燕姿-星期一天气晴我离开你.mp3', size: '10.5MB', cover: '☀️' }
]
</script>

<style scoped>
/* 自定义滚动条样式 */
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
</style>

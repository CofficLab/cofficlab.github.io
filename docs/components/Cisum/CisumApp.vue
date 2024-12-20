<template>
    <MacWindow class="bg-emerald-500" :height="height" title="Cisum Player">
        <!-- 主要内容区域 -->
        <div class="flex-1 flex flex-col">
            <!-- 播放器区域 -->
            <div class="flex-none px-8 pb-4 mx-8 mt-8 bg-red-300/0">
                <div class="text-2xl font-medium mb-4">{{ songs[0].name }}</div>
                <!-- 进度条 -->
                <div class="flex items-center space-x-4 mt-12 w-3/4 mx-auto">
                    <span class="text-sm">00:00</span>
                    <div class="flex-1 h-1 bg-white/30 rounded-full">
                        <div class="w-1/4 h-full bg-white rounded-full"></div>
                    </div>
                    <span class="text-sm">04:32</span>
                </div>
                <!-- 控制按钮 -->
                <div class="flex items-center justify-center space-x-8 mt-12">
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
            <div v-if="showDBView"
                class="flex-1 bg-white dark:bg-gray-800 p-4 overflow-y-auto border-t border-gray-200 dark:border-gray-700">
                <div class="text-sm text-gray-500 mb-2 text-start pl-4">共 2918</div>
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
    </MacWindow>
</template>

<script setup>
import MacWindow from '../Common/MacWindow.vue'
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
    },
    showDBView: {
        type: Boolean,
        default: false
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
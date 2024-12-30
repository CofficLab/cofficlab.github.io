<template>
    <div class="flex max-w-md mx-auto bg-white/90 dark:bg-gray-800 relative rounded-lg overflow-hidden shadow" :class="[
        props.height,
        props.withShadow ? 'shadow' : ''
    ]">
        <!-- 顶部状态栏 -->
        <div
            class="absolute top-0 left-0 right-0 flex items-center h-10 px-4 bg-gray-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600 justify-between">
            <!-- 左侧时间 -->
            <div class="flex items-center">
                <span class="text-sm font-medium text-gray-700 dark:text-gray-200">{{ currentTime }}</span>
            </div>
            <!-- 右侧状态图标 -->
            <div class="flex items-center space-x-1.5">
                <!-- 信号图标 -->
                <svg class="w-5 h-3.5 text-gray-700 dark:text-gray-200" viewBox="0 0 20 12" fill="none"
                    stroke="currentColor">
                    <path d="M1 11h2V6H1v5zm4 0h2V4H5v7zm4 0h2V2H9v9zm4 0h2V0h-2v11z" fill="currentColor" />
                    <path d="M17 11h2V0h-2v11z" fill="currentColor" opacity="0.4" />
                </svg>
                <!-- Wi-Fi图标 -->
                <svg class="w-4 h-3.5 text-gray-700 dark:text-gray-200" viewBox="0 0 16 12" fill="currentColor">
                    <path
                        d="M8 10.5a1 1 0 100-2 1 1 0 000 2zM4.25 7.25a5 5 0 017.5 0l-1.06 1.06a3.5 3.5 0 00-5.38 0L4.25 7.25z" />
                    <path d="M1.75 4.75a8.5 8.5 0 0112.5 0l-1.06 1.06a7 7 0 00-10.38 0L1.75 4.75z" />
                </svg>
                <!-- 电池图标 -->
                <div class="flex items-center space-x-0.5">
                    <svg class="w-6 h-3.5 text-gray-700 dark:text-gray-200" viewBox="0 0 25 12" fill="none"
                        stroke="currentColor">
                        <rect x="0.5" y="0.5" width="21" height="11" rx="2.5" stroke-width="1" />
                        <rect x="2" y="2" width="18" height="8" rx="1" fill="currentColor" />
                        <path d="M23 4h1a1 1 0 011 1v2a1 1 0 01-1 1h-1V4z" fill="currentColor" />
                    </svg>
                </div>
            </div>
        </div>

        <!-- 主要内容区域 -->
        <div class="flex-1 flex flex-col pt-10 h-full">
            <div class="flex flex-1 h-full overflow-hidden">
                <!-- 主内容插槽 -->
                <slot></slot>
            </div>

            <!-- 底部工具栏 -->
            <div v-if="statusBarButtons?.length"
                class="h-8 bg-gray-100/95 dark:bg-gray-700/95 border-t border-gray-200 dark:border-gray-600 flex items-center justify-end px-4 text-sm">
                <div class="flex items-center space-x-0">
                    <template v-for="(button, index) in statusBarButtons" :key="index">
                        <button class="hover:text-blue-400 p-2 text-gray-600 dark:text-gray-200"
                            @click="button.onClick">
                            <component :is="button.icon" class="w-4 h-4" />
                        </button>
                    </template>
                </div>
            </div>
        </div>
    </div>
    <!-- 添加 AlertDialog 组件 -->
    <AlertDialog v-model="showAlertDialog" :message="alertMessage" />
</template>

<script setup>
import AlertDialog from './AlertDialog.vue'
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
    height: {
        type: String,
        default: 'h-96'
    },
    title: {
        type: String,
        default: ''
    },
    statusBarButtons: {
        type: Array,
        default: () => []
    },
    withShadow: {
        type: Boolean,
        default: true
    }
})

const emit = defineEmits(['close', 'minimize', 'maximize'])

const showAlertDialog = ref(false)
const alertMessage = ref('')

const handleCloseWindow = () => {
    alertMessage.value = '关闭iPhone窗口（这是演示，不会真实操作）'
    showAlertDialog.value = true
    emit('close')
}

const handleMinimizeWindow = () => {
    alertMessage.value = '最小化窗口（这是演示，不会真实操作）'
    showAlertDialog.value = true
    emit('minimize')
}

const handleMaximizeWindow = () => {
    alertMessage.value = '最大化窗口（这是演示，不会真实操作）'
    showAlertDialog.value = true
    emit('maximize')
}

const currentTime = ref('12:00')

// 更新时间的函数
const updateTime = () => {
    const now = new Date()
    const hours = now.getHours().toString().padStart(2, '0')
    const minutes = now.getMinutes().toString().padStart(2, '0')
    currentTime.value = `${hours}:${minutes}`
}

// 设置定时器更新时间
let timeInterval
onMounted(() => {
    updateTime()
    timeInterval = setInterval(updateTime, 60000) // 每分钟更新一次
})

onUnmounted(() => {
    if (timeInterval) {
        clearInterval(timeInterval)
    }
})
</script>

<style scoped>
/* 确保图标渲染更平滑 */
svg {
    shape-rendering: geometricPrecision;
}
</style>
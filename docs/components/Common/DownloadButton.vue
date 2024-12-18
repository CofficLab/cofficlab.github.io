<template>
    <div class="relative group/download">
        <button class="p-2 bg-white/80 dark:bg-gray-800/80 rounded-full 
                     opacity-0 group-hover:opacity-100 transition-opacity duration-200 
                     hover:bg-white dark:hover:bg-gray-700">
            <RiDownloadLine class="h-5 w-5 text-gray-600 dark:text-gray-300" />
        </button>
        <!-- 尺寸选择菜单 -->
        <div class="absolute left-0 top-full mt-2 py-2 w-32 bg-white dark:bg-gray-800 rounded-lg shadow-lg 
                  opacity-0 invisible group-hover/download:opacity-100 group-hover/download:visible 
                  transition-all duration-200">
            <button v-for="size in downloadSizes" :key="size.label" @click="$emit('download', size.scale)" class="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700
                       text-gray-600 dark:text-gray-300">
                {{ size.label }}
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { RiDownloadLine } from '@remixicon/vue'

const downloadSizes = [
    { label: '1x (原始尺寸)', scale: 1 },
    { label: '2x', scale: 2 },
    { label: '3x', scale: 3 },
    { label: '4x', scale: 4 }
]

defineEmits<{
    (e: 'download', scale: number): void
}>()
</script>
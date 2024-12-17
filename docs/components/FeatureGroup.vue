<template>
    <div data-type="feature-group" class="flex mt-8 flex-col items-center justify-center my-2 gap-0 w-full">
        <div v-for="(component, index) in $slots.default?.() || []" :key="index" class="w-full relative group"
            :class="getBackgroundClass(index)">
            <div :ref="el => setRef(el, index)" class="relative">
                <component :is="component" />
                <div class="absolute top-2 left-2">
                    <DownloadButton @download="scale => downloadAsImage(index, scale)" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import html2canvas from 'html2canvas'
import DownloadButton from './DownloadButton.vue'

const componentRefs = ref<HTMLElement[]>([])

const getBackgroundClass = (index: number): string => {
    const bgClasses = [
        'bg-gradient-to-b from-blue-50/50 to-blue-200/50 dark:from-blue-500/10 dark:to-blue-200/10',
        'bg-gradient-to-b from-blue-200/50  to-purple-200/50 dark:from-blue-500/10 dark:to-purple-200/10',
        'bg-gradient-to-b from-purple-200/50  to-pink-200/50 dark:from-purple-500/10 dark:to-pink-200/10',
        'bg-gradient-to-b from-pink-200/50  to-red-200/50 dark:from-pink-500/10 dark:to-red-200/10',
        'bg-gradient-to-b from-red-200/50  to-orange-200/50 dark:from-red-500/10 dark:to-orange-200/10',
        'bg-gradient-to-b from-orange-200/50  to-yellow-200/50 dark:from-orange-500/10 dark:to-yellow-200/10',
        'bg-gradient-to-b from-yellow-200/50  to-green-200/50 dark:from-yellow-500/10 dark:to-green-200/10',
        'bg-gradient-to-b from-green-200/50  to-teal-200/50 dark:from-green-500/10 dark:to-teal-200/10',
        'bg-gradient-to-b from-teal-200/50  to-blue-200/50 dark:from-teal-200/50 dark:to-blue-200/50',
    ]
    return bgClasses[index % bgClasses.length]
}

const setRef = (el: any, index: number) => {
    if (el) componentRefs.value[index] = el as HTMLElement
}

const downloadAsImage = async (index: number, scale: number = 2) => {
    const element = componentRefs.value[index]
    if (!element) return

    try {
        const wrapper = document.createElement('div')
        wrapper.className = getBackgroundClass(index)
        wrapper.style.padding = '1px'

        const clone = element.cloneNode(true) as HTMLElement
        wrapper.appendChild(clone)
        document.body.appendChild(wrapper)

        const canvas = await html2canvas(wrapper, {
            backgroundColor: null,
            useCORS: true,
            scale,
        })

        document.body.removeChild(wrapper)

        const link = document.createElement('a')
        link.download = `component-${index + 1}@${scale}x.png`
        link.href = canvas.toDataURL('image/png')
        link.click()
    } catch (error) {
        console.error('Failed to download image:', error)
    }
}
</script>
<template>
    <div class="relative w-full rounded-3xl" :class="getBackgroundClass()">
        <!-- Download button that appears on hover -->
        <div class="absolute top-4 right-4 opacity-0 hover:opacity-100 transition-opacity" v-if="showDownloadButton">
            <button @click="downloadAsImage"
                class="bg-yellow-500/30 backdrop-blur-sm p-2 rounded-lg hover:bg-yellow-500/40">
                <RiDownloadLine class="w-6 h-6 text-white" />
            </button>
        </div>

        <div class="flex p-8 h-full w-full" ref="componentRef">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RiDownloadLine } from '@remixicon/vue';
import html2canvas from 'html2canvas';

const props = defineProps({
    showDownloadButton: {
        type: Boolean,
        default: true
    },
    backgroundClassIndex: {
        type: Number,
        default: 0
    }
})

const componentRef = ref<HTMLElement | null>(null);

const downloadAsImage = async () => {
    try {
        const element = componentRef.value;
        if (!element) {
            console.error('Component reference is null');
            return;
        }
        const canvas = await html2canvas(element, {
            scale: 2,
            useCORS: true,
            logging: false,
            backgroundColor: null,
        });
        const link = document.createElement('a');
        link.download = 'feature.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    } catch (error) {
        console.error('Failed to download image:', error);
    }
};

const bgClasses = [
    'bg-gradient-to-b from-blue-100/95 to-blue-200/95 dark:from-blue-500/10 dark:to-blue-200/10',
    'bg-gradient-to-b from-blue-200/50  to-purple-200/50 dark:from-blue-500/10 dark:to-purple-200/10',
    'bg-gradient-to-b from-yellow-200/50  to-green-200/50 dark:from-yellow-500/10 dark:to-green-200/10',
    'bg-gradient-to-b from-teal-200/50  to-blue-200/50 dark:from-teal-500/10 dark:to-blue-200/10',
    'bg-gradient-to-b from-pink-200/50  to-red-200/50 dark:from-pink-500/10 dark:to-red-200/10',
    'bg-gradient-to-b from-red-200/50  to-orange-200/50 dark:from-red-500/10 dark:to-orange-200/10',
    'bg-gradient-to-b from-orange-200/50  to-yellow-200/50 dark:from-orange-500/10 dark:to-yellow-200/10',
    'bg-gradient-to-b from-green-200/50  to-teal-200/50 dark:from-green-500/10 dark:to-teal-200/10',
]

const getBackgroundClass = (): string => {
    return bgClasses[props.backgroundClassIndex % bgClasses.length];
}

</script>
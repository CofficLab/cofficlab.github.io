<template>
    <div class="relative w-full rounded-3xl">
        <!-- Download button with dropdown menu -->
        <div class="absolute top-4 right-4 opacity-0 hover:opacity-100 transition-opacity" v-if="showDownloadButton">
            <div class="relative">
                <button @click="toggleDropdown"
                    class="bg-yellow-500/30 backdrop-blur-sm p-2 rounded-lg hover:bg-yellow-500/40">
                    <RiDownloadLine class="w-6 h-6 text-white" />
                </button>
                <!-- Size selection dropdown -->
                <div v-if="isDropdownOpen"
                    class="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2">
                    <!-- Background settings -->
                    <div class="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                        <label class="flex items-center space-x-2 mb-2">
                            <input type="checkbox" v-model="includeBackground" class="rounded">
                            <span>Include Background</span>
                        </label>
                        <!-- Background color selection -->
                        <div v-if="includeBackground" class="mt-2">
                            <div class="text-sm text-gray-600 dark:text-gray-400 mb-2">Background Style:</div>
                            <div class="grid grid-cols-4 gap-2">
                                <button v-for="(_, index) in bgClasses" :key="index" @click="selectedBgIndex = index"
                                    :class="[
                                        bgClasses[index],
                                        'w-8 h-8 rounded-lg border-2',
                                        selectedBgIndex === index ? 'border-yellow-500' : 'border-transparent'
                                    ]"></button>
                            </div>
                        </div>
                    </div>
                    <!-- Size options -->
                    <button v-for="size in exportSizes" :key="size.name" @click="downloadAsImage(size.scale)"
                        class="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div class="flex flex-col">
                            <span class="font-medium">{{ size.name }}</span>
                            <span class="text-sm text-gray-500 dark:text-gray-400">{{ size.description }}</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>

        <div class="flex p-8 h-full w-full" ref="componentRef" :class="getBackgroundClass()">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { RiDownloadLine } from '@remixicon/vue';
import html2canvas from 'html2canvas';

// 添加接口定义
interface ExportSize {
    name: string;
    scale: number | null;
    description: string;
    targetWidth?: number;
    targetHeight?: number;
}

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

const isDropdownOpen = ref(false);

const exportSizes: ExportSize[] = [
    { name: '1x (Original)', scale: 1, description: 'Original Size' },
    { name: '2x', scale: 2, description: '2x Larger' },
    { name: '3x', scale: 3, description: '3x Larger' },
    { name: '4x', scale: 4, description: '4x Larger' },
    {
        name: '2560x1600',
        scale: null, // 将在下载时动态计算
        description: 'Desktop Wallpaper',
        targetWidth: 2560,
        targetHeight: 1600
    },
];

const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
};

// Close dropdown when clicking outside
onMounted(() => {
    document.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        if (!target.closest('.relative')) {
            isDropdownOpen.value = false;
        }
    });
});

// Update downloadAsImage function to accept scale parameter
const downloadAsImage = async (scale: number | null = 2) => {
    try {
        const element = componentRef.value;
        if (!element) {
            console.error('Component reference is null');
            return;
        }

        let finalScale = scale;
        if (scale === null) {
            const size = exportSizes.find(s => s.targetWidth === 2560);
            if (size?.targetWidth) {
                const elementWidth = element.offsetWidth;
                finalScale = size.targetWidth / elementWidth;
            }
        }

        const canvas = await html2canvas(element, {
            scale: finalScale || 1,
            useCORS: true,
            logging: false,
            backgroundColor: includeBackground.value ? undefined : 'transparent',
        });

        const link = document.createElement('a');
        const fileName = scale === null ?
            `feature-${canvas.width}x${canvas.height}.png` :
            `feature-${scale}x.png`;
        link.download = fileName;
        link.href = canvas.toDataURL('image/png');
        link.click();
        isDropdownOpen.value = false;
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

    // 不透明的背景
    'bg-gradient-to-b from-blue-100 to-blue-200 dark:from-blue-500 dark:to-blue-200',
    'bg-gradient-to-b from-blue-200  to-purple-200 dark:from-blue-500 dark:to-purple-200',
    'bg-gradient-to-b from-yellow-200  to-green-200 dark:from-yellow-500 dark:to-green-200',
    'bg-gradient-to-b from-teal-200  to-blue-200 dark:from-teal-500 dark:to-blue-200',
    'bg-gradient-to-b from-pink-200  to-red-200 dark:from-pink-500 dark:to-red-200',
    'bg-gradient-to-b from-red-200  to-orange-200 dark:from-red-500 dark:to-orange-200',
    'bg-gradient-to-b from-orange-200  to-yellow-200 dark:from-orange-500 dark:to-yellow-200',
    'bg-gradient-to-b from-green-200  to-teal-200 dark:from-green-500 dark:to-teal-200',
]

const selectedBgIndex = ref(props.backgroundClassIndex);

const getBackgroundClass = (): string => {
    return bgClasses[selectedBgIndex.value % bgClasses.length];
}

const includeBackground = ref(true);

</script>
<template>
    <div class="relative w-full rounded-3xl">
        <!-- Download button with dropdown menu -->
        <div class="absolute top-4 left-4 opacity-0 hover:opacity-100 transition-opacity" v-if="showDownloadButton">
            <div class="relative">
                <button @click="toggleDropdown"
                    class="bg-yellow-500/30 backdrop-blur-sm p-2 rounded-lg hover:bg-yellow-500/40">
                    <RiDownloadLine class="w-6 h-6 text-white" />
                </button>
                <!-- Size selection dropdown -->
                <div v-if="isDropdownOpen"
                    class="absolute left-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-50">
                    <!-- Component size presets -->
                    <div class="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                        <div class="text-sm text-gray-600 dark:text-gray-400 mb-2">Component Size:</div>
                        <select v-model="selectedSize"
                            class="w-full p-1 rounded border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                            <option v-for="preset in sizePresets" :key="preset.name" :value="preset">
                                {{ preset.name }}
                            </option>
                        </select>
                    </div>
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

        <div class="flex p-8" ref="componentRef" :class="[
            getBackgroundClass(),
            selectedSize.width,
            selectedSize.height
        ]">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { RiDownloadLine } from '@remixicon/vue';
import { toPng } from 'html-to-image';

// 添加接口定义
interface ExportSize {
    name: string;
    scale: number | null;
    description: string;
    targetWidth?: number;
    targetHeight?: number;
}

interface SizePreset {
    name: string;
    width: string;
    height: string;
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

const sizePresets = [
    { name: 'Default', width: 'w-full', height: 'h-full' },
    { name: 'Square', width: 'w-[600px]', height: 'h-[600px]' },
    { name: 'Landscape', width: 'w-[800px]', height: 'h-[450px]' },
    { name: 'Portrait', width: 'w-[450px]', height: 'h-[800px]' },
    { name: 'Wide', width: 'w-[1200px]', height: 'h-[675px]' },
    { name: 'Banner', width: 'w-[1200px]', height: 'h-[300px]' },
    { name: '1280 × 800', width: 'w-[1280px]', height: 'h-[800px]' },
    { name: '1440 × 900', width: 'w-[1440px]', height: 'h-[900px]' },
    { name: '2560 × 1600', width: 'w-[2560px]', height: 'h-[1600px]' },
    { name: '2880 × 1800', width: 'w-[2880px]', height: 'h-[1800px]' },
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

        let pixelRatio = scale || 1;
        if (scale === null) {
            const size = exportSizes.find(s => s.targetWidth === 2560);
            if (size?.targetWidth) {
                pixelRatio = size.targetWidth / element.offsetWidth;
            }
        }

        const dataUrl = await toPng(element, {
            pixelRatio: pixelRatio,
            backgroundColor: includeBackground.value ? undefined : 'transparent',
            style: {
                transform: 'scale(1)', // 确保正确的缩放
                transformOrigin: 'top left'
            }
        });

        const link = document.createElement('a');
        const fileName = scale === null ?
            `feature-${element.offsetWidth * pixelRatio}x${element.offsetHeight * pixelRatio}.png` :
            `feature-${scale}x.png`;
        link.download = fileName;
        link.href = dataUrl;
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
    'bg-gradient-to-b from-pink-200/50  to-indigo-200/20 dark:from-pink-500/10 dark:to-indigo-200/10',
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

    // 不透明的深色背景
    'bg-gradient-to-b from-blue-900 to-blue-200 dark:from-blue-900 dark:to-blue-200',
    'bg-gradient-to-b from-blue-900 to-purple-200 dark:from-blue-900 dark:to-purple-200',
    'bg-gradient-to-b from-yellow-900 to-green-200 dark:from-yellow-900 dark:to-green-200',
    'bg-gradient-to-b from-teal-900 to-blue-200 dark:from-teal-900 dark:to-blue-200',
    'bg-gradient-to-b from-pink-900 to-red-200 dark:from-pink-900 dark:to-red-200',
    'bg-gradient-to-b from-red-900 to-orange-200 dark:from-red-900 dark:to-orange-200',
    'bg-gradient-to-b from-orange-900 to-yellow-200 dark:from-orange-900 dark:to-yellow-200',
    'bg-gradient-to-b from-green-900 to-teal-900 dark:from-green-900 dark:to-teal-900',
]

const selectedBgIndex = ref(props.backgroundClassIndex);

const getBackgroundClass = (): string => {
    return bgClasses[selectedBgIndex.value % bgClasses.length];
}

const includeBackground = ref(true);

const selectedSize = ref(sizePresets[0]);

</script>
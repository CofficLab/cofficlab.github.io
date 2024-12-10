<template>
    <div class="bg-white rounded-lg p-4 w-[400px] shadow-lg">
        <div class="flex gap-2 mb-4">
            <span class="w-3 h-3 rounded-full bg-red-400"></span>
            <span class="w-3 h-3 rounded-full bg-yellow-400"></span>
            <span class="w-3 h-3 rounded-full bg-green-400"></span>
        </div>

        <div class="text-gray-800">
            <div class="text-center">{{ songs[0] }}</div>

            <div class="player-controls">
                <div class="flex justify-center gap-8 my-4">
                    <RiSkipBackLine class="w-8 h-8" />
                    <RiPlayCircleLine class="w-8 h-8" />
                    <RiSkipForwardLine class="w-8 h-8" />
                    <RiShuffleLine class="w-8 h-8" />
                </div>

                <div class="flex items-center gap-4 my-4">
                    <span class="time-current">00:00</span>
                    <div class="flex-1 h-1 bg-gray-200 rounded relative">
                        <div class="w-3 h-3 bg-[#8fd3f4] rounded-full absolute top-1/2 -translate-y-1/2">
                        </div>
                    </div>
                    <span class="time-total">03:07</span>
                </div>
            </div>

            <div class="mt-4">
                <div v-for="(song, index) in songs" :key="index"
                    class="flex items-center gap-2 p-2 border-b border-gray-200">
                    <RiMusic2Fill class="w-4 h-4" />
                    <span class="song-info">{{ song }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { RiShuffleLine } from '@remixicon/vue';
import { RiPlayCircleLine } from '@remixicon/vue';
import { computed, ref } from 'vue';
import { RiMusic2Fill, RiSkipBackLine, RiSkipForwardLine, RiPauseLine, RiRepeat2Line, RiDownloadLine } from '@remixicon/vue';
import html2canvas from 'html2canvas';

const translations = {
    en: {
        musicLibrary: 'Music Library',
        importable: 'Importable',
        offline: 'Offline',
        exportable: 'Exportable',
        syncable: 'Syncable'
    },
    zh: {
        musicLibrary: '音乐仓库 - 随心随意',
        importable: '可导入',
        offline: '可离线',
        exportable: '可导出',
        syncable: '可同步'
    }
}

const props = defineProps({
    lang: {
        type: String,
        default: 'en',
        validator: (value) => ['en', 'zh'].includes(value)
    }
})

const t = (key) => translations[props.lang][key]

const songs = computed(() => props.lang === 'en' ? [
    'The Beatles - Hey Jude',
    'Queen - Bohemian Rhapsody',
    'Michael Jackson - Billie Jean',
    'Ed Sheeran - Perfect',
    'Adele - Rolling in the Deep',
    'Taylor Swift - Shake It Off'
] : [
    '陈奕迅 & 王菲-因为爱情',
    '陈奕迅-好久不见',
    '陈奕迅-十年',
    '陈奕迅-是但求其爱',
    '陈奕迅-淘汰 (国)',
    '陈奕迅-K歌之王'
])

// Add ref for the component
const componentRef = ref(null);

// Download function
const downloadAsImage = async () => {
    try {
        const element = componentRef.value;
        const canvas = await html2canvas(element);
        const link = document.createElement('a');
        link.download = 'music-library.png';
        link.href = canvas.toDataURL();
        link.click();
    } catch (error) {
        console.error('Failed to download image:', error);
    }
};

</script>

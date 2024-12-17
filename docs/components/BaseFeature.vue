<template>
    <div class="relative w-full">
        <!-- Download button that appears on hover -->
        <div class="absolute top-4 right-4 opacity-0 hover:opacity-100 transition-opacity">
            <button @click="downloadAsImage"
                class="bg-yellow-500/30 backdrop-blur-sm p-2 rounded-lg hover:bg-yellow-500/40">
                <RiDownloadLine class="w-6 h-6 text-white" />
            </button>
        </div>

        <div class="flex p-8 h-full text-white w-full" :class="gradientClass" ref="componentRef">
            <div class="flex flex-col w-full">
                <div class="flex flex-row">
                    <div class="h-full p-8 flex-1 flex-col justify-center flex items-center self-center">
                        <h2 style="border: none; font-size: 3rem; margin-bottom: 6rem;">{{ t(titleKey) }}</h2>

                        <div class="grid grid-cols-2 gap-4">
                            <Button v-for="button in buttons" :key="button" :title="t(button)" />
                        </div>
                    </div>

                    <div class="right-section">
                        <slot name="right"></slot>
                    </div>
                </div>

                <div class="bottom-section w-full">
                    <slot name="bottom"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Button from './Button.vue';
import { ref } from 'vue';
import { RiDownloadLine } from '@remixicon/vue';
import html2canvas from 'html2canvas';

const props = defineProps({
    lang: {
        type: String,
        default: 'en',
        validator: (value) => ['en', 'zh'].includes(value)
    },
    translations: {
        type: Object,
        required: true
    },
    gradientClass: {
        type: String,
        required: true
    },
    titleKey: {
        type: String,
        required: true
    },
    buttons: {
        type: Array,
        required: true
    }
})

const t = (key) => props.translations[props.lang][key]

const componentRef = ref(null);

const downloadAsImage = async () => {
    try {
        const element = componentRef.value;
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


</script>
<template>
    <div class="feature-section py-16">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row items-center gap-8">
                <div class="md:w-1/2" :class="{ 'order-2': imageRight }">
                    <h2 class="text-3xl font-bold mb-4">
                        <slot name="title"></slot>
                    </h2>
                    <div class="text-lg text-gray-600">
                        <slot name="description"></slot>
                    </div>
                </div>
                <div class="md:w-1/2" :class="{ 'order-1': imageRight }">
                    <slot name="image"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    imageRight?: boolean
}>()
</script>
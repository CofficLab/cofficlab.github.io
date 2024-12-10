<template>
    <div class="bg-white/20 p-4 w-64 rounded-2xl text-center backdrop-blur-lg text-2xl">{{ props.title }}
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>
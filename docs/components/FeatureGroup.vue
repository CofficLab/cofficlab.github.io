<template>
    <div data-type="feature-group" class="flex mt-8 flex-col items-center justify-center my-2 gap-0 w-full">
        <div v-for="(component, index) in $slots.default()" :key="index" class="w-full"
            :class="getBackgroundClass(index)">
            <component :is="component" />
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        getBackgroundClass(index) {
            const bgClasses = [
                'bg-gradient-to-b from-blue-50/50  to-blue-200/50',
                'bg-gradient-to-b from-blue-200/50  to-purple-200/50',
                'bg-gradient-to-b from-purple-200/50  to-pink-200/50',
                'bg-gradient-to-b from-pink-200/50  to-red-200/50',
                'bg-gradient-to-b from-red-200/50  to-orange-200/50',
                'bg-gradient-to-b from-orange-200/50  to-yellow-200/50',
                'bg-gradient-to-b from-yellow-200/50  to-green-200/50',
                'bg-gradient-to-b from-green-200/50  to-teal-200/50',
                'bg-gradient-to-b from-teal-200/50  to-blue-200/50',
            ];
            return bgClasses[index % bgClasses.length];
        }
    }
}
</script>
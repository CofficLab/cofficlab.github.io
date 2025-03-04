<template>
    <article>
        <div class="shadow-lg flex flex-col justify-between gap-2 w-48 h-72 p-4 text-center rounded-lg bg-gray-400/20 
      transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-400/30
      group relative">
            <!-- 产品头像 -->
            <figure class="avatar relative">
                <img :src="member.avatar" alt="Member Avatar" class="w-20 h-20 mx-auto rounded-full transition-transform duration-300
          group-hover:scale-110 group-hover:rotate-6" />
            </figure>

            <div class="product-link group-hover:text-blue-600 transition-colors duration-200">
                <h1 class="name">{{ member.name }}</h1>
            </div>

            <h3 class="description group-hover:text-blue-600 transition-colors duration-200">
                {{ member.description }}
            </h3>

            <!-- 链接 -->
            <div class="flex justify-center mt-6 space-x-4">
                <a :href="member.github" target="_blank" v-if="member.github">
                    <img src="/images/friends/github.png" alt=""
                        class="rounded-full w-7 transition-all duration-200 hover:scale-105 ease-out" />
                </a>
            </div>
        </div>
    </article>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps({
    member: {
        type: Object,
        required: true,
    },
});

const homepage = computed(() => {
    return props.member.homepage
        ? props.member.homepage
        : '/en/' + props.member.name.toLowerCase().replace(' ', '-');
});

const target = computed(() => {
    return props.member.homepage ? '_blank' : '_self';
});
</script>

<style scoped>
.name {
    font-size: 16px;
    line-height: 24px;
}

.product-link {
    text-decoration: none;
}

.description {
    padding-top: 4px;
    line-height: 20px;
    font-size: 14px;
    margin: 0;
    font-weight: 500;
    color: var(--vp-c-text-2);
}
</style>

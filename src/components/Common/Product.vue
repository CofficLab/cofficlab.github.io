<template>
  <div class="not-content shadow-lg flex flex-col justify-between gap-2 w-48 h-72 p-4 text-center rounded-lg bg-gray-400/20 
      transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-400/30
      group relative">
    <div>
      <!-- 产品头像 -->
      <figure class="avatar relative">
        <img :src="product.avatar" alt="Product Avatar" class="w-20 h-20 mx-auto rounded-full transition-transform duration-300
          group-hover:scale-110 group-hover:rotate-6" />
      </figure>

      <a :href="product.homepage" :target="target"
        class="product-link group-hover:text-blue-600 transition-colors duration-200">
        <h1 class="name">{{ product.name }}</h1>
      </a>

      <h3 class="description group-hover:text-blue-600 transition-colors duration-200">
        {{ product.description }}
      </h3>
    </div>

    <!-- 产品链接 -->
    <div class="flex justify-center mt-6 space-x-4">
      <a :href="product.github" target="_blank" v-if="product.github">
        <img src="/images/friends/github.png" alt=""
          class="rounded-full w-7 transition-all duration-200 hover:scale-105 ease-out" />
      </a>

      <a :href="product.store" target="_blank" v-if="product.store" class="block dark:hidden">
        <img src="/images/friends/mac_app_store.svg" alt=""
          class="w-28 transition-all duration-200 hover:scale-105 ease-out" />
      </a>
      <a :href="product.store" target="_blank" v-if="product.store" class="hidden dark:block">
        <img src="/images/friends/mac_app_store_dark.svg" alt=""
          class="w-28 transition-all duration-200 hover:scale-105 ease-out" />
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const target = computed(() => {
  return props.product.homepage ? '_blank' : '_self';
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

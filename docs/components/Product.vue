<template>
  <article>
    <div
      class="flex flex-col text-center gap-2 p-4 bg-gray-400/20 rounded-lg VPTeamMembersItem small">
      <!-- 产品头像 -->
      <figure class="avatar">
        <img
          :src="product.avatar"
          alt="Product Avatar"
          class="w-20 h-20 rounded-full mx-auto" />
      </figure>

      <a :href="homepage" target="_blank" class="product-link">
        <h1 class="name">{{ product.name }}</h1>
      </a>

      <h3 class="description">{{ product.description }}</h3>

      <!-- 产品链接 -->
      <div class="flex justify-center mt-6">
        <a :href="product.github" class="mx-2" target="_blank">
          <img
            src="/images/friends/github.png"
            alt=""
            class="w-7 rounded-full opacity-75" />
        </a>
        <a
          :href="product.store"
          class="mx-2 dark:hidden"
          target="_blank"
          v-if="product.store">
          <img
            src="/images/friends/mac_app_store.svg"
            alt=""
            class="w-28 opacity-75" />
        </a>
        <a :href="product.store" class="mx-2 hidden dark:flex" target="_blank">
          <img
            src="/images/friends/mac_app_store_dark.svg"
            alt=""
            class="w-28 opacity-75" />
        </a>
      </div>
    </div>
  </article>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';

  const props = defineProps({
    product: {
      type: Object,
      required: true,
    },
  });

  const homepage = computed(() => {
    return props.product.homepage
      ? props.product.homepage
      : '/en/' + props.product.name.toLowerCase().replace(' ', '-');
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

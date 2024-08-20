<template>
  <div class="flex flex-row gap-4">
    <Product
      :product="{
        avatar: '/images/cisum/logo.min.png',
        name: 'Cisum',
        description: 'A music player',
        store: 'https://apps.apple.com/cn/app/cisum/id6466401036',
        github: 'https://github.com/yueyinet/cisum',
      }" />
    <Product
      :product="{
        avatar: '/images/kuaiyizhi/logo.min.png',
        name: 'JuiceNote',
        store:
          'https://apps.apple.com/cn/app/%E5%BF%AB%E6%98%93%E7%9F%A5/id6457892799',
        description: 'A note application',
        github: 'https://github.com/CofficLab/Kuaiyizhi_Editor',
      }" />
    <Product
      :product="{
        avatar: '/images/travelmode/logo.min.png',
        name: 'TravelMode',
        store: 'https://apps.apple.com/cn/app/travelmode/id6474899051',
        description: 'Control your network',
        github: 'https://github.com/CofficLab/TravelMode',
      }" />
    <Product
      :product="{
        avatar: '/images/juiceEditor/logo.min.png',
        name: 'JuiceEditor',
        description: 'Simple and powerful editor',
        github: 'https://github.com/CofficLab/JuiceEditor',
        homepage: 'https://cofficlab.github.io/JuiceEditor',
      }" />
  </div>
</template>

<script setup>
  import Product from './Product.vue';
</script>

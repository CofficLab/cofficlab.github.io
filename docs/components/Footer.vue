<template>
<div class="mt-48 -mb-32">
    <hr>
    <div class="flex flex-col justify-center">
        <a href="/" class="flex items-center self-center w-auto text-lg font-bold smart-link">
            <div class="flex flex-row justify-center w-full">
                <img src="/images/coffic/logo4.min.png" alt="CofficLab" class="h-8 fill-current my-auto flex">
                <span class="w-full ml-2 text-xl font-bold my-auto">CofficLab</span>
            </div>
        </a>

        <div class="flex flex-col w-full text-xs">
            <div class="flex flex-row justify-center w-full gap-2 p-0">
                <ul class="flex flex-col gap-2">
                    <li>
                        <a href="https://www.kuaiyc.com" class="smart-link" target="_blank">快易查</a>
                    </li>
                    <li>
                        <a href="https://www.kuaiyc.com/products" class="smart-link" target="_blank">API 产品</a>
                    </li>
                    <li>
                        <a href="https://www.kuaiyizhi.cn/ideas" class="smart-link" target="_blank">系列教程</a>
                    </li>
                    <li>
                        <a href="https://cofficlab.github.io" class="smart-link" target="_blank">Coffic 系列软件</a>
                    </li>
                </ul>
                <ul class="flex flex-col gap-2">
                    <li>
                        <a href="https://github.com/cofficlab" class="smart-link" target="_blank">GitHub</a>
                    </li>
                    <li>
                        <a href="https://github.com/CofficLab/JuiceEditor" class="smart-link"
                            target="_blank">JuiceEditor</a>
                    </li>
                    <li>
                        <a href="https://apps.apple.com/cn/app/%E5%BF%AB%E6%98%93%E7%9F%A5/id6457892799"
                            class="smart-link" target="_blank">快易知笔记 APP</a>
                    </li>
                    <li>
                        <a href="https://apps.apple.com/cn/app/cisum/id6466401036" class="smart-link"
                            target="_blank">Cisum
                            音乐与有声书播放器</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
ul {
    list-style: none;
}
.smart-link {
  @apply px-4 py-2 rounded-xl ring-white/50 no-underline
  hover:ring-1 hover:shadow-2xl hover:bg-green-600/10 hover:backdrop-blur
  transform duration-100;
}

.smart-card {
  @apply p-4 rounded-2xl text-white
  dark:text-gray-500
  bg-gradient-to-br
  from-gray-900/30 via-gray-800/40 to-gray-800/50
  dark:from-gray-900/30 dark:via-gray-900/40 dark:to-gray-800/50
  backdrop-blur-3xl 
  border-r border-gray-50/30 dark:border-gray-600/50 dark:border
  hover:ring-0 hover:shadow-2xl
  transform duration-100;
}

.smart-button {
  @apply p-4 rounded-2xl text-white/80
  dark:text-gray-500
  bg-gradient-to-br
  from-gray-900/30 via-gray-800/40 to-gray-800/50
  dark:from-gray-900/30 dark:via-gray-900/40 dark:to-gray-800/50
  backdrop-blur-3xl 
  border-r border-gray-50/30 dark:border-gray-600/50 dark:border
  hover:ring-0 hover:shadow-2xl
  transform duration-100;
}

</style>
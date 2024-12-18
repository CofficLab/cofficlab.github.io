    <template>
        <div class="py-16 px-8 text-center w-full">
            <h2 class="text-4xl mb-4">{{ translations[lang].gitManagement }}</h2>
            <p class="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
                {{ translations[lang].description }}
            </p>

            <div class="flex flex-row justify-center gap-8 mx-auto w-full">
                <div class="feature-card">
                    <div class="mb-4">
                        <div class="text-4xl">📈</div>
                    </div>
                    <h3 class="text-lg font-medium">{{ translations[lang].visualHistory }}</h3>
                </div>

                <div class="feature-card">
                    <div class="mb-4">
                        <div class="text-4xl">🌳</div>
                    </div>
                    <h3 class="text-lg font-medium">{{ translations[lang].branchManagement }}</h3>
                </div>

                <div class="feature-card">
                    <div class="mb-4">
                        <div class="text-4xl">📁</div>
                    </div>
                    <h3 class="text-lg font-medium">{{ translations[lang].fileTracking }}</h3>
                </div>

                <div class="feature-card">
                    <div class="mb-4">
                        <div class="text-4xl">🔄</div>
                    </div>
                    <h3 class="text-lg font-medium">{{ translations[lang].conflictResolution }}</h3>
                </div>
            </div>
        </div>
    </template>

<style lang="postcss" scoped>
.feature-card {
    @apply bg-white/10 backdrop-blur-lg rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-1 shadow-lg;
}
</style>

<script setup>

const translations = {
    en: {
        gitManagement: 'Git Management',
        description: 'Intuitive Git interface for effortless project management',
        visualHistory: 'Visual History',
        branchManagement: 'Branch Management',
        fileTracking: 'File Tracking',
        conflictResolution: 'Conflict Resolution'
    },
    zh: {
        gitManagement: 'Git 项目管理',
        description: '提供直观的 Git 操作界面，轻松管理您的项目',
        visualHistory: '可视化历史',
        branchManagement: '分支管理',
        fileTracking: '文件追踪',
        conflictResolution: '冲突解决'
    }
}

defineProps({
    lang: {
        type: String,
        default: 'zh',
        validator: (value) => ['en', 'zh'].includes(value)
    }
})
</script>

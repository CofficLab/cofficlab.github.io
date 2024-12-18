<template>
    <div class="flex bg-white/90 dark:bg-gray-800 relative rounded-2xl overflow-hidden max-w-5xl self-center mx-auto shadow-xl"
        :class="height">
        <!-- 窗口控制按钮和工具栏 -->
        <div
            class="absolute top-0 left-0 right-0 flex items-center justify-between h-12 px-4 bg-gray-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
            <!-- 左侧控制按钮和基础工具栏 -->
            <div class="flex items-center">
                <div class="flex items-center space-x-2">
                    <div class="w-3 h-3 rounded-full bg-red-500"></div>
                    <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div class="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <!-- 工具栏 -->
                <div class="flex items-center ml-6 space-x-4">
                    <div class="flex items-center space-x-2">
                        <select
                            class="text-sm bg-transparent border-none focus:outline-none text-gray-700 dark:text-gray-200">
                            <option>GitOK</option>
                        </select>
                    </div>
                    <div class="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-200">
                        <button class="px-2 py-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded">Git</button>
                        <button class="px-2 py-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded">Banner</button>
                        <button class="px-2 py-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded">Icon</button>
                    </div>
                </div>
            </div>

            <!-- 右侧工具栏 -->
            <div class="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-200">
                <!-- 分支选择器 -->
                <select
                    class="px-2 py-1 bg-transparent border border-gray-300 dark:border-gray-600 rounded text-sm focus:outline-none">
                    <option>dev</option>
                    <option>main</option>
                    <option>feature/new-ui</option>
                </select>

                <!-- 工具按钮组 -->
                <div class="flex items-center space-x-1">
                    <button class="p-1.5 hover:bg-gray-200 dark:hover:bg-gray-600 rounded">
                        <RiTerminalBoxLine class="w-4 h-4" />
                    </button>
                    <button class="p-1.5 hover:bg-gray-200 dark:hover:bg-gray-600 rounded">
                        <RiGitBranchLine class="w-4 h-4" />
                    </button>
                    <button class="p-1.5 hover:bg-gray-200 dark:hover:bg-gray-600 rounded">
                        <RiDatabase2Line class="w-4 h-4" />
                    </button>
                    <button class="p-1.5 hover:bg-gray-200 dark:hover:bg-gray-600 rounded">
                        <RiPlayCircleLine class="w-4 h-4" />
                    </button>
                    <button class="p-1.5 hover:bg-gray-200 dark:hover:bg-gray-600 rounded">
                        <RiSettings4Line class="w-4 h-4" />
                    </button>
                    <button class="p-1.5 hover:bg-gray-200 dark:hover:bg-gray-600 rounded">
                        <RiRefreshLine class="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>

        <!-- 主要内容区域 -->
        <div class="flex h-full pt-12 w-full">
            <!-- 左侧项目列表 -->
            <div class="w-64 bg-gray-50 dark:bg-gray-700/90 border-r border-gray-200 dark:border-gray-600">
                <div class="p-2">
                    <div v-for="project in projects" :key="project"
                        class="px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg text-left">
                        {{ project }}
                    </div>
                </div>
            </div>

            <!-- 中间提交列表 -->
            <div class="w-96 border-r border-gray-200 dark:border-gray-600">
                <div class="flex-1 overflow-y-auto custom-scrollbar h-full">
                    <div class="p-2">
                        <div v-for="commit in commits" :key="commit.id"
                            class="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                            <div class="flex items-center space-x-2 text-left">
                                <div class="text-yellow-500">{{ commit.icon }}</div>
                                <div class="text-sm text-gray-900 dark:text-gray-100">{{ commit.title }}</div>
                            </div>
                            <div class="ml-6 text-xs text-gray-500 text-left">{{ commit.type }}</div>
                        </div>
                    </div>
                </div>
                <!-- 底部提交框 -->
                <div
                    class="absolute bottom-0 left-64 right-0 p-4 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
                    <div class="flex items-center space-x-2">
                        <div class="flex-1">
                            <input type="text" placeholder="Minor adjustments"
                                class="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg text-sm text-left" />
                        </div>
                        <button class="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm">
                            Commit and Push
                        </button>
                    </div>
                </div>
            </div>

            <!-- 右侧代码预览 -->
            <div class="flex-1 bg-gray-900  text-gray-300 p-4 font-mono text-sm overflow-y-auto custom-scrollbar">
                <div class="space-y-1">
                    <div class="flex">
                        <span class="w-8 text-gray-500 text-right pr-2">12</span>
                        <span class="text-left">Text("Select a table")</span>
                    </div>
                    <div class="flex">
                        <span class="w-8 text-gray-500 text-right pr-2">13</span>
                        <span class="text-left">.foregroundColor(.secondary)</span>
                    </div>
                    <div class="flex">
                        <span class="w-8 text-gray-500 text-right pr-2">14</span>
                        <span class="text-left">}</span>
                    </div>
                    <div class="flex">
                        <span class="w-8 text-gray-500 text-right pr-2">15</span>
                        <span class="text-left"></span>
                    </div>
                    <div class="flex">
                        <span class="w-8 text-gray-500 text-right pr-2">16</span>
                        <span class="text-left">Spacer()</span>
                    </div>
                    <div class="flex">
                        <span class="w-8 text-gray-500 text-right pr-2">17</span>
                        <span class="text-left">}</span>
                    </div>
                    <div class="flex">
                        <span class="w-8 text-gray-500 text-right pr-2">18</span>
                        <span class="text-left">.frame(maxWidth: .infinity)</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {
    RiTerminalBoxLine,
    RiGitBranchLine,
    RiDatabase2Line,
    RiPlayCircleLine,
    RiSettings4Line,
    RiRefreshLine
} from '@remixicon/vue'

defineProps({
    height: {
        type: String,
        default: 'h-[40rem]'
    }
})

const projects = [
    'enterprise_four_factors',
    'GitOK',
    'Cisum',
    'JuiceEditor',
    'Kuaiyizhi',
    'cofficlab.github.io',
    'nookery.github.io',
    'JuiceEditor-Demo',
    'MagicKit',
    'Friday',
    'JuiceNote',
    'crm',
    'reg.juhe.cn',
    'Monday'
]

const commits = [
    { id: 1, icon: '🔍', title: 'Chore: Minor adjustments', type: 'UI: Update user interface elements' },
    { id: 2, icon: '🎨', title: 'UI: Update user interface elements', type: 'UI: Update user interface elements' },
    { id: 3, icon: '✨', title: 'Improve: Enhance existing functionality', type: 'Feature: Enhance for db' },
    { id: 4, icon: '🐛', title: 'Bugfix: Fix a bug', type: 'Fix: Database connection issue' },
    { id: 5, icon: '🔍', title: 'Chore: Minor adjustments', type: 'Chore: Code cleanup' },
    { id: 6, icon: '🎨', title: 'UI: Update user interface elements', type: 'UI: Update user interface elements' },
    { id: 7, icon: '✨', title: 'Feature: API Runner', type: 'Feature: New API functionality' },
    { id: 8, icon: '🐛', title: 'Bugfix: Fix a bug', type: 'Fix: Performance issue' }
]
</script>

<style scoped>
.custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: rgba(156, 163, 175, 0.5) transparent;
}

.custom-scrollbar::-webkit-scrollbar {
    width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: rgba(156, 163, 175, 0.5);
    border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background-color: rgba(156, 163, 175, 0.7);
}

:dark .custom-scrollbar {
    scrollbar-color: rgba(156, 163, 175, 0.3) transparent;
}

:dark .custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: rgba(156, 163, 175, 0.3);
}

:dark .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background-color: rgba(156, 163, 175, 0.5);
}
</style>

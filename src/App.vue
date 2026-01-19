<script setup>
import { ref } from 'vue';
import DashboardView from './views/SalesDashboard.vue';
import ProductGuideView from './views/ProductGuide.vue';
import ArchitectureBuilderView from './views/ArchitectureBuilder.vue';
// Lucide 아이콘 컴포넌트로 import (npm install lucide-vue-next 필요)
import { LayoutDashboard, BookOpen, Network } from 'lucide-vue-next';

const activeTab = ref('dashboard');

const getTabClass = (tab) => {
    return activeTab.value === tab 
        ? 'bg-blue-700 text-white shadow-inner' 
        : 'text-slate-300 hover:bg-slate-800 hover:text-white';
};
</script>

<template>
    <div class="flex flex-col h-screen bg-slate-100 text-slate-900">
        <!-- Header -->
        <header class="bg-slate-900 text-white shadow-lg z-50 shrink-0 no-print">
            <div class="max-w-screen-2xl mx-auto px-6 h-16 flex items-center justify-between">
                <div class="flex items-center gap-3">
                    <div class="h-8 bg-[#0070c0] rounded flex items-center justify-center font-bold shadow-blue-500/50 shadow-md px-3 italic tracking-tighter text-lg border border-blue-400">
                        SCP
                    </div>
                    <h1 class="text-xl font-bold tracking-wide">SCP N/W <span class="font-light opacity-80 text-sm ml-1">AI 영업지원 시스템</span></h1>
                </div>
                <nav class="flex space-x-2">
                    <button @click="activeTab = 'dashboard'" :class="getTabClass('dashboard')" class="px-5 py-2 rounded-md text-sm font-medium transition duration-200 flex items-center gap-2">
                        <LayoutDashboard class="w-4 h-4" /> 영업 제안 대시보드
                    </button>
                    <button @click="activeTab = 'guide'" :class="getTabClass('guide')" class="px-5 py-2 rounded-md text-sm font-medium transition duration-200 flex items-center gap-2">
                        <BookOpen class="w-4 h-4" /> 상품 가이드북
                    </button>
                    <button @click="activeTab = 'builder'" :class="getTabClass('builder')" class="px-5 py-2 rounded-md text-sm font-medium transition duration-200 flex items-center gap-2">
                        <Network class="w-4 h-4" /> 아키텍처 생성기
                    </button>
                </nav>
            </div>
        </header>

        <!-- Main Content -->
        <main class="flex-1 overflow-hidden">
            <keep-alive>
                <component :is="activeTab === 'dashboard' ? DashboardView : activeTab === 'guide' ? ProductGuideView : ArchitectureBuilderView" />
            </keep-alive>
        </main>
    </div>
</template>

<style>
/* Global Styles or Import Tailwind here */
</style>
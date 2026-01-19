<script setup>
import { ref } from 'vue';
import { PRODUCT_DETAILS } from '@/data/constants';
import { List, Info, Target, Users, Check, ExternalLink } from 'lucide-vue-next';

// Local State
const selectedGuideProduct = ref(PRODUCT_DETAILS[0]);
const guideDetailLevel = ref('medium');

// 아이콘 렌더링을 위한 헬퍼 (동적 컴포넌트 사용 권장)
// 실제 구현 시 constants.js의 string iconName을 lucide-vue-next 컴포넌트로 매핑하는 로직 필요
</script>

<template>
    <div class="max-w-screen-2xl mx-auto px-6 py-6 h-full flex flex-col lg:flex-row gap-6 overflow-hidden">
        <!-- Sidebar -->
        <div class="w-full lg:w-1/4 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
            <div class="p-5 border-b bg-slate-50"><h3 class="font-bold flex gap-2"><List class="w-4 h-4"/> 상품 목록</h3></div>
            <div class="flex-1 overflow-y-auto p-2">
                <button v-for="prod in PRODUCT_DETAILS" :key="prod.id" @click="selectedGuideProduct = prod"
                    :class="selectedGuideProduct.id === prod.id ? 'bg-blue-50 border-blue-500 text-blue-700' : 'bg-white hover:bg-slate-50'"
                    class="w-full text-left p-3 rounded-lg border-l-4 mb-2 transition-all flex items-center gap-3">
                    <span class="font-medium text-sm">{{ prod.name }}</span>
                </button>
            </div>
        </div>

        <!-- Detail View -->
        <div class="w-full lg:w-3/4 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full">
            <div class="p-8 overflow-y-auto h-full min-h-0">
                <!-- Header & Level Toggle -->
                <div class="flex justify-between items-center mb-6 border-b pb-6">
                    <h2 class="text-3xl font-bold">{{ selectedGuideProduct.name }}</h2>
                    <div class="flex bg-slate-100 p-1 rounded-lg">
                        <button v-for="lvl in ['short', 'medium', 'long']" :key="lvl" @click="guideDetailLevel = lvl"
                            :class="guideDetailLevel === lvl ? 'bg-white text-blue-700 shadow-sm' : 'text-slate-500'"
                            class="px-3 py-1.5 text-xs font-medium rounded-md capitalize">
                            {{ lvl }}
                        </button>
                    </div>
                </div>

                <!-- Google Docs Iframe -->
                <div v-if="selectedGuideProduct.externalDocUrl && guideDetailLevel !== 'short'" class="flex-1 h-full min-h-[600px] bg-slate-50 rounded-xl overflow-hidden border">
                    <div class="bg-yellow-50 p-3 text-sm text-yellow-800 border-b flex items-center gap-2">
                        <Info class="w-4 h-4" /> Google Docs 연동 중
                        <a :href="selectedGuideProduct.externalDocUrl" target="_blank" class="ml-auto flex items-center gap-1 underline"><ExternalLink class="w-3 h-3"/> 원본 보기</a>
                    </div>
                    <iframe :src="selectedGuideProduct.externalDocUrl" class="w-full h-full border-0"></iframe>
                </div>

                <!-- Standard Content -->
                <div v-else>
                    <!-- Diagram & Descriptions ... -->
                    <div class="bg-slate-50 p-6 rounded-xl border mb-6">
                        <p class="whitespace-pre-line">{{ selectedGuideProduct.modes[guideDetailLevel].description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
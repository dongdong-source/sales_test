<script setup>
import { ref } from 'vue';
import { useCustomer } from '@/composables/useCustomer';
import { WIDGET_TYPES, PRODUCT_LIST, NEED_OPTIONS } from '@/data/constants';
import { 
    UserCog, Sparkles, Bot, Loader2, ArrowLeft, Printer, Check, ChevronDown, BarChart2, FileText, BrainCircuit 
} from 'lucide-vue-next';

// 상태 및 훅 가져오기
const { 
    customerInfo, toggleNeed, toggleInterestedProduct, 
    getIndustryLabel, getKnowledgeLevelLabel, getNeedsLabel, getInterestedProductsLabel 
} = useCustomer();

const isReportMode = ref(false);
const reportTab = ref('basic');
const activeWidgets = ref([]);
const aiLoading = ref(false);
const summaryLoading = ref(false);
const aiSummary = ref("");
const aiConclusion = ref("");
const summarySources = ref([]);

// AI Prompt Modal 관련 상태
const aiPromptModal = ref({ isOpen: false, userRequest: '' });
const chartModal = ref({ isOpen: false, id: '', title: '', type: 'bar', data: [], description: '' });

// ... (기존 generateDashboard, getWidgetContent 등 로직 동일하게 구현) ...
// 편의상 핵심 로직 일부만 표시합니다. 실제 파일에는 script 내 모든 함수 포함 필요

const generateDashboard = () => {
    let widgets = [WIDGET_TYPES.TECH_SPECS];
    if (customerInfo.needs.includes('cost')) { widgets.push(WIDGET_TYPES.ROI_ANALYSIS, WIDGET_TYPES.COST_DETAIL); }
    if (customerInfo.needs.includes('performance')) { widgets.push(WIDGET_TYPES.PERFORMANCE, WIDGET_TYPES.GLOBAL_REACH); }
    // ... 나머지 조건들 ...
    activeWidgets.value = [];
    setTimeout(() => { activeWidgets.value = widgets; }, 600);
};

const generateDashboardAndSummary = () => {
    generateDashboard();
    // callAiSummaryAPI(); // API 호출 로직은 별도 유틸 파일로 분리하거나 여기에 포함
};

const getWidgetContent = (id) => {
    // ... 기존 getWidgetContent 로직 ...
    return "내용..."; // Placeholder
};

const handlePrint = () => window.print();
</script>

<template>
    <div class="max-w-screen-2xl mx-auto px-6 py-6 h-full flex flex-col lg:flex-row gap-6">
        <!-- Report Mode -->
        <div v-if="isReportMode" class="w-full h-full overflow-y-auto bg-white p-10 rounded-xl shadow-2xl max-w-4xl mx-auto animate-fade-in-up flex flex-col">
            <!-- ... Report UI (기존 코드와 동일 구조) ... -->
            <button @click="isReportMode = false">돌아가기</button>
            <!-- ... -->
        </div>

        <!-- Dashboard Mode (Input & Widgets) -->
        <template v-else>
            <!-- Left Panel: Input -->
            <div class="w-full lg:w-1/3 xl:w-1/4 h-full flex flex-col gap-6">
                <div class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full">
                    <div class="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
                        <h3 class="font-semibold text-slate-800 flex items-center gap-2">
                            <UserCog class="w-5 h-5 text-slate-500" /> 고객 정보 및 니즈
                        </h3>
                    </div>
                    <div class="p-6 space-y-6 flex-1 overflow-y-auto min-h-0">
                        <!-- Inputs -->
                        <input type="text" v-model="customerInfo.name" class="w-full border p-2 rounded" placeholder="고객사명" />
                        <!-- ... Industry, Level, Needs, Products Selectors ... -->
                    </div>
                    <div class="p-6 border-t border-slate-100 bg-slate-50">
                        <button @click="generateDashboardAndSummary" class="w-full py-4 rounded-xl bg-blue-600 text-white font-bold">
                            AI 맞춤형 분석 및 자료 생성
                        </button>
                    </div>
                </div>
            </div>

            <!-- Right Panel: Result -->
            <div class="w-full lg:w-2/3 xl:w-3/4 h-full flex flex-col gap-6 overflow-hidden">
                <!-- Header & Widgets Grid ... -->
                <div v-if="activeWidgets.length > 0" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                    <div v-for="widget in activeWidgets" :key="widget.id" class="bg-white p-6 rounded-xl border">
                        <h3 class="font-bold">{{ widget.title }}</h3>
                        <p class="text-sm text-slate-500">{{ getWidgetContent(widget.id) }}</p>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>
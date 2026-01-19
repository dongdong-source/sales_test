<script setup>
import { ref, onMounted } from 'vue';
import { useCustomer } from '@/composables/useCustomer';
import { PRODUCT_LIST, ARCH_REFERENCES } from '@/data/constants';
import { Layers, PackagePlus, Download, Trash2, Save, FolderOpen } from 'lucide-vue-next';
import html2canvas from 'html2canvas';

// Local State for Builder
const { customerInfo } = useCustomer();
const nodes = ref([]);
const links = ref([]);
const canvasRef = ref(null);
const draggingNode = ref(null);
const dragOffset = { x: 0, y: 0 };

// ... (addNode, removeNode, drag logic, save/load logic copied from original file) ...

const downloadImage = () => {
    if(!canvasRef.value) return;
    html2canvas(canvasRef.value).then(canvas => {
        const link = document.createElement('a');
        link.download = 'architecture.png';
        link.href = canvas.toDataURL();
        link.click();
    });
};
</script>

<template>
    <div class="max-w-screen-2xl mx-auto px-6 py-6 h-full flex flex-col lg:flex-row gap-6 overflow-hidden">
        <!-- Top Toolbar -->
        <div class="flex flex-col h-full w-full gap-6">
            <div class="bg-white rounded-xl shadow-sm border border-slate-200 p-5 shrink-0 flex justify-between items-center">
                <h3 class="font-semibold flex items-center gap-2"><Layers class="w-5 h-5"/> 아키텍처 빌더</h3>
                <div class="flex gap-2">
                    <button class="btn"><Save class="w-4 h-4"/> 저장</button>
                    <button class="btn"><FolderOpen class="w-4 h-4"/> 불러오기</button>
                </div>
            </div>
            
            <!-- Workspace -->
            <div class="flex flex-col lg:flex-row gap-6 flex-1 min-h-0">
                <!-- Sidebar -->
                <div class="w-full lg:w-1/4 h-full bg-white rounded-xl shadow-sm border p-5 flex flex-col">
                    <h3 class="font-semibold mb-4">구성 요소</h3>
                    <!-- Product List to Add Nodes -->
                    <div class="grid grid-cols-2 gap-2">
                        <button v-for="prod in PRODUCT_LIST" :key="prod.id" class="p-2 border rounded hover:bg-slate-50">
                            {{ prod.name }}
                        </button>
                    </div>
                </div>

                <!-- Canvas -->
                <div ref="canvasRef" class="w-full lg:w-3/4 h-full bg-slate-100 rounded-xl shadow-inner border relative overflow-hidden bg-grid-pattern">
                    <div class="absolute top-4 right-4">
                        <button @click="downloadImage" class="bg-white border p-2 rounded shadow"><Download class="w-4 h-4"/></button>
                    </div>
                    <!-- Nodes & Links Rendering -->
                    <div v-for="node in nodes" :key="node.id" class="absolute p-2 bg-white border rounded shadow" :style="{ left: node.x + 'px', top: node.y + 'px' }">
                        {{ node.label }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
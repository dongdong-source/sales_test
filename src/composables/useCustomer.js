// 위젯 타입 정의
export const WIDGET_TYPES = {
    ROI_ANALYSIS: { id: 'roi', title: 'ROI 비용 절감 분석', iconName: 'trending-up', color: 'bg-green-100 text-green-700' },
    PERFORMANCE: { id: 'perf', title: '성능 벤치마크 결과', iconName: 'zap', color: 'bg-yellow-100 text-yellow-700' },
    SECURITY: { id: 'sec', title: '보안 규정 및 컴플라이언스', iconName: 'shield', color: 'bg-red-100 text-red-700' },
    TECH_SPECS: { id: 'spec', title: '기술 사양서 (Spec Sheet)', iconName: 'settings', color: 'bg-blue-100 text-blue-700' },
    CASE_STUDY: { id: 'case', title: '동종 업계 도입 성공 사례', iconName: 'check-circle', color: 'bg-purple-100 text-purple-700' },
    GLOBAL_REACH: { id: 'global', title: '글로벌 커버리지 & 백본', iconName: 'globe', color: 'bg-indigo-100 text-indigo-700' },
    HYBRID_CONN: { id: 'hybrid', title: '하이브리드 클라우드 연결', iconName: 'cable', color: 'bg-orange-100 text-orange-700' },
    SLA_LEVEL: { id: 'sla', title: '가용성 보장 (SLA)', iconName: 'award', color: 'bg-teal-100 text-teal-700' },
    COST_DETAIL: { id: 'cost_detail', title: '트래픽 종량제 비용 분석', iconName: 'calculator', color: 'bg-pink-100 text-pink-700' }
};

// 상품 목록 (아이콘 매핑용)
export const PRODUCT_LIST = [
    { id: 'cloud_wan', name: 'Cloud WAN', type: 'web', icon: 'cloud' },
    { id: 'cloud_lan_dc', name: 'Cloud LAN DC', type: 'switch', icon: 'server' },
    { id: 'cloud_lan_campus', name: 'Cloud LAN Campus', type: 'switch', icon: 'building' },
    { id: 'virtual_circuit', name: 'Virtual Circuit', type: 'web', icon: 'zap' },
    { id: 'sase', name: 'SASE', type: 'security', icon: 'shield-check' },
    { id: 'cloud_fabric', name: 'Cloud Last Mile', type: 'switch', icon: 'network' }
];

// 고객 니즈 옵션
export const NEED_OPTIONS = [
    { id: 'cost', label: '비용 절감' },
    { id: 'performance', label: '고성능' },
    { id: 'security', label: '보안 강화' },
    { id: 'scalability', label: '확장성' }
];

// 아키텍처 템플릿 레퍼런스
export const ARCH_REFERENCES = [
    { 
        id: 1, name: '금융권 망분리 표준 모델', tags: ['High Security', 'VPN'], 
        nodes: ['Intranet(Web)', 'Firewall', 'DMZ Switch', 'Server'],
        products: ['sase', 'cloud_wan']
    },
    { 
        id: 2, name: '대용량 트래픽 처리 웹 서비스', tags: ['HA', 'L4 Switch'], 
        nodes: ['User(Web)', 'L4 Switch', 'Web Cluster', 'DB Cluster'],
        products: ['cloud_lan_dc', 'virtual_circuit']
    },
    { 
        id: 3, name: '스마트 팩토리 IoT 네트워크', tags: ['IoT', 'Low Latency'], 
        nodes: ['Sensors(Web)', 'Edge Gateway', 'Cloud Server', 'Monitoring DB'],
        products: ['cloud_fabric', 'cloud_lan_campus']
    },
    { 
        id: 4, name: '글로벌 1:1 가상회선 (Cloud Virtual Circuit)', tags: ['Global Mesh', '1:1 Dedicated'], 
        nodes: [
            { label: '출발지 Access Location', type: 'switch', x: 100, y: 200 },
            { label: 'Service Access Switch L', type: 'switch', x: 250, y: 200 },
            { label: '고객사 On-Prem L', type: 'server', x: 100, y: 400 },
            { label: 'Cloud Virtual Circuit (Mesh)', type: 'web', x: 450, y: 200, icon: 'zap' },
            { label: 'Service Access Switch R', type: 'switch', x: 650, y: 200 },
            { label: '목적지 Access Location', type: 'switch', x: 800, y: 200 },
            { label: '고객사 On-Prem R', type: 'server', x: 800, y: 400 }
        ],
        links: [
            { source: 2, target: 0 }, { source: 0, target: 1 }, { source: 1, target: 3 }, 
            { source: 3, target: 4 }, { source: 4, target: 5 }, { source: 5, target: 6 }
        ],
        products: ['virtual_circuit']
    },
    { 
        id: 5, name: '하이브리드 데이터센터 (Hybrid DC)', tags: ['Hybrid', 'Direct Connect'], 
        nodes: ['On-Premise DC(Server)', 'Direct Connect(Switch)', 'Transit Gateway', 'VPC Resources(Server)'],
        products: ['cloud_lan_dc', 'cloud_fabric']
    },
    { 
        id: 6, name: 'SASE 기반 원격 근무 (Zero Trust)', tags: ['Security', 'Remote Work'], 
        nodes: [
            { label: 'Remote User', type: 'web', x: 100, y: 100 },
            { label: 'Customer Branch', type: 'switch', x: 100, y: 400 },
            { label: 'SASE Gateway (POP)', type: 'security', x: 400, y: 250 },
            { label: 'Internet / SaaS', type: 'web', x: 700, y: 100 },
            { label: 'Corp Data Center', type: 'server', x: 700, y: 400 }
        ],
        links: [
            { source: 0, target: 2 }, { source: 1, target: 2 }, { source: 2, target: 3 }, { source: 2, target: 4 }
        ],
        products: ['sase', 'virtual_circuit']
    }
];

// 상품 상세 정보
export const PRODUCT_DETAILS = [
    {
        id: 'cloud_wan',
        name: 'Cloud WAN',
        icon: 'cloud',
        summary: 'SCP 리전과 글로벌 권역간 네트워크 연결',
        diagramUrl: '/assets/SCP_WAN.png', // 이미지 경로는 프로젝트 설정에 맞게 수정 필요
        modes: {
            short: {
                description: "글로벌 네트워크 서비스. 트래픽 사용량 기반 과금.",
                features: ["글로벌 백본 구성", "트래픽 종량제", "Transit Gateway"]
            },
            medium: {
                description: "Cloud WAN은 삼성SDS의 글로벌 백본망을 활용하여 SCP 리전과 전 세계 고객 거점을 빠르고 안전하게 연결합니다.",
                features: ["신속한 백본 네트워크 구성", "다양한 Edge 연결", "비용 효율화"],
                sellingPoints: ["글로벌 13개 거점의 고속 백본망 활용", "셀프 서비스 기반의 즉시 개통", "이중화 및 경로 최적화"],
                targets: ["글로벌 지사 데이터 전송 기업"],
                locations: "국내 3, 해외 10"
            },
            long: {
                description: "Cloud WAN은 Samsung Cloud Platform의 글로벌 리전과 고객의 온프레미스 거점들을 하나의 거대한 가상 네트워크로 통합하는 서비스입니다. 기존 MPLS 대비 비용 절감.",
                features: ["신속한 구축(수 분 내)", "다양한 연결성", "유연한 라우팅", "서비스 수준별 관리"],
                sellingPoints: ["업계 최다 수준의 해저 케이블", "트래픽 종량제", "단일 콘솔 관리"],
                targets: ["글로벌 데이터 전송 기업", "해외 공장 연결 제조 기업"],
                locations: "국내 3개(수원, 상암, 춘천), 해외 10개(뉴저지, 런던 등)"
            }
        }
    },
    { 
        id: 'cloud_lan_campus', 
        name: 'Cloud LAN-Campus', 
        icon: 'building', 
        summary: '사업장 내 사용자 인증 기반 네트워크', 
        externalDocUrl: 'https://docs.google.com/document/d/1kqQkuBFr3Z7N658yratDZIqSxsY4kYkFUevaLDv3A0I/preview',
        modes: {
            short: { description: "위치 무관 사내 네트워크. 통합 인증 제공.", features: ["IP Mobility", "유무선 통합 인증", "논리적 망분리"] },
            medium: {}, // External Doc
            long: {} // External Doc
        }
    },
    // ... 나머지 상품 데이터 (Cloud LAN DC, Virtual Circuit, SASE, Cloud Fabric 등)도 동일한 구조로 추가
    {
        id: 'sase', name: 'SASE', icon: 'shield-check', summary: '네트워크와 보안 통합 플랫폼',
        modes: {
            short: { description: "네트워크+보안 클라우드 통합 제공.", features: ["Zero Trust", "통합 보안 정책"] },
            medium: { description: "네트워크(SD-WAN)와 보안(SSE)을 단일 플랫폼에서 제공.", features: ["WAN Edge", "SSE 보안", "통합 관리"], sellingPoints: ["VPN 대체", "글로벌 POP"], targets: ["원격 근무 기업"], locations: "상암, 싱가포르 등" },
            long: { description: "디지털 전환과 원격 근무를 위한 최적의 보안 솔루션.", features: ["최적 경로", "ZTNA", "CASB", "DEM"], sellingPoints: ["보안 컴플라이언스", "비용 절감"], targets: ["원격/재택 근무 기업"], locations: "글로벌 주요 거점" }
        }
    }
    // (지면상 일부 생략, 실제 구현 시 모든 데이터 포함)
];
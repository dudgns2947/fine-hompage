// 회사 정보 (사업자등록증 기반)
export const companyInfo = {
  name: "FINE",
  fullName: "Dynamic FINE",
  description: "신뢰할 수 있는 보험 파트너",
  address: "대전광역시 유성구 계룡로 114, BYC빌딩 9층 905-6호 굿리치",
  phone: "010.6787.0501",
  email: "ij0143@goodrich.co.kr",
  established: "2019",
  businessNumber: "120-86-60433",
  representative: "서울특별시 중구 세종대로 44, 제휴센터",
  businessType: "서울특별시 중구 세종대로/보험설계/자동차관리",
  businessItem: "보험업 및 중개업/금융/투자자문",
  lat: 36.352704,
  lng: 127.342974,
};

export const navigationMenu = [
  {
    id: "about",
    title: "본부소개",
    href: "/about",
    subMenu: [
      { title: "아이덴티티", href: "/about/identity" },
      { title: "히스토리", href: "/about/history" },
      { title: "영상", href: "/about/video" },
      { title: "조직도", href: "/about/organization" },
    ],
  },
  {
    id: "promotion",
    title: "홍보센터",
    href: "/promotion",
    subMenu: [
      { title: "교육부", href: "/promotion/education" },
      { title: "디비사업부", href: "/promotion/db" },
    ],
  },
  {
    id: "careers",
    title: "인재채용",
    href: "/careers",
    subMenu: [],
  },
  {
    id: "support",
    title: "고객지원",
    href: "/support",
    subMenu: [
      { title: "지점찾기", href: "/support/locations" },
      { title: "제휴 및 문의", href: "/support/inquiry" },
      { title: "오시는길", href: "/support/directions" },
      { title: "보험상담접수", href: "/support/consultation" },
    ],
  },
];

export const heroContent = {
  title: "신뢰할 수 있는 보험 파트너",
  subtitle: "FINE과 함께하는 안전한 미래",
  description: "고객 중심의 맞춤형 보험 서비스로 여러분의 소중한 일상을 보호합니다.",
  ctaText: "상담 신청하기",
};

export const services = [
  {
    id: 1,
    title: "생명보험",
    description: "가족의 미래를 위한 든든한 보장",
    icon: "🛡️",
    features: ["종신보험", "정기보험", "연금보험"],
  },
  {
    id: 2,
    title: "손해보험",
    description: "예상치 못한 사고로부터 보호",
    icon: "🚗",
    features: ["자동차보험", "화재보험", "여행자보험"],
  },
  {
    id: 3,
    title: "건강보험",
    description: "건강한 삶을 위한 의료비 보장",
    icon: "💊",
    features: ["실손의료보험", "암보험", "치아보험"],
  },
  {
    id: 4,
    title: "연금보험",
    description: "안정적인 노후 준비",
    icon: "💰",
    features: ["개인연금", "퇴직연금", "국민연금"],
  },
];

export const jobPostings = [
  {
    id: 1,
    title: "보험설계사 모집",
    department: "영업부",
    location: "서울 전지역",
    type: "정규직",
    experience: "신입/경력",
    deadline: "2024-03-31",
    description: "고객과의 신뢰 관계를 바탕으로 최적의 보험 상품을 제안하는 업무",
  },
  {
    id: 2,
    title: "디지털 마케팅 전문가",
    department: "마케팅부",
    location: "서울 강남구",
    type: "정규직",
    experience: "경력 3년 이상",
    deadline: "2024-04-15",
    description: "온라인 마케팅 전략 수립 및 디지털 캠페인 기획/실행",
  },
  {
    id: 3,
    title: "IT 개발자",
    department: "IT부",
    location: "서울 강남구",
    type: "정규직",
    experience: "경력 2년 이상",
    deadline: "2024-04-30",
    description: "보험 시스템 개발 및 유지보수, 신기술 도입 및 적용",
  },
];

export const branches = [
  // 대전
  {
    id: 1,
    name: "FINE 직할지점",
    address: "대전광역시 유성구 계룡로 114, BYC빌딩 9층 905-6호 굿리치",
    phone: "010-6787-0501",
    manager: "최미라 본부장",
    region: "대전",
    lat: 36.352704,
    lng: 127.342974,
  },
  {
    id: 2,
    name: "가넷 지점",
    address: "대전광역시 유성구 계룡로 114, BYC빌딩 9층 905-6호 굿리치",
    phone: "042-382-0138",
    manager: "김상란 지점장",
    region: "대전",
    lat: 36.352704,
    lng: 127.342974,
  },
  {
    id: 3,
    name: "라임 지점",
    address: "대전광역시 유성구 계룡로 114, BYC빌딩 9층 905-6호 굿리치",
    phone: "042-382-0138",
    manager: "박효진 지점장",
    region: "대전",
    lat: 36.352704,
    lng: 127.342974,
  },
  {
    id: 4,
    name: "마블지점",
    address: "대전광역시 유성구 계룡로 114, BYC빌딩 9층 905-6호 굿리치",
    phone: "042-382-0138",
    manager: "박재형 지점장",
    region: "대전",
    lat: 36.352704,
    lng: 127.342974,
  },
  {
    id: 5,
    name: "블루지점",
    address: "대전광역시 유성구 계룡로 114, BYC빌딩 9층 905-6호 굿리치",
    phone: "042-382-0138",
    manager: "이래철 지점장",
    region: "대전",
    lat: 36.352704,
    lng: 127.342974,
  },
  {
    id: 6,
    name: "K제니스지점",
    address: "대전광역시 유성구 계룡로 114, BYC빌딩 9층 905-6호 굿리치",
    phone: "042-382-0138",
    manager: "황동현 지점장",
    region: "대전",
    lat: 36.352704,
    lng: 127.342974,
  },
  // 서울경기
  {
    id: 7,
    name: "K위드지점",
    address: "평택시 도시지원1길 29, 금호STV더라이브 834호",
    phone: "010-8897-7191",
    manager: "김상훈 지점장",
    region: "서울경기",
    lat: 37.026398,
    lng: 127.014699,
  },
  // 전주
  {
    id: 8,
    name: "LEADERS 지점",
    address: "전주시 완산구 홍산로 246, 6층 굿리치",
    phone: "063-903-3005",
    manager: "김민수 지점장",
    region: "전주",
    lat: 35.815555,
    lng: 127.106452,
  },
  {
    id: 9,
    name: "신라지점",
    address: "전주시 완산구 홍산로 246, 6층 굿리치",
    phone: "063-903-3005",
    manager: "김유신 지점장",
    region: "전주",
    lat: 35.815555,
    lng: 127.106452,
  },
  // 대구
  {
    id: 10,
    name: "챔스지점",
    address: "대구 수성구 동대구로 49길 2, 4층",
    phone: "053-219-0068",
    manager: "한혜규 지점장",
    region: "대구",
    lat: 35.852510,
    lng: 128.624613,
  },
  {
    id: 11,
    name: "머스트사업단직할 지점",
    address: "대구 수성구 동대구로 49길 2, 4층",
    phone: "053-219-0068",
    manager: "남대영 단장",
    region: "대구",
    lat: 35.852510,
    lng: 128.624613,
  },
  {
    id: 12,
    name: "W지점",
    address: "대구 수성구 동대구로 49길 2, 2층",
    phone: "010-4215-0926",
    manager: "이왕재 지점장",
    region: "대구",
    lat: 35.852510,
    lng: 128.624613,
  },
  {
    id: 13,
    name: "위너스 지점",
    address: "대구 수성구 동대구로 49길 2, 4층",
    phone: "053-219-0068",
    manager: "한동희 지점장",
    region: "대구",
    lat: 35.852510,
    lng: 128.624613,
  },
  {
    id: 14,
    name: "예일지점",
    address: "대구 수성구 동대구로 49길 2, 2층",
    phone: "010-3032-1578",
    manager: "예정민 지점장",
    region: "대구",
    lat: 35.852510,
    lng: 128.624613,
  },
];

export const companyHistory = [
  {
    year: "2020",
    title: "DYNAMIC FINE (시작)",
    description: [
      "FINE 사업단 창단",
      "신라지점 위촉",
      "그릿지점 위촉", 
      "레드지점 위촉",
      "블루지점 위촉",
      "가정경제 R&D 위촉",
      "FINE 교육부 창단",
      "OJT 교육 6회진행",
      "하반기 워크샵 2회(울진/대부도)"
    ],
  },
  {
    year: "2021",
    title: "Special ONE FINE (정착)",
    description: [
      "OJT 심화반/테마교육(종신/재무/IRIS)",
      "찾아가는 JOB 세미나(보건대/목원대)",
      "상반기 워크샵(무주)",
      "송년의밤/마니또",
      "PRP 굿리치 금융전문가"
    ],
  },
  {
    year: "2022",
    title: "START-UP FINE (변화)",
    description: [
      "NEW 시스템 장착(새로운 운영방식 도입)",
      "NGP 굿리치 금융전문가"
    ],
  },
  {
    year: "2023",
    title: "Growth FINE (성장)",
    description: [
      "머스트지점 승격",
      "라임지점 위촉",
      "백두대간 사업단 위촉",
      "챔스지점 승격",
      "PRP굿리치 금융전문가(7~11기 총 5기수 입과)"
    ],
  },
  {
    year: "2024",
    title: "Dynamic FINE (역동)",
    description: [
      "FINE본부 승격(2023.12. 100명 목표)",
      "역동적인 Start UP(2024.12 200명 목표)",
      "I.O본부 승격 24.06",
      "(본부배출 2명/사업단배출 2명/지점장 16명)",
      "GFE 굿리치금융전문가(1~7기 매 기수 입과목표)",
      "생산성 10억, 인당 생산성 100만",
      "RSR 100명 • RCAC 30명 • MDRT 30명",
      "마케팅임원 10명"
    ],
  },
  {
    year: "2025",
    title: "Develop & Harmony (도약)",
    description: [
      "GFE 굿리치금융캠퍼스(매 기수 입과)",
      "2025 재적(200명)",
      "OJT 교육(년 6회 실시)",
      "레벨 UP 교육(6회 실시)",
      "생산성 15억, 인당 생산성 100만",
      "위드지점 위촉",
      "리더스지점 위촉",
      "제니스지점 위촉"
    ],
  },
];

export const testimonials = [
  {
    id: 1,
    name: "김고객",
    age: 35,
    content: "친절하고 전문적인 상담으로 최적의 보험을 찾을 수 있었습니다.",
    rating: 5,
  },
  {
    id: 2,
    name: "이고객",
    age: 42,
    content: "사고 처리가 신속하고 정확해서 매우 만족합니다.",
    rating: 5,
  },
  {
    id: 3,
    name: "박고객",
    age: 28,
    content: "온라인으로도 쉽게 가입할 수 있어서 편리했습니다.",
    rating: 4,
  },
];

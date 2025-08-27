// 더미 데이터
export const companyInfo = {
  name: "FINE",
  description: "신뢰할 수 있는 보험 파트너",
  address: "서울특별시 강남구 테헤란로 123",
  phone: "02-1234-5678",
  email: "info@dynamicfine.co.kr",
  established: "2025",
};

export const navigationMenu = [
  {
    id: "about",
    title: "본부소개",
    href: "/about",
    subMenu: [
      { title: "히스토리", href: "/about/history" },
      { title: "영상", href: "/about/video" },
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
  {
    id: 1,
    name: "FINE 강남지점",
    address: "서울특별시 강남구 테헤란로 123",
    phone: "02-1234-5678",
    manager: "김지점장",
    lat: 37.5665,
    lng: 126.9780,
  },
  {
    id: 2,
    name: "FINE 홍대지점",
    address: "서울특별시 마포구 홍익로 456",
    phone: "02-2345-6789",
    manager: "이지점장",
    lat: 37.5563,
    lng: 126.9239,
  },
  {
    id: 3,
    name: "FINE 부산지점",
    address: "부산광역시 해운대구 해운대로 789",
    phone: "051-3456-7890",
    manager: "박지점장",
    lat: 35.1595,
    lng: 129.1600,
  },
];

export const companyHistory = [
  {
    year: "2010",
    title: "FINE 설립",
    description: "보험 중개업 시작",
  },
  {
    year: "2015",
    title: "전국 지점 확장",
    description: "서울, 부산, 대구 지점 개설",
  },
  {
    year: "2018",
    title: "디지털 전환",
    description: "온라인 보험 플랫폼 구축",
  },
  {
    year: "2020",
    title: "AI 상담 서비스 도입",
    description: "24시간 AI 챗봇 상담 서비스 시작",
  },
  {
    year: "2023",
    title: "고객만족도 1위 달성",
    description: "업계 최고 수준의 고객만족도 달성",
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

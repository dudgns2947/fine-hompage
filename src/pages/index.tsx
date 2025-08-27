import React from 'react';
import Layout from '@/components/Layout/Layout';
import SEO from '@/components/common/SEO';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import StatsSection from '@/components/sections/StatsSection';

export default function Home() {
  return (
    <Layout>
      <SEO 
        title="FINE - 신뢰할 수 있는 보험 파트너"
        description="고객 중심의 맞춤형 보험 서비스로 여러분의 소중한 일상을 보호합니다. 생명보험, 손해보험, 건강보험, 연금보험 전문 상담."
        keywords="보험, 생명보험, 손해보험, 건강보험, 연금보험, FINE, 보험상담, 보험설계"
      />
      <HeroSection />
      <ServicesSection />
      <StatsSection />
    </Layout>
  );
}

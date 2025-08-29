import React from 'react';
import styled from 'styled-components';
import Layout from '@/components/Layout/Layout';
import SEO from '@/components/common/SEO';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import StatsSection from '@/components/sections/StatsSection';

const OpeningVideoSection = styled.section`
  width: 100%;
  height: 70vh;
  min-height: 400px;
  position: relative;
  overflow: hidden;
  background: #000;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    
    /* 컨트롤 제거 */
    &::-webkit-media-controls {
      display: none !important;
    }
    
    &::-webkit-media-controls-panel {
      display: none !important;
    }
    
    &::-webkit-media-controls-play-button {
      display: none !important;
    }
    
    &::-webkit-media-controls-start-playback-button {
      display: none !important;
    }
    
    &::-webkit-media-controls-fullscreen-button {
      display: none !important;
    }
    
    &::-webkit-media-controls-timeline {
      display: none !important;
    }
    
    &::-webkit-media-controls-current-time-display {
      display: none !important;
    }
    
    &::-webkit-media-controls-time-remaining-display {
      display: none !important;
    }
    
    &::-webkit-media-controls-mute-button {
      display: none !important;
    }
    
    &::-webkit-media-controls-volume-slider {
      display: none !important;
    }
  }

  /* Firefox 컨트롤 제거 */
  video::-moz-media-controls {
    display: none !important;
  }

  @media (max-width: 768px) {
    height: 50vh;
    min-height: 300px;
  }
`;

export default function Home() {
  return (
    <Layout>
      <SEO 
        title="FINE - 신뢰할 수 있는 보험 파트너"
        description="고객 중심의 맞춤형 보험 서비스로 여러분의 소중한 일상을 보호합니다. 생명보험, 손해보험, 건강보험, 연금보험 전문 상담."
        keywords="보험, 생명보험, 손해보험, 건강보험, 연금보험, FINE, 보험상담, 보험설계"
      />
      <HeroSection />
      <OpeningVideoSection>
        <video
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
        >
          <source src="/video/opening-1.mp4" type="video/mp4" />
          브라우저가 비디오를 지원하지 않습니다.
        </video>
      </OpeningVideoSection>
      <ServicesSection />
      <StatsSection />
    </Layout>
  );
}

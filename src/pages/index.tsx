import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
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

const SloganSection = styled.section`
  padding: 5rem 0;
  background: linear-gradient(135deg, 
    rgba(255, 107, 53, 0.1) 0%, 
    rgba(44, 62, 80, 0.05) 100%
  );
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="1" fill="%23FF6B35" opacity="0.1"/></svg>') repeat;
    z-index: 0;
  }

  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const SloganContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const SloganText = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.2;
  margin: 0;
  position: relative;
  
  span {
    color: var(--primary-color);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--primary-color);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    &::after {
      width: 60px;
      height: 3px;
      bottom: -8px;
    }
  }
`;

const SloganSubtext = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: var(--text-secondary);
  margin-top: 2rem;
  line-height: 1.6;
  font-style: italic;
  opacity: 0.8;
`;

export default function Home() {
  return (
    <Layout>
      <SEO 
        title="FINE - 신뢰할 수 있는 보험 파트너"
        description="고객 중심의 맞춤형 보험 서비스로 여러분의 소중한 일상을 보호합니다. 생명보험, 손해보험, 건강보험, 연금보험 전문 상담."
        keywords="보험, 생명보험, 손해보험, 건강보험, 연금보험, FINE, 보험상담, 보험설계"
      />
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
      
      <SloganSection>
        <SloganContent>
          <SloganText
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span>최고</span>를 향한 도전 <br/><span>사람</span>을 향한 가치
          </SloganText>
          <SloganSubtext
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Dynamic FINE이 추구하는 핵심 가치
          </SloganSubtext>
        </SloganContent>
      </SloganSection>
      
      <HeroSection />
      <ImageContainer2>
        <Image src="/image/history.jpg" alt="FINE" />
      </ImageContainer2>
      <ServicesSection />
      <ImageContainer>
        <Image src="/image/history-2.png" alt="FINE" />
      </ImageContainer>
      <StatsSection />
    </Layout>
  );
}

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const ImageContainer2 = styled.div`
  width: 60%;
  height: 60%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }

  
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
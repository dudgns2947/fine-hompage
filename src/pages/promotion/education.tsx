import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout/Layout';
import SEO from '@/components/common/SEO';

const EducationContainer = styled.div`
  min-height: 100vh;
`;

const HeroSection = styled.section`
  padding: 6rem 0;
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
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 107, 53, 0.1) 0%, transparent 70%);
    animation: float 6s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
  }
`;

const HeroContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;

  h1 {
    font-size: clamp(3rem, 6vw, 5rem);
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 2rem;
    
    .highlight {
      color: var(--primary-color);
      position: relative;
      
      &::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 0;
        width: 100%;
        height: 4px;
        background: linear-gradient(90deg, var(--primary-color), transparent);
        animation: expandWidth 2s ease-out forwards;
      }
    }
  }

  @keyframes expandWidth {
    0% { width: 0%; }
    100% { width: 100%; }
  }

  p {
    font-size: clamp(1.2rem, 2.5vw, 1.6rem);
    color: var(--text-secondary);
    line-height: 1.8;
    margin-bottom: 3rem;
    font-weight: 500;
  }
`;

const IntroSection = styled.section`
  padding: 6rem 0;
  background: white;
  position: relative;
`;

const IntroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 3rem;
  position: relative;

  .highlight {
    color: var(--primary-color);
  }

  .emoji {
    font-size: 1.2em;
    margin-right: 1rem;
    display: inline-block;
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-10px); }
    60% { transform: translateY(-5px); }
  }
`;

const IntroCard = styled(motion.div)`
  background: linear-gradient(135deg, 
    rgba(255, 107, 53, 0.05) 0%, 
    rgba(44, 62, 80, 0.02) 100%
  );
  border-radius: 20px;
  padding: 4rem 3rem;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  border: 1px solid rgba(255, 107, 53, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent);
    animation: shimmer 3s infinite;
  }

  @keyframes shimmer {
    0% { left: -100%; }
    100% { left: 100%; }
  }

  h3 {
    font-size: clamp(1.8rem, 3vw, 2.5rem);
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 2rem;
    position: relative;
  }

  p {
    font-size: clamp(1.1rem, 2vw, 1.4rem);
    color: var(--text-secondary);
    line-height: 1.8;
    font-weight: 500;
  }
`;

const ServicesSection = styled.section`
  padding: 6rem 0;
  background: var(--bg-secondary);
  position: relative;
`;

const ServicesContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 3rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ServiceCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 15px 35px rgba(0,0,0,0.1);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 6px;
    background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
  }

  &::after {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(255, 107, 53, 0.05) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::after {
    opacity: 1;
  }

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 25px 50px rgba(0,0,0,0.15);
  }

  .icon {
    font-size: 4.5rem;
    margin-bottom: 1.5rem;
    display: block;
    text-align: center;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }

  h3 {
    font-size: clamp(1.5rem, 2.5vw, 1.8rem);
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 2rem;
    text-align: center;
    position: relative;
  }

  .features {
    list-style: none;
    margin-bottom: 2rem;

    li {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      margin-bottom: 1.2rem;
      font-size: 1.1rem;
      color: var(--text-secondary);
      line-height: 1.6;
      position: relative;

      &::before {
        content: '🔸';
        flex-shrink: 0;
        margin-top: 0.1rem;
      }

      &:hover {
        color: var(--text-primary);
        transform: translateX(5px);
        transition: all 0.3s ease;
      }
    }
  }
`;

const LocationSection = styled.section`
  padding: 2rem 0;
  background: linear-gradient(135deg, 
    rgba(255, 107, 53, 0.02) 0%, 
    rgba(44, 62, 80, 0.01) 100%
  );
  margin-top: 2rem;
  border-radius: 15px;
  position: relative;
`;

const LocationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

const LocationCard = styled(motion.div)`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
  border: 2px solid transparent;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--primary-color);
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(255, 107, 53, 0.15);
  }

  .location-emoji {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    display: block;
  }

  .location-name {
    font-weight: 600;
    color: var(--primary-color);
    font-size: 1.1rem;
  }
`;

const VisionSection = styled.section`
  padding: 6rem 0;
  background: linear-gradient(135deg, 
    var(--primary-color) 0%, 
    rgba(255, 107, 53, 0.8) 100%
  );
  text-align: center;
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.1"/><circle cx="50" cy="10" r="1" fill="white" opacity="0.1"/><circle cx="20" cy="80" r="1" fill="white" opacity="0.1"/><circle cx="90" cy="30" r="1" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>') repeat;
    animation: float 20s linear infinite;
  }

  @keyframes float {
    0% { transform: translateX(0); }
    100% { transform: translateX(-100px); }
  }
`;

const VisionContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;

  h2 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 700;
    margin-bottom: 2rem;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  }

  p {
    font-size: clamp(1.2rem, 2.5vw, 1.6rem);
    line-height: 1.8;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
    font-weight: 500;
  }

  .vision-emoji {
    font-size: 4rem;
    margin-bottom: 2rem;
    display: block;
    animation: glow 2s ease-in-out infinite alternate;
  }

  @keyframes glow {
    0% { text-shadow: 0 0 20px rgba(255,255,255,0.5); }
    100% { text-shadow: 0 0 30px rgba(255,255,255,0.8), 0 0 40px rgba(255,255,255,0.6); }
  }
`;

const educationServices = [
  {
    emoji: '🎯',
    title: '신인/경력 설계사 위촉지원',
    features: [
      '35개 보험사 업무 제휴 위촉 지원',
      '본부 내 OJT 교육을 통한 영업지원',
      '전문 멘토링 시스템 운영',
      '개별 맞춤형 교육 프로그램 제공'
    ]
  },
  {
    emoji: '🏢',
    title: '지점 신규 OPEN 및 정착 지원',
    features: [
      '전국 각지역 사무실 OPEN 지원',
      '신규 조직 정착 컨설팅 제공',
      '지역별 맞춤 전략 수립',
      '지속적인 사후관리 서비스'
    ],
    locations: ['대전/세종', '대구', '전주', '평택']
  },
  {
    emoji: '📚',
    title: '본부 테마교육 및 영업 노하우 공유',
    features: [
      '분기별 테마교육을 통한 Level Up',
      '마케팅임원 노하우 전수',
      '우수사례 상시 공유 시스템',
      '최신 트렌드 반영 교육 커리큘럼'
    ]
  }
];

const Education: React.FC = () => {
  return (
    <Layout>
      <SEO 
        title="교육부 - FINE"
        description="FINE 교육부는 신인/경력 위촉부터 정착까지 전 과정을 함께하는 핵심 파트너 조직입니다. 체계적인 교육과 지원을 통해 성공적인 보험 전문가로 성장하세요."
        keywords="FINE, 교육부, 위촉지원, 지점개설, 테마교육, 영업노하우, 보험교육"
      />
      
      <EducationContainer>
        <HeroSection>
          <HeroContent>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <span className="highlight">교육부</span> 소개
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            >
              신인/경력 위촉부터 정착까지, 당신의 성공 여정을 함께합니다
            </motion.p>
          </HeroContent>
        </HeroSection>

        <IntroSection>
          <IntroContent>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <SectionTitle>
                <span className="emoji">🤝</span>
                <span className="highlight">FINE 교육부</span>는
              </SectionTitle>
              
              <IntroCard
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <h3>핵심 파트너 조직</h3>
                <p>
                  신인/경력 위촉부터 정착까지<br/>
                  전 과정을 함께하는 핵심 파트너 조직입니다.
                </p>
              </IntroCard>
            </motion.div>
          </IntroContent>
        </IntroSection>

        <ServicesSection>
          <ServicesContent>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <SectionTitle>
                <span className="emoji">⭐</span>
                핵심 <span className="highlight">서비스</span>
              </SectionTitle>
            </motion.div>

            <ServicesGrid>
              {educationServices.map((service, index) => (
                <ServiceCard
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="icon">{service.emoji}</span>
                  <h3>{service.title}</h3>
                  
                  <ul className="features">
                    {service.features.map((feature, idx) => (
                      <motion.li 
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * idx }}
                        viewport={{ once: true }}
                      >
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {service.locations && (
                    <LocationSection>
                      <h4 style={{ 
                        textAlign: 'center', 
                        color: 'var(--primary-color)', 
                        fontSize: '1.2rem',
                        fontWeight: '600',
                        marginBottom: '1rem'
                      }}>
                        🗺️ 현재 운영 지역
                      </h4>
                      <LocationGrid>
                        {service.locations.map((location, locIdx) => (
                          <LocationCard
                            key={locIdx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 * locIdx }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <span className="location-emoji">📍</span>
                            <div className="location-name">{location}</div>
                          </LocationCard>
                        ))}
                      </LocationGrid>
                    </LocationSection>
                  )}
                </ServiceCard>
              ))}
            </ServicesGrid>
          </ServicesContent>
        </ServicesSection>

        <VisionSection>
          <VisionContent>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <span className="vision-emoji">🚀</span>
              <motion.h2
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                함께 성장하는 미래
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                FINE 교육부와 함께라면<br/>
                성공적인 보험 전문가로의 여정이<br/>
                더욱 확실하고 빨라집니다
              </motion.p>
            </motion.div>
          </VisionContent>
        </VisionSection>
      </EducationContainer>
    </Layout>
  );
};

export default Education;
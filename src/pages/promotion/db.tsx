import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout/Layout';
import SEO from '@/components/common/SEO';
import Button from '@/components/common/Button';
import Icon from '@/components/common/Icon';

const DbContainer = styled.div`
  min-height: 100vh;
`;

const HeroSection = styled.section`
  padding: 4rem 0;
  background: linear-gradient(135deg, 
    rgba(255, 107, 53, 0.1) 0%, 
    rgba(44, 62, 80, 0.05) 100%
  );
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;

  h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 1rem;

    .highlight {
      color: var(--primary-color);
    }
  }

  p {
    font-size: clamp(1rem, 2vw, 1.25rem);
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 2rem;
  }
`;

const ServicesSection = styled.section`
  padding: 5rem 0;
  background: white;
`;

const ServicesContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  h2 {
    text-align: center;
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 3rem;

    .highlight {
      color: var(--primary-color);
    }
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled(motion.div)`
  background: var(--bg-secondary);
  border-radius: var(--border-radius);
  padding: 2.5rem;
  box-shadow: var(--shadow);
  transition: var(--transition);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-hover);
  }

  .icon {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    display: block;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 1rem;
  }

  .description {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .features {
    list-style: none;
    margin-bottom: 2rem;

    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 0.75rem;
      font-size: 0.95rem;
      color: var(--text-secondary);

      &::before {
        content: '✓';
        color: var(--primary-color);
        font-weight: bold;
        font-size: 1.1rem;
      }
    }
  }
`;

const ProcessSection = styled.section`
  padding: 5rem 0;
  background: var(--bg-secondary);
`;

const ProcessContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  h2 {
    text-align: center;
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 3rem;

    .highlight {
      color: var(--primary-color);
    }
  }
`;

const ProcessFlow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  position: relative;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--primary-color);
    z-index: 0;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const ProcessStep = styled(motion.div)`
  background: white;
  border-radius: var(--border-radius);
  padding: 2rem;
  box-shadow: var(--shadow);
  text-align: center;
  position: relative;
  z-index: 1;

  .step-number {
    width: 50px;
    height: 50px;
    background: var(--primary-color);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    font-weight: 700;
    margin: 0 auto 1rem;
  }

  .icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    display: block;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 0.75rem;
  }

  p {
    color: var(--text-secondary);
    line-height: 1.6;
    font-size: 0.95rem;
  }
`;

const StatsSection = styled.section`
  padding: 5rem 0;
  background: white;
`;

const StatsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;

  h2 {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 3rem;

    .highlight {
      color: var(--primary-color);
    }
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StatCard = styled(motion.div)`
  background: var(--bg-secondary);
  border-radius: var(--border-radius);
  padding: 2rem;
  text-align: center;

  .number {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--primary-color);
    margin-bottom: 0.5rem;
  }

  .label {
    font-size: 1rem;
    color: var(--text-secondary);
    font-weight: 500;
  }
`;

const services = [
  {
    icon: <Icon type="chartline" />,
    title: '고객 데이터 분석',
    description: '빅데이터 기술을 활용한 고객 행동 패턴 분석 및 맞춤형 상품 추천 서비스입니다.',
    features: [
      '고객 세분화 분석',
      '구매 패턴 예측',
      '맞춤형 상품 추천',
      '리스크 평가 모델',
      '실시간 데이터 처리'
    ]
  },
  {
    icon: '🤖',
    title: '마케팅 자동화',
    description: 'AI 기반 마케팅 자동화 시스템으로 효율적인 고객 관리와 영업 지원을 제공합니다.',
    features: [
      '자동 이메일 캠페인',
      'SMS 마케팅',
      '개인화된 콘텐츠',
      '캠페인 성과 분석',
      '리드 스코어링'
    ]
  },
  {
    icon: <Icon type="briefcase" />,
    title: 'CRM 시스템 운영',
    description: '통합 고객 관계 관리 시스템으로 고객 정보를 체계적으로 관리하고 서비스 품질을 향상시킵니다.',
    features: [
      '고객 정보 통합 관리',
      '상담 이력 추적',
      '계약 관리',
      '고객 만족도 조사',
      '모바일 앱 연동'
    ]
  },
  {
    icon: <Icon type="chartline" />,
    title: '영업 성과 분석',
    description: '데이터 기반의 영업 성과 분석을 통해 효과적인 영업 전략 수립을 지원합니다.',
    features: [
      '실시간 성과 대시보드',
      '목표 대비 달성률',
      '지역별 성과 분석',
      '상품별 판매 현황',
      '예측 분석 리포트'
    ]
  }
];

const processSteps = [
  {
    number: 1,
    icon: <Icon type="file" />,
    title: '데이터 수집',
    description: '다양한 채널에서 고객 데이터를 수집하고 정제합니다.'
  },
  {
    number: 2,
    icon: <Icon type="search" />,
    title: '데이터 분석',
    description: 'AI와 머신러닝을 활용하여 데이터를 분석합니다.'
  },
  {
    number: 3,
    icon: <Icon type="bullseye" />,
    title: '전략 수립',
    description: '분석 결과를 바탕으로 맞춤형 마케팅 전략을 수립합니다.'
  },
  {
    number: 4,
    icon: '🚀',
    title: '실행 및 최적화',
    description: '전략을 실행하고 지속적으로 성과를 모니터링합니다.'
  }
];

const stats = [
  { number: '500K+', label: '관리 고객 수' },
  { number: '95%', label: '데이터 정확도' },
  { number: '40%', label: '영업 효율 증대' },
  { number: '24/7', label: '시스템 운영' }
];

const Db: React.FC = () => {
  return (
    <Layout>
      <SEO 
        title="디비사업부 - FINE"
        description="FINE 디비사업부에서 제공하는 데이터 기반 마케팅과 고객 관리 시스템을 소개합니다. AI와 빅데이터를 활용한 효율적인 영업 지원 서비스입니다."
        keywords="FINE, 디비사업부, 데이터분석, CRM, 마케팅자동화, 빅데이터, AI"
      />
      
      <DbContainer>
        <HeroSection>
          <HeroContent>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="highlight">디비사업부</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              데이터 기반의 마케팅과 고객 관리 시스템으로 
              효율적인 영업 활동을 지원합니다.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button size="large">
                서비스 문의하기
              </Button>
            </motion.div>
          </HeroContent>
        </HeroSection>

        <ServicesSection>
          <ServicesContent>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="highlight">디비 서비스</span>
            </motion.h2>
            
            <ServicesGrid>
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="icon">{service.icon}</span>
                  <h3>{service.title}</h3>
                  <p className="description">{service.description}</p>
                  
                  <ul className="features">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  
                                <Button variant="outline" $fullWidth>
                자세히 보기
              </Button>
                </ServiceCard>
              ))}
            </ServicesGrid>
          </ServicesContent>
        </ServicesSection>

        <ProcessSection>
          <ProcessContent>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="highlight">업무 프로세스</span>
            </motion.h2>
            
            <ProcessFlow>
              {processSteps.map((step, index) => (
                <ProcessStep
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="step-number">{step.number}</div>
                  <span className="icon">{step.icon}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </ProcessStep>
              ))}
            </ProcessFlow>
          </ProcessContent>
        </ProcessSection>

        <StatsSection>
          <StatsContent>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="highlight">성과 지표</span>
            </motion.h2>
            
            <StatsGrid>
              {stats.map((stat, index) => (
                <StatCard
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="number">{stat.number}</div>
                  <div className="label">{stat.label}</div>
                </StatCard>
              ))}
            </StatsGrid>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button size="large">
                <Icon type="chartline" style={{ marginRight: '0.5rem' }} />데모 요청하기
              </Button>
            </motion.div>
          </StatsContent>
        </StatsSection>
      </DbContainer>
    </Layout>
  );
};

export default Db;

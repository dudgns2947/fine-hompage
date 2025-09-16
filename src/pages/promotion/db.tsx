import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout/Layout';
import SEO from '@/components/common/SEO';

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


const dbIntroduction = [
  {
    icon: '🔄',
    title: <>고객 발굴부터 검증·배정까지<br/>원스톱 지원</>,
    description: <>DB사업부는 고객 발굴부터 검증·배정까지<br/>전 과정을 책임지는 본부의 핵심 지원 조직입니다.</>,
    highlight: true
  },
  {
    icon: '🛡️',
    title: <>투명한 배정, 검증된 품질,<br/>신속한 연결</>,
    description: <>체계적인 검증 프로세스를 통해<br/>고품질의 DB만을 신속하게 제공합니다.</>,
    highlight: false
  },
  {
    icon: '🚀',
    title: <>RP 맞춤형 DB배정으로<br/>상담·계약 성공률 극대화</>,
    description: <>각 RP의 전문분야와 지역에 맞춘<br/>최적화된 DB 배정으로 성과를 극대화합니다.</>,
    highlight: false
  }
];

const dbManagementSystem = [
  {
    number: 1,
    icon: '🕸️',
    title: 'DB 수집 네트워크',
    description: <>온라인/제휴 채널 다각화를 통한<br/>안정적인 DB 확보</>
  },
  {
    number: 2,
    icon: '🔍',
    title: '다단계 검증',
    description: <>유효성·중복 최소화를 위한<br/>철저한 검증 시스템</>
  },
  {
    number: 3,
    icon: '🎯',
    title: '맞춤형 배정',
    description: <>지역·전문분야별 최적화된<br/>DB 매칭 시스템</>
  },
  {
    number: 4,
    icon: '📊',
    title: '성과 모니터링',
    description: <>활용률·계약률 지속 개선을 위한<br/>데이터 분석</>
  }
];

const dbNetwork = [
  {
    icon: '🔗',
    title: '제휴 1~5 업체',
    description: <>다양한 고객 DB<br/>안정 공급</>,
    detail: <>검증된 다수의 제휴업체를 통한<br/>안정적 DB 공급망 확보</>
  },
  {
    icon: '⚡',
    title: <>본부 자체<br/>제휴 업체</>,
    description: <>독자적 DB 생산<br/>시스템 확보</>,
    detail: <>FINE본부만의 독점적인<br/>DB 생산 라인 구축</>
  },
  {
    icon: '🏛️',
    title: <>굿리치 본사 &<br/>DB손해보험 업무협약</>,
    description: <>신규 DB 채널<br/>확대 예정</>,
    detail: <>→ 멀티 제휴·자체 생산+본사 연계<br/>3중 DB 네트워크</>
  }
];

const benefits = [
  {
    icon: '💎',
    title: '안정적 DB 공급',
    description: <>영업 초기<br/>정착률 상승</>,
    detail: <>DB 걱정 없는 영업 환경 조성으로<br/>RP들의 빠른 정착 지원</>
  },
  {
    icon: '🎯',
    title: '효율적 관리',
    description: <>상담 대비<br/>계약률 향상</>,
    detail: <>체계적인 DB 관리로<br/>양질의 상담 기회 제공</>
  },
  {
    icon: '📈',
    title: '데이터 기반',
    description: <>성과 중심<br/>영업 가능</>,
    detail: <>검증된 데이터를 바탕으로 한<br/>전략적 영업 활동 지원</>
  }
];

const Db: React.FC = () => {
  return (
    <Layout>
      <SEO 
        title="DB사업부 - FINE"
        description="FINE DB사업부는 체계적인 DB 관리 시스템과 독보적인 제휴 네트워크로 안정적이고 효율적인 영업 환경을 제공합니다. 고객 발굴부터 검증·배정까지 원스톱 지원으로 성과를 극대화하세요."
        keywords="FINE, DB사업부, DB관리, 영업지원, 제휴네트워크, 고객발굴, DB배정, 영업효율화"
      />
      
      <DbContainer>
        <HeroSection>
          <HeroContent>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="highlight">DB사업부</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              FINE DB사업부는  체계적인 DB 관리 시스템과<br/>
              독보적인 제휴 네트워크로 안정적이고 효율적인 영업 환경을 제공합니다.
            </motion.p>
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
              <span className="highlight">DB사업부 소개</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              style={{ 
                textAlign: 'center', 
                fontSize: '1.2rem', 
                color: 'var(--text-secondary)', 
                marginBottom: '3rem',
                fontWeight: '500'
              }}
            >
              DB사업부는 고객 발굴부터 검증·배정까지<br/>
              전 과정을 책임지는 본부의 핵심 지원 조직입니다.
            </motion.p>
            
            <ServicesGrid>
              {dbIntroduction.map((item, index) => (
                <ServiceCard
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  style={{
                    background: item.highlight ? 'linear-gradient(135deg, rgba(255, 107, 53, 0.05) 0%, rgba(44, 62, 80, 0.02) 100%)' : 'var(--bg-secondary)'
                  }}
                >
                  <span className="icon" style={{ fontSize: '4rem' }}>{item.icon}</span>
                  <h3>{item.title}</h3>
                  <p className="description">{item.description}</p>
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
              <span className="highlight">체계적·효율적 DB 관리 시스템</span>
            </motion.h2>
            
            <ProcessFlow>
              {dbManagementSystem.map((step, index) => (
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
              <span className="highlight">차별화된 DB 네트워크</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              style={{ 
                fontSize: '1.2rem', 
                color: 'var(--text-secondary)', 
                marginBottom: '1rem',
                fontWeight: '600'
              }}
            >
              FINE본부만의 독보적인 제휴 네트워크
            </motion.p>
            
            <ServicesGrid style={{ marginBottom: '3rem' }}>
              {dbNetwork.map((network, index) => (
                <ServiceCard
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="icon" style={{ fontSize: '4rem' }}>{network.icon}</span>
                  <h3>{network.title}</h3>
                  <p className="description">{network.description}</p>
                  <p style={{ 
                    color: 'var(--text-secondary)', 
                    fontSize: '0.95rem', 
                    lineHeight: '1.6',
                    marginTop: '1rem'
                  }}>
                    {network.detail}
                  </p>
                </ServiceCard>
              ))}
            </ServicesGrid>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              style={{
                background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(44, 62, 80, 0.05) 100%)',
                padding: '2rem',
                borderRadius: 'var(--border-radius)',
                textAlign: 'center'
              }}
            >
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '600', 
                color: 'var(--text-primary)',
                marginBottom: '1rem'
              }}>
                멀티 제휴 + 자체 생산 + 본사 연계
              </h3>
              <p style={{ 
                fontSize: '1.25rem', 
                fontWeight: '700', 
                color: 'var(--primary-color)'
              }}>
                3중 DB 네트워크 구축 완료
              </p>
            </motion.div>
          </StatsContent>
        </StatsSection>

        {/* 혜택 & 성과 섹션 */}
        <ServicesSection>
          <ServicesContent>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="highlight">혜택 & 성과</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              style={{ 
                textAlign: 'center', 
                fontSize: '1.2rem', 
                color: 'var(--text-secondary)', 
                marginBottom: '3rem',
                fontWeight: '600'
              }}
            >
              DB 걱정 없는 영업, 성과만 만드는 영업
            </motion.p>
            
            <ServicesGrid>
              {benefits.map((benefit, index) => (
                <ServiceCard
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="icon" style={{ fontSize: '4rem' }}>{benefit.icon}</span>
                  <h3>{benefit.title}</h3>
                  <p className="description" style={{ fontWeight: '600', color: 'var(--primary-color)' }}>
                    {benefit.description}
                  </p>
                  <p style={{ 
                    color: 'var(--text-secondary)', 
                    fontSize: '0.95rem', 
                    lineHeight: '1.6',
                    marginTop: '1rem'
                  }}>
                    {benefit.detail}
                  </p>
                </ServiceCard>
              ))}
            </ServicesGrid>
          </ServicesContent>
        </ServicesSection>

        {/* 비전 메시지 섹션 */}
        <ProcessSection style={{ background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(44, 62, 80, 0.05) 100%)' }}>
          <ProcessContent style={{ textAlign: 'center' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 style={{ 
                fontSize: 'clamp(2rem, 4vw, 3rem)', 
                fontWeight: '700', 
                color: 'var(--text-primary)', 
                marginBottom: '2rem' 
              }}>
                <span style={{ color: 'var(--primary-color)' }}>
                  DB는 영업의 시작이자<br/>성장의 동력입니다
                </span>
              </h2>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                style={{
                  background: 'white',
                  borderRadius: 'var(--border-radius)',
                  padding: '3rem 2rem',
                  boxShadow: 'var(--shadow-hover)',
                  marginBottom: '3rem'
                }}
              >
                <h3 style={{ 
                  fontSize: '1.8rem', 
                  fontWeight: '600', 
                  color: 'var(--text-primary)',
                  marginBottom: '1.5rem'
                }}>
                  FINE본부 DB사업부는
                </h3>
                <div style={{ 
                  fontSize: '1.3rem', 
                  lineHeight: '1.8',
                  color: 'var(--text-secondary)'
                }}>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    style={{ fontWeight: '700', color: 'var(--primary-color)', marginBottom: '0.5rem' }}
                  >
                    가장 빠르고,
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    viewport={{ once: true }}
                    style={{ fontWeight: '700', color: 'var(--primary-color)', marginBottom: '0.5rem' }}
                  >
                    가장 효율적이며,
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    viewport={{ once: true }}
                    style={{ fontWeight: '700', color: 'var(--primary-color)', marginBottom: '1rem' }}
                  >
                    가장 안정적인
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                    viewport={{ once: true }}
                    style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-primary)' }}
                  >
                    영업 기회를 제공합니다.
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          </ProcessContent>
        </ProcessSection>
      </DbContainer>
    </Layout>
  );
};

export default Db;

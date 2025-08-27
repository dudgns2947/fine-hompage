import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout/Layout';
import SEO from '@/components/common/SEO';
import Button from '@/components/common/Button';
import Icon from '@/components/common/Icon';

const EducationContainer = styled.div`
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

const ProgramsSection = styled.section`
  padding: 5rem 0;
  background: white;
`;

const ProgramsContent = styled.div`
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

const ProgramsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProgramCard = styled(motion.div)`
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

  .program-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    padding: 1rem;
    background: white;
    border-radius: var(--border-radius);

    .info-item {
      text-align: center;

      .label {
        font-size: 0.875rem;
        color: var(--text-secondary);
        margin-bottom: 0.25rem;
      }

      .value {
        font-weight: 600;
        color: var(--primary-color);
      }
    }
  }
`;

const BenefitsSection = styled.section`
  padding: 5rem 0;
  background: var(--bg-secondary);
`;

const BenefitsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;

  h2 {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 2rem;

    .highlight {
      color: var(--primary-color);
    }
  }

  .benefits-text {
    font-size: clamp(1rem, 2vw, 1.25rem);
    color: var(--text-secondary);
    line-height: 1.8;
    max-width: 800px;
    margin: 0 auto 3rem;
  }
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BenefitCard = styled(motion.div)`
  background: white;
  border-radius: var(--border-radius);
  padding: 2rem;
  box-shadow: var(--shadow);
  text-align: center;

  .icon {
    font-size: 3rem;
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
  }
`;

const programs = [
  {
    icon: <Icon type="graduation" />,
    title: '신입 설계사 교육',
    description: '보험업계 입문자를 위한 체계적인 기초 교육 프로그램입니다.',
    features: [
      '보험 기초 이론 교육',
      '상품 지식 습득',
      '영업 스킬 트레이닝',
      '고객 응대 실습',
      '법규 및 컴플라이언스'
    ],
    duration: '4주',
    schedule: '주 5일',
    cost: '무료'
  },
  {
    icon: '📜',
    title: '전문 자격증 과정',
    description: '보험 전문가로 성장하기 위한 각종 자격증 취득 지원 프로그램입니다.',
    features: [
      '손해사정사 과정',
      '보험계리사 준비반',
      'AFP/CFP 자격증',
      '투자상담사 과정',
      '온라인 강의 제공'
    ],
    duration: '3-6개월',
    schedule: '주말반',
    cost: '지원'
  },
  {
    icon: <Icon type="laptop" />,
    title: '온라인 교육 플랫폼',
    description: '언제 어디서나 학습할 수 있는 온라인 교육 시스템입니다.',
    features: [
      '24시간 접근 가능',
      '모바일 최적화',
      '진도 관리 시스템',
      '퀴즈 및 테스트',
      '수료증 발급'
    ],
    duration: '상시',
    schedule: '자율학습',
    cost: '무료'
  },
  {
    icon: <Icon type="bullseye" />,
    title: '정기 세미나 & 워크샵',
    description: '최신 트렌드와 실무 노하우를 공유하는 정기 교육 프로그램입니다.',
    features: [
      '월례 세미나',
      '전문가 특강',
      '사례 연구',
      '네트워킹 기회',
      '우수사례 공유'
    ],
    duration: '월 1회',
    schedule: '토요일',
    cost: '무료'
  }
];

const benefits = [
  {
    icon: '🏆',
    title: '전문성 향상',
    description: '체계적인 교육을 통한 전문 역량 강화'
  },
  {
    icon: <Icon type="money" />,
    title: '수익 증대',
    description: '전문 지식 습득으로 영업 성과 향상'
  },
  {
    icon: '🤝',
    title: '네트워킹',
    description: '동료들과의 정보 교환 및 인맥 형성'
  },
  {
    icon: <Icon type="chartline" />,
    title: '경력 발전',
    description: '자격증 취득을 통한 경력 개발'
  }
];

const Education: React.FC = () => {
  return (
    <Layout>
      <SEO 
        title="교육부 - FINE"
        description="FINE 교육부에서 제공하는 전문 보험 교육 프로그램을 소개합니다. 신입 교육부터 전문 자격증까지 체계적인 교육을 제공합니다."
        keywords="FINE, 교육부, 보험교육, 자격증, 세미나, 워크샵, 온라인교육"
      />
      
      <EducationContainer>
        <HeroSection>
          <HeroContent>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="highlight">교육부</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              전문적인 보험 교육과 트레이닝 프로그램을 통해 
              최고의 보험 전문가를 양성합니다.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button size="large">
                교육 신청하기
              </Button>
            </motion.div>
          </HeroContent>
        </HeroSection>

        <ProgramsSection>
          <ProgramsContent>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="highlight">교육 프로그램</span>
            </motion.h2>
            
            <ProgramsGrid>
              {programs.map((program, index) => (
                <ProgramCard
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="icon">{program.icon}</span>
                  <h3>{program.title}</h3>
                  <p className="description">{program.description}</p>
                  
                  <div className="program-info">
                    <div className="info-item">
                      <div className="label">기간</div>
                      <div className="value">{program.duration}</div>
                    </div>
                    <div className="info-item">
                      <div className="label">일정</div>
                      <div className="value">{program.schedule}</div>
                    </div>
                    <div className="info-item">
                      <div className="label">비용</div>
                      <div className="value">{program.cost}</div>
                    </div>
                  </div>

                  <ul className="features">
                    {program.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  
                                <Button variant="outline" $fullWidth>
                자세히 보기
              </Button>
                </ProgramCard>
              ))}
            </ProgramsGrid>
          </ProgramsContent>
        </ProgramsSection>

        <BenefitsSection>
          <BenefitsContent>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              교육의 <span className="highlight">장점</span>
            </motion.h2>
            
            <motion.p
              className="benefits-text"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              FINE의 체계적인 교육 프로그램을 통해 전문성을 키우고, 
              성공적인 보험 전문가로 성장하세요.
            </motion.p>
            
            <BenefitsGrid>
              {benefits.map((benefit, index) => (
                <BenefitCard
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="icon">{benefit.icon}</span>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </BenefitCard>
              ))}
            </BenefitsGrid>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button size="large">
                <Icon type="phone" style={{ marginRight: '0.5rem' }} />교육 상담 신청
              </Button>
            </motion.div>
          </BenefitsContent>
        </BenefitsSection>
      </EducationContainer>
    </Layout>
  );
};

export default Education;

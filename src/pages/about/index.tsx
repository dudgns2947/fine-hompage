/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout/Layout';
import SEO from '@/components/common/SEO';
import Button from '@/components/common/Button';
import StatsChart from '@/components/charts/StatsChart';
import { companyHistory, companyInfo } from '@/data/dummyData';

const AboutContainer = styled.div`
  min-height: 100vh;
`;

const HeroSection = styled.section`
  padding: 5rem 0;
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

const StatsSection = styled.section`
  padding: 4rem 0;
  background: white;
`;

const StatsGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
`;

const StatCard = styled(motion.div)`
  padding: 2rem 1rem;
  border-radius: var(--border-radius);
  background: var(--bg-secondary);

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

const HistorySection = styled.section`
  padding: 5rem 0;
  background: var(--bg-secondary);
`;

const HistoryContent = styled.div`
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

const Timeline = styled.div`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--primary-color);
    transform: translateX(-50%);

    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled(motion.div)<{ index: number }>`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
  position: relative;

  ${({ index }) => index % 2 === 0 ? `
    flex-direction: row;
    text-align: right;
    
    .content {
      margin-right: 3rem;
    }
  ` : `
    flex-direction: row-reverse;
    text-align: left;
    
    .content {
      margin-left: 3rem;
    }
  `}

  @media (max-width: 768px) {
    flex-direction: row;
    text-align: left;
    
    .content {
      margin-left: 3rem !important;
      margin-right: 0 !important;
    }
  }

  .year-badge {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background: var(--primary-color);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-weight: 600;
    z-index: 2;

    @media (max-width: 768px) {
      left: 20px;
      transform: translateX(-50%);
    }
  }

  .content {
    flex: 1;
    background: white;
    padding: 2rem;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);

    h3 {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 0.5rem;
    }

    p {
      color: var(--text-secondary);
      line-height: 1.6;
    }
  }
`;

const VisionSection = styled.section`
  padding: 5rem 0;
  background: white;
`;

const VisionContent = styled.div`
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

  .vision-text {
    font-size: clamp(1.125rem, 2vw, 1.5rem);
    color: var(--text-secondary);
    line-height: 1.8;
    max-width: 800px;
    margin: 0 auto 3rem;
  }
`;

const stats = [
  { number: '14', label: '설립 연수' },
  { number: '50K+', label: '고객 수' },
  { number: '15', label: '전국 지점' },
  { number: '99%', label: '고객 만족도' },
];

const About: React.FC = () => {
  return (
    <Layout>
      <SEO 
        title="본부소개 - FINE"
        description="FINE의 역사와 비전을 소개합니다. 2010년 설립 이후 고객 중심의 보험 서비스를 제공해온 FINE의 성장 스토리를 확인하세요."
        keywords="FINE, 회사소개, 본부소개, 회사연혁, 비전, 미션"
      />
      
      <AboutContainer>
        <HeroSection>
          <HeroContent>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="highlight">신뢰</span>와 <span className="highlight">혁신</span>으로<br />
              함께하는 FINE
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {companyInfo.description}을 목표로 2010년부터 고객과 함께 성장해온 FINE입니다.
              전문성과 신뢰를 바탕으로 고객의 안전한 미래를 보장합니다.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button size="large">
                상담 신청하기
              </Button>
            </motion.div>
          </HeroContent>
        </HeroSection>

        <StatsSection>
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
        </StatsSection>

        <HistorySection>
          <HistoryContent>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              FINE의 <span className="highlight">성장 스토리</span>
            </motion.h2>
            
            <Timeline>
              {companyHistory.map((item, index) => (
                <TimelineItem
                  key={index}
                  index={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="year-badge">{item.year}</div>
                  <div className="content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </TimelineItem>
              ))}
            </Timeline>
          </HistoryContent>
        </HistorySection>

        <VisionSection>
          <VisionContent>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              FINE의 <span className="highlight">비전</span>
            </motion.h2>
            <motion.p
              className="vision-text"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              "고객의 행복한 미래를 위한 든든한 동반자가 되겠습니다"
              <br /><br />
              FINE은 단순한 보험 판매를 넘어, 고객의 인생 전반에 걸친 
              리스크 관리 파트너로서 최고의 서비스를 제공하겠습니다.
            </motion.p>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '2rem', 
              margin: '3rem 0 2rem'
            }}>
              <StatsChart type="growth" />
              <StatsChart type="performance" />
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button variant="outline" size="large">
                회사 영상 보기
              </Button>
            </motion.div>
          </VisionContent>
        </VisionSection>
      </AboutContainer>
    </Layout>
  );
};

export default About;

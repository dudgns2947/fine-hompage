import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout/Layout';
import SEO from '@/components/common/SEO';
import Icon from '@/components/common/Icon';
import { companyHistory } from '@/data/dummyData';

const HistoryContainer = styled.div`
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
  }
`;

const TimelineSection = styled.section`
  padding: 5rem 0;
  background: white;
`;

const TimelineContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Timeline = styled.div`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(to bottom, var(--primary-color), var(--accent-color));
    transform: translateX(-50%);
    border-radius: 2px;

    @media (max-width: 768px) {
      left: 30px;
    }
  }
`;

const TimelineItem = styled(motion.div)<{ index: number }>`
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
  position: relative;

  ${({ index }) => index % 2 === 0 ? `
    flex-direction: row;
    text-align: right;
    
    .content {
      margin-right: 4rem;
    }
  ` : `
    flex-direction: row-reverse;
    text-align: left;
    
    .content {
      margin-left: 4rem;
    }
  `}

  @media (max-width: 768px) {
    flex-direction: row;
    text-align: left;
    
    .content {
      margin-left: 4rem !important;
      margin-right: 0 !important;
    }
  }

  .year-badge {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background: var(--primary-color);
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 30px;
    font-weight: 700;
    font-size: 1.125rem;
    z-index: 2;
    box-shadow: var(--shadow);

    @media (max-width: 768px) {
      left: 30px;
      transform: translateX(-50%);
    }
  }

  .content {
    flex: 1;
    background: var(--bg-secondary);
    padding: 2.5rem;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      ${({ index }) => index % 2 === 0 ? `
        right: -15px;
        border-left: 15px solid var(--bg-secondary);
        border-top: 15px solid transparent;
        border-bottom: 15px solid transparent;
      ` : `
        left: -15px;
        border-right: 15px solid var(--bg-secondary);
        border-top: 15px solid transparent;
        border-bottom: 15px solid transparent;
      `}
      transform: translateY(-50%);

      @media (max-width: 768px) {
        left: -15px;
        border-right: 15px solid var(--bg-secondary);
        border-left: none;
        border-top: 15px solid transparent;
        border-bottom: 15px solid transparent;
      }
    }

    h3 {
      font-size: 1.75rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 1rem;
    }

    p {
      color: var(--text-secondary);
      line-height: 1.8;
      font-size: 1.125rem;
    }
  }
`;

const MilestonesSection = styled.section`
  padding: 5rem 0;
  background: var(--bg-secondary);
`;

const MilestonesContent = styled.div`
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

const MilestonesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const MilestoneCard = styled(motion.div)`
  background: white;
  border-radius: var(--border-radius);
  padding: 2rem;
  box-shadow: var(--shadow);
  text-align: center;
  transition: var(--transition);

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-hover);
  }

  .icon {
    font-size: 3rem;
    margin-bottom: 1rem;
    display: block;
  }

  .number {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--primary-color);
    margin-bottom: 0.5rem;
  }

  .label {
    font-size: 1.125rem;
    color: var(--text-primary);
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .description {
    color: var(--text-secondary);
    font-size: 0.95rem;
    line-height: 1.5;
  }
`;

const milestones = [
  {
    icon: <Icon type="building" />,
    number: '2010',
    label: '회사 설립',
    description: '보험 중개업으로 시작'
  },
  {
    icon: <Icon type="star" />,
    number: '50K+',
    label: '누적 고객',
    description: '신뢰받는 파트너'
  },
  {
    icon: '🏆',
    number: '15',
    label: '전국 지점',
    description: '전국 서비스 네트워크'
  },
  {
    icon: <Icon type="chartline" />,
    number: '99%',
    label: '고객 만족도',
    description: '최고 수준의 서비스'
  }
];

const History: React.FC = () => {
  return (
    <Layout>
      <SEO 
        title="회사연혁 - FINE"
        description="FINE의 성장 스토리와 주요 연혁을 소개합니다. 2010년 설립부터 현재까지의 발전 과정을 확인하세요."
        keywords="FINE, 회사연혁, 히스토리, 성장스토리, 연혁"
      />
      
      <HistoryContainer>
        <HeroSection>
          <HeroContent>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              FINE의 <span className="highlight">성장 스토리</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              2010년 설립부터 현재까지, 고객과 함께 성장해온 
              FINE의 발자취를 소개합니다.
            </motion.p>
          </HeroContent>
        </HeroSection>

        <TimelineSection>
          <TimelineContent>
            <Timeline>
              {companyHistory.map((item, index) => (
                <TimelineItem
                  key={index}
                  index={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
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
          </TimelineContent>
        </TimelineSection>

        <MilestonesSection>
          <MilestonesContent>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              주요 <span className="highlight">성과</span>
            </motion.h2>
            
            <MilestonesGrid>
              {milestones.map((milestone, index) => (
                <MilestoneCard
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="icon">{milestone.icon}</span>
                  <div className="number">{milestone.number}</div>
                  <div className="label">{milestone.label}</div>
                  <div className="description">{milestone.description}</div>
                </MilestoneCard>
              ))}
            </MilestonesGrid>
          </MilestonesContent>
        </MilestonesSection>
      </HistoryContainer>
    </Layout>
  );
};

export default History;

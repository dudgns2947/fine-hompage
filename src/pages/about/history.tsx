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
      left: 40px;
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
      margin-right: 6rem;
    }
  ` : `
    flex-direction: row-reverse;
    text-align: left;
    
    .content {
      margin-left: 6rem;
    }
  `}

  @media (max-width: 768px) {
    flex-direction: row;
    text-align: left;
    
    .content {
      margin-left: 5rem !important;
      margin-right: 0 !important;
    }
  }

  .year-badge {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background: var(--primary-color);
    color: white;
    padding: 1rem 2rem;
    border-radius: 30px;
    font-weight: 700;
    font-size: 1.125rem;
    z-index: 3;
    box-shadow: var(--shadow);
    min-width: 80px;
    text-align: center;

    @media (max-width: 768px) {
      left: 40px;
      transform: translateX(-50%);
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
      min-width: 70px;
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
      margin-bottom: 0.5rem;

      &:last-child {
        margin-bottom: 0;
      }
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
    icon: '🏆',
    number: '1',
    label: 'RM',
    description: '본부장'
  },
  {
    icon: '⭐',
    number: '2',
    label: 'SBM',
    description: '사업단장'
  },
  {
    icon: '💼',
    number: '15',
    label: 'BM',
    description: '지점장'
  },
  {
    icon: '👨‍💼',
    number: '30',
    label: 'SM',
    description: '부지점장'
  },
  {
    icon: <Icon type="star" />,
    number: '10',
    label: '마케팅임원',
    description: '마케팅임원'
  },
  {
    icon: '🎯',
    number: '30',
    label: 'GAC',
    description: '연도대상 달성'
  },
  {
    icon: '👥',
    number: '100',
    label: 'GSR',
    description: '굿리치 전문가'
  }
];

const History: React.FC = () => {
  return (
    <Layout>
      <SEO 
        title="Goodrich FINE본부 연혁 - FINE"
        description="Goodrich FINE본부의 성장 스토리와 주요 연혁을 소개합니다. 2020년 DYNAMIC FINE 시작부터 현재까지의 발전 과정을 확인하세요."
        keywords="Goodrich FINE본부, 회사연혁, 히스토리, 성장스토리, 연혁"
      />
      
      <HistoryContainer>
        <HeroSection>
          <HeroContent>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Goodrich FINE본부 <span className="highlight">연혁</span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p>2020년 DYNAMIC FINE 시작부터 현재까지, 끊임없는 도전과 성장으로</p>
              <p>발전해온 Goodrich FINE본부의 발자취를 소개합니다.</p>
            </motion.div>
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
                    <div>
                      {Array.isArray(item.description) ? (
                        item.description.map((desc, i) => (
                          <p key={i}>{desc}</p>
                        ))
                      ) : (
                        <p>{item.description}</p>
                      )}
                    </div>
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
              조직 <span className="highlight">구성</span>
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

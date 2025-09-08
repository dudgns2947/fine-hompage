import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '@/components/Layout/Layout';
import SEO from '@/components/common/SEO';
import Button from '@/components/common/Button';
import { jobPostings } from '@/data/dummyData';
import Icon from '@/components/common/Icon';

const CareersContainer = styled.div`
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

const BenefitsSection = styled.section`
  padding: 5rem 0;
  background: white;
`;

const BenefitsContent = styled.div`
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

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BenefitCard = styled(motion.div)`
  background: var(--bg-secondary);
  padding: 2rem;
  border-radius: var(--border-radius);
  text-align: center;
  transition: var(--transition);

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-hover);
  }

  .icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 1rem;
  }

  p {
    color: var(--text-secondary);
    line-height: 1.6;
  }
`;

const JobsSection = styled.section`
  padding: 5rem 0;
  background: var(--bg-secondary);
`;

const JobsContent = styled.div`
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

const FilterTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const FilterTab = styled.button<{ active: boolean }>`
  padding: 0.75rem 1.5rem;
  border: 2px solid ${({ active }) => active ? 'var(--primary-color)' : 'var(--border-color)'};
  background: ${({ active }) => active ? 'var(--primary-color)' : 'white'};
  color: ${({ active }) => active ? 'white' : 'var(--text-primary)'};
  border-radius: 25px;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    border-color: var(--primary-color);
    color: ${({ active }) => active ? 'white' : 'var(--primary-color)'};
  }
`;

const JobsGrid = styled.div`
  display: grid;
  gap: 2rem;
`;

const JobCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  transition: var(--transition);

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-hover);
  }

  .job-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 1rem;
    }

    .job-info {
      flex: 1;

      h3 {
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--text-primary);
        margin-bottom: 0.5rem;
      }

      .job-meta {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        margin-bottom: 0.5rem;

        span {
          font-size: 0.9rem;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }
      }
    }

    .job-type {
      background: var(--primary-color);
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.875rem;
      font-weight: 500;
      white-space: nowrap;
    }
  }

  .job-description {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .job-deadline {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem;
    border-top: 1px solid var(--border-color);

    .deadline-text {
      font-size: 0.9rem;
      color: var(--text-secondary);

      .date {
        color: var(--primary-color);
        font-weight: 600;
      }
    }
  }
`;

const benefits = [
  {
    icon: <Icon type="money" />,
    title: '경쟁력있는 연봉',
    description: '업계 최고 수준의 연봉과 성과급을 제공합니다.'
  },
  {
    icon: <Icon type="graduation" />,
    title: '교육부 운영',
    description: '전문성 향상을 위한 파인본부 자체 교육부 운영'
  },
  {
    icon: <Icon type="rocket" />,
    title: '성장기회',
    description: '빠른 성장과 다양한 디비프로젝트 참여기회 제공'
  },
  {
    icon: <Icon type="database" />,
    title: '디비사업부',
    description: '차별화된 본부자체 디비사업부 운영 및 다채로운 제휴 디비 활용 및 제공'
  },
  {
    icon: <Icon type="chartline" />,
    title: '직급별 성장 교육시스템 운영',
    description: '체계적인 직급별 성장 교육 프로그램을 통한 전문성 향상'
  }
];

const Careers: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('전체');
  
  const filters = ['전체', '정규직', '계약직', '인턴'];
  
  const filteredJobs = activeFilter === '전체' 
    ? jobPostings 
    : jobPostings.filter(job => job.type === activeFilter);

  return (
    <Layout>
      <SEO 
        title="인재채용 - FINE"
        description="FINE에서 함께 성장할 인재를 찾습니다. 다양한 직무의 채용 정보와 복리후생을 확인하고 지원하세요."
        keywords="FINE, 채용, 인재채용, 구인, 취업, 보험회사 채용, 보험설계사"
      />
      
      <CareersContainer>
        <HeroSection>
          <HeroContent>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="highlight">함께 성장</span>할<br />
              인재를 찾습니다
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              FINE는 열정과 전문성을 갖춘 인재와 함께 더 나은 미래를 만들어갑니다.
              당신의 꿈과 목표를 실현할 수 있는 기회를 제공합니다.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button size="large">
                채용 공고 보기
              </Button>
            </motion.div>
          </HeroContent>
        </HeroSection>

        <BenefitsSection>
          <BenefitsContent>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              FINE만의 <span className="highlight">특별한 혜택</span>
            </motion.h2>
            
            <BenefitsGrid>
              {benefits.map((benefit, index) => (
                <BenefitCard
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="icon">{benefit.icon}</div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </BenefitCard>
              ))}
            </BenefitsGrid>
          </BenefitsContent>
        </BenefitsSection>

        <JobsSection>
          <JobsContent>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="highlight">채용 공고</span>
            </motion.h2>
            
            <FilterTabs>
              {filters.map((filter) => (
                <FilterTab
                  key={filter}
                  active={activeFilter === filter}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </FilterTab>
              ))}
            </FilterTabs>

            <JobsGrid>
              <AnimatePresence mode="wait">
                {filteredJobs.map((job, index) => (
                  <JobCard
                    key={job.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="job-header">
                      <div className="job-info">
                        <h3>{job.title}</h3>
                        <div className="job-meta">
                          <span><Icon type="building" style={{ marginRight: '0.5rem' }} />{job.department}</span>
                          <span><Icon type="mapmarker" style={{ marginRight: '0.5rem' }} />{job.location}</span>
                          <span><Icon type="usertie" style={{ marginRight: '0.5rem' }} />{job.experience}</span>
                        </div>
                      </div>
                      <div className="job-type">{job.type}</div>
                    </div>
                    
                    <p className="job-description">{job.description}</p>
                    
                    <div className="job-deadline">
                      <div className="deadline-text">
                        마감일: <span className="date">{job.deadline}</span>
                      </div>
                      <Button variant="outline">
                        지원하기
                      </Button>
                    </div>
                  </JobCard>
                ))}
              </AnimatePresence>
            </JobsGrid>
          </JobsContent>
        </JobsSection>
      </CareersContainer>
    </Layout>
  );
};

export default Careers;

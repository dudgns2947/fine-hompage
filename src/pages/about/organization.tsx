import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout/Layout';
import SEO from '@/components/common/SEO';
import Icon from '@/components/common/Icon';

const OrganizationContainer = styled.div`
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

const OrganizationSection = styled.section`
  padding: 5rem 0;
  background: white;
`;

const OrganizationContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

const Level = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    gap: 1rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const PositionCard = styled(motion.div)<{ $level: number }>`
  background: ${props => {
    switch (props.$level) {
      case 1: return 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
      case 2: return 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)';
      case 3: return 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)';
      case 4: return 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)';
      default: return 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)';
    }
  }};
  color: white;
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  text-align: center;
  min-width: 200px;
  position: relative;
  transition: var(--transition);

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-hover);
  }

  @media (max-width: 768px) {
    min-width: 160px;
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    min-width: 280px;
    padding: 1.5rem;
  }

  .position-title {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.5rem;

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }

  .person-name {
    font-size: 1rem;
    font-weight: 500;
    opacity: 0.9;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }

  .department {
    font-size: 0.875rem;
    opacity: 0.8;
    background: rgba(255, 255, 255, 0.2);
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    display: inline-block;

    @media (max-width: 768px) {
      font-size: 0.8rem;
      padding: 0.2rem 0.6rem;
    }
  }

  .icon {
    position: absolute;
    top: -15px;
    right: -15px;
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;

    @media (max-width: 768px) {
      width: 35px;
      height: 35px;
      font-size: 1rem;
      top: -12px;
      right: -12px;
    }
  }
`;

const ConnectionLine = styled.div<{ $direction?: 'horizontal' | 'vertical' }>`
  ${props => props.$direction === 'horizontal' ? `
    width: 60px;
    height: 2px;
    background: linear-gradient(90deg, var(--primary-color), #667eea);
    
    @media (max-width: 480px) {
      width: 2px;
      height: 30px;
      background: linear-gradient(180deg, var(--primary-color), #667eea);
    }
  ` : `
    width: 2px;
    height: 40px;
    background: linear-gradient(180deg, var(--primary-color), #667eea);
    
    @media (max-width: 768px) {
      height: 30px;
    }
  `}
`;

const DepartmentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin-top: 3rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const DepartmentCard = styled(motion.div)`
  background: var(--bg-secondary);
  border-radius: var(--border-radius);
  padding: 2rem;
  box-shadow: var(--shadow);
  transition: var(--transition);

  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-hover);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  .dept-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;

    .dept-icon {
      width: 50px;
      height: 50px;
      background: linear-gradient(135deg, var(--primary-color), #667eea);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 1.5rem;

      @media (max-width: 768px) {
        width: 40px;
        height: 40px;
        font-size: 1.2rem;
      }
    }

    .dept-info {
      h3 {
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--text-primary);
        margin-bottom: 0.25rem;

        @media (max-width: 768px) {
          font-size: 1.1rem;
        }
      }

      .dept-manager {
        font-size: 0.9rem;
        color: var(--text-secondary);

        @media (max-width: 768px) {
          font-size: 0.85rem;
        }
      }
    }
  }

  .dept-members {
    .member-list {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;

      .member {
        background: rgba(255, 107, 53, 0.1);
        color: var(--primary-color);
        padding: 0.25rem 0.75rem;
        border-radius: 20px;
        font-size: 0.875rem;
        font-weight: 500;

        @media (max-width: 768px) {
          font-size: 0.8rem;
          padding: 0.2rem 0.6rem;
        }
      }
    }
  }
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 600;
  color: var(--text-primary);
  text-align: center;
  margin-bottom: 3rem;

  .highlight {
    color: var(--primary-color);
  }

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

// 조직도 데이터
const organizationData = {
  ceo: {
    title: "대표이사",
    name: "김대표",
    department: "경영진",
    icon: "👑"
  },
  executives: [
    {
      title: "부사장",
      name: "이부사장",
      department: "경영진",
      icon: "⭐"
    },
    {
      title: "전무이사",
      name: "박전무",
      department: "경영진", 
      icon: "⭐"
    }
  ],
  directors: [
    {
      title: "영업본부장",
      name: "최본부장",
      department: "영업본부",
      icon: "📊"
    },
    {
      title: "운영본부장",
      name: "정본부장",
      department: "운영본부",
      icon: "⚙️"
    },
    {
      title: "IT본부장",
      name: "한본부장",
      department: "IT본부",
      icon: "💻"
    }
  ],
  departments: [
    {
      name: "영업1팀",
      manager: "김팀장",
      icon: "📈",
      members: ["이대리", "박사원", "최사원", "정사원"]
    },
    {
      name: "영업2팀", 
      manager: "송팀장",
      icon: "📊",
      members: ["유대리", "강사원", "임사원"]
    },
    {
      name: "마케팅팀",
      manager: "윤팀장", 
      icon: "🎯",
      members: ["조대리", "신사원", "오사원"]
    },
    {
      name: "인사총무팀",
      manager: "장팀장",
      icon: "👥",
      members: ["서대리", "홍사원", "김사원"]
    },
    {
      name: "재무회계팀",
      manager: "문팀장",
      icon: "💰",
      members: ["배대리", "양사원"]
    },
    {
      name: "IT개발팀",
      manager: "권팀장",
      icon: "⚡",
      members: ["노대리", "하사원", "고사원", "성사원"]
    }
  ]
};

const OrganizationPage: React.FC = () => {
  return (
    <Layout>
      <SEO 
        title="조직도 - FINE"
        description="FINE의 조직 구조와 임직원을 소개합니다. 체계적인 조직 운영으로 최고의 서비스를 제공합니다."
        keywords="FINE, 조직도, 임직원, 회사조직, 본부소개"
      />
      
      <OrganizationContainer>
        <HeroSection>
          <HeroContent>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              FINE <span className="highlight">조직도</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              체계적인 조직 구조와 전문성을 갖춘 임직원들이 
              고객에게 최고의 서비스를 제공합니다.
            </motion.p>
          </HeroContent>
        </HeroSection>

        <OrganizationSection>
          <OrganizationContent>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <SectionTitle>
                경영진 <span className="highlight">구조</span>
              </SectionTitle>
              
              <ChartContainer>
                {/* CEO Level */}
                <Level>
                  <PositionCard
                    $level={1}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <div className="icon">{organizationData.ceo.icon}</div>
                    <div className="position-title">{organizationData.ceo.title}</div>
                    <div className="person-name">{organizationData.ceo.name}</div>
                    <div className="department">{organizationData.ceo.department}</div>
                  </PositionCard>
                </Level>

                <ConnectionLine $direction="vertical" />

                {/* Executive Level */}
                <Level>
                  {organizationData.executives.map((exec, index) => (
                    <React.Fragment key={index}>
                      <PositionCard
                        $level={2}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                      >
                        <div className="icon">{exec.icon}</div>
                        <div className="position-title">{exec.title}</div>
                        <div className="person-name">{exec.name}</div>
                        <div className="department">{exec.department}</div>
                      </PositionCard>
                      {index < organizationData.executives.length - 1 && (
                        <ConnectionLine $direction="horizontal" />
                      )}
                    </React.Fragment>
                  ))}
                </Level>

                <ConnectionLine $direction="vertical" />

                {/* Director Level */}
                <Level>
                  {organizationData.directors.map((director, index) => (
                    <React.Fragment key={index}>
                      <PositionCard
                        $level={3}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      >
                        <div className="icon">{director.icon}</div>
                        <div className="position-title">{director.title}</div>
                        <div className="person-name">{director.name}</div>
                        <div className="department">{director.department}</div>
                      </PositionCard>
                      {index < organizationData.directors.length - 1 && (
                        <ConnectionLine $direction="horizontal" />
                      )}
                    </React.Fragment>
                  ))}
                </Level>
              </ChartContainer>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <SectionTitle style={{ marginTop: '5rem' }}>
                부서별 <span className="highlight">구성</span>
              </SectionTitle>
              
              <DepartmentGrid>
                {organizationData.departments.map((dept, index) => (
                  <DepartmentCard
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="dept-header">
                      <div className="dept-icon">{dept.icon}</div>
                      <div className="dept-info">
                        <h3>{dept.name}</h3>
                        <div className="dept-manager">팀장: {dept.manager}</div>
                      </div>
                    </div>
                    <div className="dept-members">
                      <div className="member-list">
                        {dept.members.map((member, memberIndex) => (
                          <span key={memberIndex} className="member">
                            {member}
                          </span>
                        ))}
                      </div>
                    </div>
                  </DepartmentCard>
                ))}
              </DepartmentGrid>
            </motion.div>
          </OrganizationContent>
        </OrganizationSection>
      </OrganizationContainer>
    </Layout>
  );
};

export default OrganizationPage;

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import StatsChart from '@/components/charts/StatsChart';
import Icon, { IconType } from '@/components/common/Icon';

const StatsContainer = styled.section`
  padding: 5rem 0;
  background: var(--bg-secondary);
`;

const StatsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  h2 {
    font-size: clamp(2rem, 4vw, 3rem);
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
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const StatCard = styled(motion.div)`
  background: white;
  border-radius: var(--border-radius);
  padding: 2rem;
  box-shadow: var(--shadow);
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: var(--transition);

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
    font-size: 3rem;
    margin-bottom: 1rem;
    display: block;
    color: var(--primary-color);

    svg {
      color: var(--primary-color);
    }
  }

  .number {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--primary-color);
    margin-bottom: 0.5rem;
    display: block;
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

const ChartsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-top: 2rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
    margin-top: 1.5rem;
  }
`;

const stats: Array<{
  icon: IconType;
  number: string;
  label: string;
  description: string;
}> = [
  {
    icon: "users",
    number: '50K+',
    label: '누적 고객 수',
    description: '신뢰받는 보험 파트너'
  },
  {
    icon: "trophy",
    number: '99%',
    label: '고객 만족도',
    description: '업계 최고 수준'
  },
  {
    icon: "building",
    number: '15',
    label: '전국 지점',
    description: '전국 서비스 네트워크'
  },
  {
    icon: "chartline",
    number: '14년',
    label: '업계 경험',
    description: '축적된 전문성'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const
    }
  }
};

const StatsSection: React.FC = () => {
  return (
    <StatsContainer>
      <StatsContent>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionHeader>
            <h2>
              <span className="highlight">신뢰할 수 있는</span> 성과
            </h2>
            <p>
              숫자로 증명하는 FINE의 신뢰성과 전문성. <br/>
              고객과 함께 성장해온 14년의 발자취입니다.
            </p>
          </SectionHeader>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <StatsGrid>
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <span className="icon"><Icon type={stat.icon} /></span>
                <motion.span 
                  className="number"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.span>
                <div className="label">{stat.label}</div>
                <div className="description">{stat.description}</div>
              </StatCard>
            ))}
          </StatsGrid>
        </motion.div>

        <ChartsGrid>
          <StatsChart type="satisfaction" />
          <StatsChart type="services" />
        </ChartsGrid>
      </StatsContent>
    </StatsContainer>
  );
};

export default StatsSection;

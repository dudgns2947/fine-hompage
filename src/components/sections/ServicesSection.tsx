import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Button from '@/components/common/Button';
import { services } from '@/data/dummyData';
import Icon, { IconType } from '@/components/common/Icon';

const ServicesContainer = styled.section`
  padding: 5rem 0;
  background: var(--bg-secondary);
`;

const ServicesContent = styled.div`
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ServiceCard = styled(motion.div)`
  background: white;
  border-radius: var(--border-radius);
  padding: 2rem;
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
    font-size: 3rem;
    margin-bottom: 1rem;
    display: block;
    color: var(--primary-color);

    svg {
      color: var(--primary-color);
    }
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 0.75rem;
  }

  .description {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .features {
    list-style: none;
    margin-bottom: 1.5rem;

    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
      color: var(--text-secondary);

      &::before {
        content: '✓';
        color: var(--primary-color);
        font-weight: bold;
      }
    }
  }
`;

const CTASection = styled.div`
  text-align: center;
  padding: 3rem 2rem;
  background: white;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);

  h3 {
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 1rem;
  }

  p {
    color: var(--text-secondary);
    margin-bottom: 2rem;
    line-height: 1.6;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

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
      ease: [0.25, 0.46, 0.45, 0.94] as const
    }
  }
};

const ServicesSection: React.FC = () => {
  const getServiceIcon = (serviceId: number): IconType => {
    const iconMap: Record<number, IconType> = {
      1: "shield",
      2: "car",
      3: "heartbeat",
      4: "piggybank"
    };
    return iconMap[serviceId] || "shield";
  };

  return (
    <ServicesContainer>
      <ServicesContent>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionHeader>
            <h2>
              <span className="highlight">맞춤형</span> 보험 서비스
            </h2>
            <p>
              고객의 다양한 니즈에 맞는 최적의 보험 상품을 제공합니다.
              전문 상담을 통해 가장 적합한 보장을 찾아드립니다.
            </p>
          </SectionHeader>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ServicesGrid>
            {services.map((service) => (
              <motion.div key={service.id} variants={cardVariants}>
                <ServiceCard
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <span className="icon"><Icon type={getServiceIcon(service.id)} /></span>
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
              </motion.div>
            ))}
          </ServicesGrid>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <CTASection>
            <h3>지금 바로 무료 상담을 받아보세요</h3>
            <p>
              전문 상담사가 고객님의 상황에 맞는 최적의 보험을 추천해드립니다.
              부담 없는 무료 상담으로 시작하세요.
            </p>
            <ButtonGroup>
              <Button size="large">
                <Icon type="phone" style={{ marginRight: '0.5rem' }} />
                전화 상담 신청
              </Button>
              <Button variant="outline" size="large">
                <Icon type="comments" style={{ marginRight: '0.5rem' }} />
                온라인 상담
              </Button>
            </ButtonGroup>
          </CTASection>
        </motion.div>
      </ServicesContent>
    </ServicesContainer>
  );
};

export default ServicesSection;

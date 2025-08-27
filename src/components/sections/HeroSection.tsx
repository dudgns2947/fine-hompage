import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Button from '@/components/common/Button';
import { heroContent } from '@/data/dummyData';
import Icon, { IconType } from '@/components/common/Icon';

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, 
    rgba(255, 107, 53, 0.1) 0%, 
    rgba(44, 62, 80, 0.05) 100%
  );
  position: relative;
  overflow: hidden;
  padding: 2rem 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('/image/hero-pattern.svg') no-repeat center center;
    background-size: cover;
    opacity: 0.05;
    z-index: 0;
  }

  @media (max-width: 768px) {
    min-height: auto;
    padding: 4rem 0 2rem;
  }

  @media (max-width: 480px) {
    padding: 3rem 0 1rem;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: 1024px) {
    gap: 3rem;
    padding: 0 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    gap: 2rem;
    padding: 0 0.75rem;
  }
`;

const TextContent = styled.div`
  h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
    color: var(--text-primary);

    .highlight {
      color: var(--primary-color);
      position: relative;
      
      &::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 100%;
        height: 3px;
        background: var(--primary-color);
        border-radius: 2px;
      }
    }
  }

  .subtitle {
    font-size: clamp(1.25rem, 3vw, 1.5rem);
    font-weight: 600;
    color: var(--secondary-color);
    margin-bottom: 1.5rem;
  }

  .description {
    font-size: clamp(1rem, 2vw, 1.125rem);
    line-height: 1.6;
    color: var(--text-secondary);
    margin-bottom: 2rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

const VisualContent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 450px;

  @media (max-width: 1024px) {
    min-height: 400px;
  }

  @media (max-width: 768px) {
    order: -1;
    min-height: 300px;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    min-height: 250px;
    margin-bottom: 0.5rem;
  }
`;

const FloatingCard = styled(motion.div)<{ delay: number }>`
  position: absolute;
  background: white;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-hover);
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  min-width: 200px;
  z-index: 2;

  .icon {
    font-size: 2rem;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 107, 53, 0.1);
    border-radius: 50%;
    flex-shrink: 0;

    svg {
      color: var(--primary-color);
    }
  }

  .content {
    flex: 1;
    
    h4 {
      font-size: 1rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 0.25rem;
    }

    p {
      font-size: 0.875rem;
      color: var(--text-secondary);
    }
  }

  &:nth-child(1) {
    top: 5%;
    right: 5%;
    transform: translateX(50%);
  }

  &:nth-child(2) {
    top: 40%;
    left: 5%;
    transform: translateX(-50%);
  }

  &:nth-child(3) {
    bottom: 5%;
    right: 15%;
    transform: translateX(30%);
  }

  @media (max-width: 1024px) {
    &:nth-child(1) {
      top: 10%;
      right: 2%;
      transform: translateX(20%);
    }

    &:nth-child(2) {
      top: 45%;
      left: 2%;
      transform: translateX(-20%);
    }

    &:nth-child(3) {
      bottom: 10%;
      right: 5%;
      transform: translateX(10%);
    }
  }

  @media (max-width: 768px) {
    position: static;
    margin: 0.75rem auto;
    min-width: auto;
    width: 100%;
    max-width: 280px;
    transform: none;
    padding: 1.25rem;
  }

  @media (max-width: 480px) {
    max-width: 260px;
    padding: 1rem;
    margin: 0.5rem auto;
    
    .icon {
      width: 50px;
      height: 50px;
      font-size: 1.75rem;
    }

    .content {
      h4 {
        font-size: 0.9rem;
      }

      p {
        font-size: 0.8rem;
      }
    }
  }
`;

const MainVisual = styled(motion.div)`
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8rem;
  color: white;
  position: relative;
  z-index: 1;

  svg {
    color: white;
  }

  @media (max-width: 1024px) {
    width: 350px;
    height: 350px;
    font-size: 7rem;
  }

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
    font-size: 5rem;
  }

  @media (max-width: 480px) {
    width: 200px;
    height: 200px;
    font-size: 4rem;
  }

  @media (max-width: 360px) {
    width: 180px;
    height: 180px;
    font-size: 3.5rem;
  }
`;

const floatingCards: Array<{
  icon: IconType;
  title: string;
  description: string;
}> = [
  {
    icon: "shield",
    title: "생명보험",
    description: "가족을 위한 보장"
  },
  {
    icon: "car",
    title: "손해보험",
    description: "사고로부터 보호"
  },
  {
    icon: "heartbeat",
    title: "건강보험",
    description: "의료비 보장"
  }
];

const HeroSection: React.FC = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <TextContent>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1, 
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <motion.span 
              className="highlight"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              신뢰할 수 있는
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              보험 파트너
            </motion.span>
          </motion.h1>
          
          <motion.div
            className="subtitle"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.9,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            {heroContent.subtitle}
          </motion.div>
          
          <motion.p
            className="description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 1.1,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            {heroContent.description}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 1.3,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <ButtonGroup>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="large">
                  {heroContent.ctaText}
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" size="large">
                  서비스 둘러보기
                </Button>
              </motion.div>
            </ButtonGroup>
          </motion.div>
        </TextContent>

        <VisualContent>
          <MainVisual
            initial={{ scale: 0, rotate: -180, opacity: 0 }}
            animate={{ 
              scale: 1, 
              rotate: 0, 
              opacity: 1,
              y: [0, -10, 0]
            }}
            transition={{ 
              scale: { duration: 1.2, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
              rotate: { duration: 1.2, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
              opacity: { duration: 1.2, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
              y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }
            }}
            whileHover={{ 
              scale: 1.1,
              rotate: 5,
              transition: { duration: 0.3 }
            }}
          >
            <Icon type="building" />
          </MainVisual>
          
          {floatingCards.map((card, index) => (
            <FloatingCard
              key={index}
              delay={index * 0.2}
              initial={{ 
                opacity: 0, 
                scale: 0, 
                x: index % 2 === 0 ? -100 : 100,
                y: -50
              }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                x: 0,
                y: 0
              }}
              transition={{ 
                duration: 0.8, 
                delay: 1.5 + index * 0.3,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              whileHover={{ 
                scale: 1.1,
                y: -10,
                rotateY: 10,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="icon"
                whileHover={{ 
                  rotate: 360,
                  transition: { duration: 0.5 }
                }}
              >
                <Icon type={card.icon} />
              </motion.div>
              <div className="content">
                <h4>{card.title}</h4>
                <p>{card.description}</p>
              </div>
            </FloatingCard>
          ))}
        </VisualContent>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;


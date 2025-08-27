import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout/Layout';
import SEO from '@/components/common/SEO';
import Button from '@/components/common/Button';
import Icon from '@/components/common/Icon';

const PromotionContainer = styled.div`
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

const DepartmentSection = styled.section`
  padding: 5rem 0;
  background: white;
`;

const DepartmentContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const DepartmentCard = styled(motion.div)`
  background: var(--bg-secondary);
  border-radius: var(--border-radius);
  padding: 3rem;
  text-align: center;
  box-shadow: var(--shadow);
  transition: var(--transition);

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-hover);
  }

  .icon {
    font-size: 4rem;
    margin-bottom: 2rem;
    display: block;
  }

  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 1rem;
  }

  p {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 2rem;
  }

  .features {
    list-style: none;
    margin-bottom: 2rem;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      margin-bottom: 0.75rem;
      color: var(--text-secondary);

      &::before {
        content: '✓';
        color: var(--primary-color);
        font-weight: bold;
      }
    }
  }
`;

const Promotion: React.FC = () => {
  return (
    <Layout>
      <SEO 
        title="홍보센터 - FINE"
        description="FINE 홍보센터입니다. 교육부와 디비사업부의 다양한 프로그램과 서비스를 소개합니다."
        keywords="FINE, 홍보센터, 교육부, 디비사업부, 보험교육, 마케팅"
      />
      
      <PromotionContainer>
        <HeroSection>
          <HeroContent>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="highlight">홍보센터</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              FINE의 교육부와 디비사업부에서 제공하는 
              다양한 프로그램과 서비스를 소개합니다.
            </motion.p>
          </HeroContent>
        </HeroSection>

        <DepartmentSection>
          <DepartmentContent>
            <DepartmentCard
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <span className="icon">📚</span>
              <h2>교육부</h2>
              <p>
                전문적인 보험 교육과 트레이닝 프로그램을 통해 
                최고의 보험 전문가를 양성합니다.
              </p>
              <ul className="features">
                <li>신입 설계사 교육</li>
                <li>전문 자격증 과정</li>
                <li>온라인 교육 플랫폼</li>
                <li>정기 세미나 및 워크샵</li>
              </ul>
              <Button>교육 프로그램 보기</Button>
            </DepartmentCard>

            <DepartmentCard
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <span className="icon"><Icon type="chartline" /></span>
              <h2>디비사업부</h2>
              <p>
                데이터 기반의 마케팅과 고객 관리 시스템으로 
                효율적인 영업 활동을 지원합니다.
              </p>
              <ul className="features">
                <li>고객 데이터 분석</li>
                <li>마케팅 자동화</li>
                <li>CRM 시스템 운영</li>
                <li>영업 성과 분석</li>
              </ul>
              <Button>디비 서비스 보기</Button>
            </DepartmentCard>
          </DepartmentContent>
        </DepartmentSection>
      </PromotionContainer>
    </Layout>
  );
};

export default Promotion;

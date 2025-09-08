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

const Section = styled.section<{ bgColor?: string }>`
  padding: 5rem 0;
  background: ${props => props.bgColor || 'white'};
`;

const SectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
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

const NewsCard = styled(motion.div)`
  background: var(--bg-secondary);
  border-radius: var(--border-radius);
  padding: 3rem;
  text-align: center;
  box-shadow: var(--shadow);
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 2rem;
  }

  .news-icon {
    font-size: 4rem;
    margin-bottom: 2rem;
    display: block;
  }

  h3 {
    font-size: 1.75rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 1rem;
  }

  p {
    color: var(--text-secondary);
    line-height: 1.6;
    font-size: 1.125rem;
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
  background: white;
  border-radius: var(--border-radius);
  padding: 2.5rem;
  box-shadow: var(--shadow);
  transition: var(--transition);

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-hover);
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }

  .benefit-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 1rem;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 1.25rem;
    }
  }

  .benefit-list {
    list-style: none;

    li {
      display: flex;
      align-items: flex-start;
      gap: 0.5rem;
      margin-bottom: 0.75rem;
      color: var(--text-secondary);
      line-height: 1.5;

      &::before {
        content: '•';
        color: var(--primary-color);
        font-weight: bold;
        margin-top: 0.1rem;
      }
    }
  }
`;

const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const EducationCard = styled(motion.div)`
  background: var(--bg-secondary);
  border-radius: var(--border-radius);
  padding: 2.5rem;
  box-shadow: var(--shadow);
  transition: var(--transition);

  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-hover);
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }

  .edu-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 1rem;
  }

  .edu-list {
    list-style: none;

    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 0.5rem;
      color: var(--text-secondary);

      &::before {
        content: '✓';
        color: var(--primary-color);
        font-weight: bold;
      }
    }
  }
`;

const DbGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const DbCard = styled(motion.div)`
  background: white;
  border-radius: var(--border-radius);
  padding: 2.5rem;
  box-shadow: var(--shadow);
  text-align: center;
  transition: var(--transition);

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-hover);
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }

  .db-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
    display: block;
  }

  .db-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 1rem;
  }

  .db-description {
    color: var(--text-secondary);
    line-height: 1.6;
  }
`;

const Promotion: React.FC = () => {
  return (
    <Layout>
      <SEO 
        title="홍보센터 - FINE"
        description="FINE 홍보센터입니다. 뉴스, 리더혜택, 교육부, 디비사업부의 다양한 프로그램과 서비스를 소개합니다."
        keywords="FINE, 홍보센터, 교육부, 디비사업부, 리더혜택, AI교육, 보험교육"
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
              파인본부의 다양한 혜택과 교육 프로그램, 
              그리고 최신 소식을 확인하세요.
            </motion.p>
          </HeroContent>
        </HeroSection>

        {/* 뉴스 섹션 */}
        <Section bgColor="white">
          <SectionContent>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <SectionTitle>
                <span className="highlight">뉴스</span>
              </SectionTitle>
              
              <NewsCard
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <span className="news-icon">🤖</span>
                <h3>AI 단체 교육</h3>
                <p>
                  최신 AI 기술을 활용한 단체 교육 프로그램을 진행합니다. 
                  인공지능을 통한 보험 상품 추천 및 고객 상담 기법을 
                  체계적으로 학습하실 수 있습니다.
                </p>
              </NewsCard>
            </motion.div>
          </SectionContent>
        </Section>

        {/* 파인본부 리더혜택 섹션 */}
        <Section bgColor="var(--bg-secondary)">
          <SectionContent>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <SectionTitle>
                파인본부 <span className="highlight">리더혜택</span>
              </SectionTitle>
              
              <BenefitsGrid>
                <BenefitCard
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="benefit-title">🏆 년도 대상 & 시상</div>
                  <ul className="benefit-list">
                    <li>파인본부 년도대상</li>
                    <li>월별 시책 및 시상</li>
                  </ul>
                </BenefitCard>

                <BenefitCard
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="benefit-title">🎓 워크샵 & 교육</div>
                  <ul className="benefit-list">
                    <li>파인본부 리더 워크샵 (상반기, 하반기)</li>
                    <li>파인본부 전체 워크샵(상반기, 하반기)</li>
                  </ul>
                </BenefitCard>

                <BenefitCard
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="benefit-title">🏖️ 특별 행사</div>
                  <ul className="benefit-list">
                    <li>본부 썸머 발대식</li>
                    <li>파인본부 클럽 운영</li>
                  </ul>
                </BenefitCard>
              </BenefitsGrid>
            </motion.div>
          </SectionContent>
        </Section>

        {/* 교육부 섹션 */}
        <Section bgColor="white">
          <SectionContent>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <SectionTitle>
                <span className="highlight">교육부</span>
              </SectionTitle>
              
              <EducationGrid>
                <EducationCard
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="edu-title">📚 기본 교육과정</div>
                  <ul className="edu-list">
                    <li>OJT 신입교육</li>
                    <li>6차월 레벨업 교육</li>
                    <li>리더교육</li>
                  </ul>
                </EducationCard>

                <EducationCard
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="edu-title">🎯 전문 교육과정</div>
                  <ul className="edu-list">
                    <li>마케팅이사 클럽교육</li>
                    <li>원수사 교육 (주2~3회)</li>
                    <li>디비센터 운영교육</li>
                  </ul>
                </EducationCard>

                <EducationCard
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  style={{ gridColumn: '1 / -1' }}
                >
                  <div className="edu-title">🌟 특화 교육과정</div>
                  <ul className="edu-list">
                    <li>외부교육(법인교육, 특화시장 접근교육)</li>
                  </ul>
                </EducationCard>
              </EducationGrid>
            </motion.div>
          </SectionContent>
        </Section>

        {/* 디비사업부 섹션 */}
        <Section bgColor="var(--bg-secondary)">
          <SectionContent>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <SectionTitle>
                <span className="highlight">디비사업부</span>
              </SectionTitle>
              
              <DbGrid>
                <DbCard
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="db-icon">🤝</span>
                  <div className="db-title">파인본부 제휴 업체 운영</div>
                  <div className="db-description">
                    제휴 1, 2, 3, 4 등 다양한 제휴 업체를 통한 
                    고품질 디비 제공
                  </div>
                </DbCard>

                <DbCard
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <span className="db-icon">📊</span>
                  <div className="db-title">본부 이관디비 제공</div>
                  <div className="db-description">
                    본부에서 직접 관리하는 
                    검증된 이관 디비 제공 서비스
                  </div>
                </DbCard>

                <DbCard
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <span className="db-icon">🏢</span>
                  <div className="db-title">본부 제휴 업체</div>
                  <div className="db-description">
                    파인본부만의 특별한 
                    제휴 업체 네트워크 활용
                  </div>
                </DbCard>

                <DbCard
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <span className="db-icon">🌐</span>
                  <div className="db-title">굿리치 본사 제휴 연계 디비 제공</div>
                  <div className="db-description">
                    굿리치 본사와 연계된 
                    프리미엄 디비 제공 서비스
                  </div>
                </DbCard>
              </DbGrid>
            </motion.div>
          </SectionContent>
        </Section>
      </PromotionContainer>
    </Layout>
  );
};

export default Promotion;

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout/Layout';
import SEO from '@/components/common/SEO';

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

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;

  img {
    max-width: 100%;
    height: auto;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
    transition: var(--transition);

    &:hover {
      box-shadow: var(--shadow-hover);
    }

    @media (max-width: 768px) {
      margin: 0 1rem;
    }
  }
`;


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
              <ImageContainer>
                <motion.img
                  src="/image/organization.png"
                  alt="FINE 조직도"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
              </ImageContainer>
            </motion.div>
          </OrganizationContent>
        </OrganizationSection>
      </OrganizationContainer>
    </Layout>
  );
};

export default OrganizationPage;

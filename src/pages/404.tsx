import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout/Layout';
import SEO from '@/components/common/SEO';
import Button from '@/components/common/Button';
import Link from 'next/link';

const ErrorContainer = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const ErrorContent = styled.div`
  text-align: center;
  max-width: 600px;

  .error-code {
    font-size: clamp(4rem, 8vw, 8rem);
    font-weight: 700;
    color: var(--primary-color);
    line-height: 1;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: clamp(1.5rem, 4vw, 2.5rem);
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.125rem;
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 2rem;
  }

  .button-group {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;

    @media (max-width: 480px) {
      flex-direction: column;
      align-items: center;
    }
  }
`;

const SuggestedLinks = styled.div`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 1rem;
  }

  .links-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-top: 1.5rem;

    @media (max-width: 480px) {
      grid-template-columns: 1fr;
    }
  }

  .link-card {
    padding: 1.5rem;
    background: var(--bg-secondary);
    border-radius: var(--border-radius);
    text-decoration: none;
    transition: var(--transition);
    border: 1px solid var(--border-color);

    &:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow);
      border-color: var(--primary-color);
    }

    .link-title {
      font-size: 1rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 0.5rem;
    }

    .link-desc {
      font-size: 0.875rem;
      color: var(--text-secondary);
      line-height: 1.4;
    }
  }
`;

const Custom404: React.FC = () => {
  const suggestedPages = [
    {
      title: '본부소개',
      description: 'FINE의 역사와 비전을 확인하세요',
      href: '/about'
    },
    {
      title: '홍보센터',
      description: '교육부와 디비사업부 소식을 확인하세요',
      href: '/promotion'
    },
    {
      title: '인재채용',
      description: 'FINE에서 함께할 인재를 찾고 있습니다',
      href: '/careers'
    },
    {
      title: '고객지원',
      description: '지점찾기, 상담신청 등 다양한 서비스',
      href: '/support'
    }
  ];

  return (
    <Layout>
      <SEO 
        title="페이지를 찾을 수 없습니다 - FINE"
        description="요청하신 페이지를 찾을 수 없습니다. FINE의 다른 서비스를 이용해보세요."
      />
      
      <ErrorContainer>
        <ErrorContent>
          <motion.div
            className="error-code"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            404
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            페이지를 찾을 수 없습니다
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            죄송합니다. 요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.<br />
            아래의 링크를 통해 다른 페이지를 방문해보세요.
          </motion.p>
          
          <motion.div
            className="button-group"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="/">
              <Button size="large">홈으로 돌아가기</Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="large">본부소개</Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <SuggestedLinks>
              <h3>추천 페이지</h3>
              <div className="links-grid">
                {suggestedPages.map((page, index) => (
                  <Link key={index} href={page.href} className="link-card">
                    <div className="link-title">{page.title}</div>
                    <div className="link-desc">{page.description}</div>
                  </Link>
                ))}
              </div>
            </SuggestedLinks>
          </motion.div>
        </ErrorContent>
      </ErrorContainer>
    </Layout>
  );
};

export default Custom404;

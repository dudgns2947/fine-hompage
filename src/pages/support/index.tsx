import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from '@/components/Layout/Layout';
import SEO from '@/components/common/SEO';
import Button from '@/components/common/Button';
import Icon, { IconType } from '@/components/common/Icon';
import { companyInfo } from '@/data/dummyData';

const SupportContainer = styled.div`
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

const ServicesSection = styled.section`
  padding: 5rem 0;
  background: white;
`;

const ServicesContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: none;
  }
`;

const ServiceCard = styled(motion.div)`
  background: var(--bg-secondary);
  border-radius: var(--border-radius);
  padding: 2.5rem;
  box-shadow: var(--shadow);
  transition: var(--transition);
  position: relative;
  overflow: hidden;
  text-align: center;

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
    transform: translateY(-10px);
    box-shadow: var(--shadow-hover);
  }

  .icon {
    font-size: 4rem;
    margin-bottom: 1.5rem;
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
    margin-bottom: 1rem;
  }

  .description {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 2rem;
  }

  .features {
    list-style: none;
    margin-bottom: 2rem;
    text-align: left;

    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 0.75rem;
      font-size: 0.95rem;
      color: var(--text-secondary);

      &::before {
        content: '✓';
        color: var(--primary-color);
        font-weight: bold;
        font-size: 1.1rem;
      }
    }
  }
`;

const ContactSection = styled.section`
  padding: 5rem 0;
  background: var(--bg-secondary);
`;

const ContactContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;

  h2 {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 2rem;

    .highlight {
      color: var(--primary-color);
    }
  }

  .contact-text {
    font-size: clamp(1rem, 2vw, 1.25rem);
    color: var(--text-secondary);
    line-height: 1.8;
    max-width: 600px;
    margin: 0 auto 3rem;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactCard = styled(motion.div)`
  background: white;
  border-radius: var(--border-radius);
  padding: 2rem;
  box-shadow: var(--shadow);
  text-align: center;

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
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 0.75rem;
  }

  .info {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 1.5rem;

    .highlight {
      color: var(--primary-color);
      font-weight: 600;
    }
  }
`;

const supportServices: Array<{
  icon: IconType;
  title: string;
  description: string;
  features: string[];
  link: string;
}> = [
  {
    icon: "mapmarker",
    title: '지점찾기',
    description: '전국 FINE 지점을 쉽게 찾아보세요.',
    features: [
      '실시간 지점 정보',
      '지도 기반 검색',
      '운영시간 안내',
      '연락처 정보',
      '길찾기 서비스'
    ],
    link: '/support/locations'
  },
  {
    icon: "handshake",
    title: '제휴 및 문의',
    description: '비즈니스 제휴나 일반 문의를 접수하세요.',
    features: [
      '온라인 문의 접수',
      '제휴 제안',
      '24시간 내 답변',
      '전문 상담사 배정',
      '맞춤형 솔루션'
    ],
    link: '/support/inquiry'
  },
  {
    icon: "route",
    title: '오시는길',
    description: 'FINE 본사로 오시는 길을 안내합니다.',
    features: [
      '상세 위치 정보',
      '대중교통 안내',
      '주차 정보',
      '운영시간',
      '연락처'
    ],
    link: '/support/directions'
  },
  {
    icon: "comments",
    title: '보험상담접수',
    description: '전문가와의 무료 보험 상담을 신청하세요.',
    features: [
      '무료 상담',
      '맞춤형 설계',
      '전문가 배정',
      '온라인/오프라인',
      '24시간 접수'
    ],
    link: '/support/consultation'
  }
];

const contactMethods: Array<{
  icon: IconType;
  title: string;
  info: string;
  highlight: string;
}> = [
  {
    icon: "phone",
    title: '전화 상담',
    info: '평일 09:00 - 18:00\n토요일 09:00 - 13:00',
    highlight: companyInfo.phone
  },
  {
    icon: "envelope",
    title: '이메일 문의',
    info: '24시간 접수 가능\n영업일 기준 24시간 내 답변',
    highlight: companyInfo.email
  },
  {
    icon: "mapmarker",
    title: '방문 상담',
    info: '평일 09:00 - 18:00\n사전 예약 필수',
    highlight: companyInfo.address
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

const Support: React.FC = () => {
  return (
    <Layout>
      <SEO 
        title="고객지원 - FINE"
        description="FINE의 다양한 고객지원 서비스를 이용하세요. 지점찾기, 문의접수, 보험상담 등 고객을 위한 종합 서비스를 제공합니다."
        keywords="FINE, 고객지원, 지점찾기, 문의, 보험상담, 고객센터"
      />
      
      <SupportContainer>
        <HeroSection>
          <HeroContent>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="highlight">고객지원</span>
            </motion.h1>
          </HeroContent>
        </HeroSection>

        <ServicesSection>
          <ServicesContent>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ServicesGrid>
                {supportServices.map((service, index) => (
                  <Link key={index} href={service.link}>
                    <ServiceCard
                      variants={cardVariants}
                      whileHover={{ 
                        scale: 1.05,
                        rotateY: 5,
                        transition: { duration: 0.3 }
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="icon"><Icon type={service.icon} /></span>
                      <h3>{service.title}</h3>
                      <p className="description">{service.description}</p>
                      
                      <ul className="features">
                        {service.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                      
                      <Button variant="outline" $fullWidth>
                        바로가기 →
                      </Button>
                    </ServiceCard>
                  </Link>
                ))}
              </ServicesGrid>
            </motion.div>
          </ServicesContent>
        </ServicesSection>

        <ContactSection>
          <ContactContent>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              빠른 <span className="highlight">연락 방법</span>
            </motion.h2>
            
            <motion.p
              className="contact-text"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              다양한 방법으로 FINE에 연락하실 수 있습니다.
              전문 상담사가 친절하게 도와드리겠습니다.
            </motion.p>
            
            <ContactGrid>
              {contactMethods.map((method, index) => (
                <ContactCard
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="icon"><Icon type={method.icon} /></span>
                  <h3>{method.title}</h3>
                  <div className="info">
                    {method.info.split('\n').map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                    <div className="highlight">{method.highlight}</div>
                  </div>
                  <Button variant="outline">
                    연결하기
                  </Button>
                </ContactCard>
              ))}
            </ContactGrid>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button size="large">
                <Icon type="rocketchat" style={{ marginRight: '0.5rem' }} />
                실시간 채팅 시작
              </Button>
            </motion.div>
          </ContactContent>
        </ContactSection>
      </SupportContainer>
    </Layout>
  );
};

export default Support;

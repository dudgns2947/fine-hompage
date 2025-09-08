import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { companyInfo } from '@/data/dummyData';
import Icon from '@/components/common/Icon';

const FooterContainer = styled.footer`
  background: var(--bg-dark);
  color: var(--text-light);
  padding: 3rem 0 1rem;
  margin-top: auto;

  @media (max-width: 768px) {
    padding: 2.5rem 0 1rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 0 1rem;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const FooterMain = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 3rem;
  margin-bottom: 2rem;

  @media (max-width: 1024px) {
    gap: 2.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    text-align: left;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    text-align: center;
  }
`;

const CompanySection = styled.div`
  h3 {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-color);
    margin-bottom: 1rem;

    img {
      width: 160px;
      height: 40px;
      opacity: 0.9;
    }

    @media (max-width: 768px) {
      justify-content: flex-start;
    }

    @media (max-width: 480px) {
      justify-content: center;
    }
  }

  p {
    color: #BDC3C7;
    line-height: 1.6;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 768px) {
    grid-column: 1;
  }
`;

const NavigationSection = styled.div`
  h4 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--text-light);
  }

  @media (max-width: 768px) {
    grid-column: 1 / -1;
  }

  @media (max-width: 480px) {
    grid-column: 1;
  }
`;

const NavGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: 1024px) {
    gap: 1.25rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`;

const NavColumn = styled.div`
  h5 {
    font-size: 0.95rem;
    font-weight: 500;
    margin-bottom: 0.4rem;
    color: var(--primary-color);

    @media (max-width: 480px) {
      font-size: 0.9rem;
      margin-bottom: 0.3rem;
    }

    a {
      color: var(--primary-color);
      text-decoration: none;
      transition: var(--transition);

      &:hover {
        color: var(--text-light);
      }
    }
  }

  ul {
    list-style: none;
    
    li {
      margin-bottom: 0.2rem;

      @media (max-width: 480px) {
        margin-bottom: 0.15rem;
      }
      
      a {
        color: #BDC3C7;
        text-decoration: none;
        font-size: 0.85rem;
        transition: var(--transition);

        @media (max-width: 480px) {
          font-size: 0.8rem;
        }
        
        &:hover {
          color: var(--primary-color);
        }
      }
    }
  }
`;

const ContactSection = styled.div`
  h4 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--text-light);

    @media (max-width: 480px) {
      font-size: 1.1rem;
    }
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.75rem;
    color: #BDC3C7;
    font-size: 0.9rem;
    line-height: 1.4;

    @media (max-width: 768px) {
      justify-content: flex-start;
    }

    @media (max-width: 480px) {
      font-size: 0.85rem;
      gap: 0.5rem;
      margin-bottom: 0.5rem;
      justify-content: center;
    }

    .icon {
      font-size: 1rem;
      color: var(--primary-color);
      flex-shrink: 0;

      @media (max-width: 480px) {
        font-size: 0.9rem;
      }

      svg {
        color: var(--primary-color);
      }
    }
  }

  @media (max-width: 768px) {
    grid-column: 2;
  }

  @media (max-width: 480px) {
    grid-column: 1;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }

  @media (max-width: 480px) {
    gap: 0.75rem;
    margin-top: 0.75rem;
    justify-content: center;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: rgba(255, 107, 53, 0.1);
    border-radius: 50%;
    color: var(--primary-color);
    text-decoration: none;
    transition: var(--transition);
    font-size: 1.2rem;

    @media (max-width: 480px) {
      width: 36px;
      height: 36px;
      font-size: 1.1rem;
    }

    svg {
      color: var(--primary-color);
    }

    &:hover {
      background: var(--primary-color);
      color: white;
      transform: translateY(-2px);

      svg {
        color: white;
      }
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #34495E;
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 0.9rem;
  color: #BDC3C7;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
    align-items: center;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    gap: 0.75rem;
  }

  > div:first-child {
    flex: 1;
    
    @media (max-width: 768px) {
      text-align: center;
    }
  }
`;

const PolicyLinks = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 0.75rem;
  }

  @media (max-width: 480px) {
    gap: 0.5rem;
  }

  a {
    color: #BDC3C7;
    text-decoration: none;
    transition: var(--transition);
    white-space: nowrap;

    @media (max-width: 480px) {
      font-size: 0.85rem;
    }

    &:hover {
      color: var(--primary-color);
    }
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterMain>
          <CompanySection>
            <h3>
              <Image 
                src="/image/logo.png" 
                alt="FINE 로고" 
                width={160} 
                height={40}
              />
            </h3>
            <p>{companyInfo.description}</p>
            <p>설립: {companyInfo.established}년</p>
            
            <SocialLinks>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon type="facebook" />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon type="instagram" />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon type="twitter" />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon type="linkedin" />
              </motion.a>
            </SocialLinks>
          </CompanySection>

          <NavigationSection>
            <h4>주요 서비스</h4>
            <NavGrid>
              <NavColumn>
                <h5><Link href="/about">본부소개</Link></h5>
                <ul>
                  <li><Link href="/about/identity">아이덴티티</Link></li>
                  <li><Link href="/about/history">히스토리</Link></li>
                  <li><Link href="/about/video">영상</Link></li>
                  <li><Link href="/about/organization">조직도</Link></li>
                </ul>
              </NavColumn>
              <NavColumn>
                <h5><Link href="/promotion">홍보센터</Link></h5>
                <ul>
                  <li><Link href="/promotion/education">교육부</Link></li>
                  <li><Link href="/promotion/db">디비사업부</Link></li>
                </ul>
              </NavColumn>
              <NavColumn>
                <h5><Link href="/careers">인재채용</Link></h5>
              </NavColumn>
              <NavColumn>
                <h5><Link href="/support">고객지원</Link></h5>
                <ul>
                  <li><Link href="/support/locations">지점찾기</Link></li>
                  <li><Link href="/support/inquiry">제휴 및 문의</Link></li>
                  <li><Link href="/support/directions">오시는길</Link></li>
                  <li><Link href="/support/consultation">보험상담접수</Link></li>
                </ul>
              </NavColumn>
            </NavGrid>
          </NavigationSection>

          <ContactSection>
            <h4>연락처</h4>
            <div className="contact-item">
              <span className="icon"><Icon type="mapmarker" /></span>
              <span>{companyInfo.address}</span>
            </div>
            <div className="contact-item">
              <span className="icon"><Icon type="phone" /></span>
              <span>{companyInfo.phone}</span>
            </div>
            <div className="contact-item">
              <span className="icon"><Icon type="envelope" /></span>
              <span>{companyInfo.email}</span>
            </div>
            <div className="contact-item">
              <span className="icon"><Icon type="clock" /></span>
              <span>평일 09:00 - 18:00</span>
            </div>
          </ContactSection>
        </FooterMain>

        <FooterBottom>
          <div>
            <div>© 2025 {companyInfo.fullName}({companyInfo.name}). All rights reserved.</div>
            <div style={{ fontSize: '0.8rem', marginTop: '0.5rem', color: '#95A5A6' }}>
              사업자등록번호: {companyInfo.businessNumber} | 대표: {companyInfo.representative}
            </div>
            <div style={{ fontSize: '0.8rem', marginTop: '0.25rem', color: '#95A5A6' }}>
              업태: {companyInfo.businessType} | 종목: {companyInfo.businessItem}
            </div>
          </div>
          <PolicyLinks>
            <Link href="/privacy">개인정보처리방침</Link>
            <Link href="/terms">이용약관</Link>
            <Link href="/sitemap">사이트맵</Link>
          </PolicyLinks>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;

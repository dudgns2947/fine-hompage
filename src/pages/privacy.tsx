/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout/Layout';
import SEO from '@/components/common/SEO';

const PrivacyContainer = styled.div`
  min-height: 100vh;
  background: var(--bg-primary);
`;

const HeroSection = styled.section`
  padding: 5rem 0 3rem;
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

const ContentSection = styled.section`
  padding: 4rem 0;
  max-width: 900px;
  margin: 0 auto;
  padding-left: 2rem;
  padding-right: 2rem;
`;

const PolicyCard = styled(motion.div)`
  background: white;
  border-radius: var(--border-radius);
  padding: 3rem;
  box-shadow: var(--shadow);
  margin-bottom: 2rem;
  border-left: 4px solid var(--primary-color);

  h2 {
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 1.5rem;
    
    .highlight {
      color: var(--primary-color);
    }
  }

  .intro-text {
    font-size: 1.125rem;
    color: var(--text-secondary);
    line-height: 1.8;
    margin-bottom: 2rem;
    padding: 1.5rem;
    background: var(--bg-secondary);
    border-radius: var(--border-radius);
  }

  .policy-list {
    list-style: none;
    padding: 0;
    
    li {
      font-size: 1.125rem;
      color: var(--text-primary);
      line-height: 1.8;
      margin-bottom: 1rem;
      padding: 1rem 1.5rem;
      background: var(--bg-secondary);
      border-radius: var(--border-radius);
      border-left: 3px solid var(--accent-color);
      
      .number {
        color: var(--primary-color);
        font-weight: 600;
        margin-right: 0.5rem;
      }
      
      .content {
        color: var(--text-secondary);
      }
    }
  }
`;

const CompanyInfo = styled(motion.div)`
  background: var(--bg-secondary);
  border-radius: var(--border-radius);
  padding: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;

  .company-name {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-color);
    margin-bottom: 1rem;
  }

  .company-details {
    font-size: 1rem;
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 0.5rem;
  }

  .website {
    font-size: 1.125rem;
    color: var(--primary-color);
    font-weight: 600;
    margin: 1rem 0;
  }

  .copyright {
    font-size: 0.9rem;
    color: var(--text-secondary);
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid var(--border-color);
  }
`;

const ImportantNotice = styled(motion.div)`
  background: linear-gradient(135deg, 
    rgba(255, 107, 53, 0.1) 0%, 
    rgba(255, 107, 53, 0.05) 100%
  );
  border: 1px solid rgba(255, 107, 53, 0.2);
  border-radius: var(--border-radius);
  padding: 2.5rem;
  margin-bottom: 2rem;

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-color);
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .notice-list {
    list-style: none;
    padding: 0;
    
    li {
      font-size: 1.125rem;
      color: var(--text-primary);
      line-height: 1.8;
      margin-bottom: 1.25rem;
      padding: 1.25rem;
      background: white;
      border-radius: var(--border-radius);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
      
      .number {
        color: var(--primary-color);
        font-weight: 600;
        margin-right: 0.5rem;
      }
    }
  }

  .ad-approval {
    background: rgba(255, 107, 53, 0.1);
    padding: 1rem 1.5rem;
    border-radius: var(--border-radius);
    text-align: center;
    font-size: 0.95rem;
    color: var(--text-primary);
    font-weight: 600;
    margin-top: 1.5rem;
  }
`;

const Privacy: React.FC = () => {
  return (
    <Layout>
      <SEO 
        title="개인정보 처리방침 - FINE"
        description="굿리치 FINE본부의 개인정보 수집·이용 동의 및 제3자 제공 동의에 관한 상세 내용을 확인하세요."
        keywords="개인정보보호, 개인정보처리방침, 굿리치, FINE, 개인정보동의"
      />
      
      <PrivacyContainer>
        <HeroSection>
          <HeroContent>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="highlight">개인정보</span> 처리방침
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              고객님의 소중한 개인정보 보호를 위한 굿리치의 약속입니다
            </motion.p>
          </HeroContent>
        </HeroSection>

        <ContentSection>
          <PolicyCard
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2><span className="highlight">개인정보</span> 수집•이용동의</h2>
            
            <div className="intro-text">
              굿리치 주식회사는 '개인정보 보호법', '신용정보의 이용 및 보호에 관한 법률', 
              '정보통신망 이용촉진 및 정보보호 등에 관한 법률' 등 관련 법규에 따라 
              귀하가 제출한 개인정보를 다음과 같이 수집 및 이용하고자 합니다.
            </div>

            <ul className="policy-list">
              <li>
                <span className="number">①</span>
                <strong>개인정보를 제공 받는 자:</strong>
                <div className="content">굿리치(주) 및 소속 보험설계사</div>
              </li>
              <li>
                <span className="number">②</span>
                <strong>개인정보 이용 목적:</strong>
                <div className="content">보험가입 상담 및 보험분석 컨설팅 관련 서비스 제공</div>
              </li>
              <li>
                <span className="number">③</span>
                <strong>제공하는 개인정보의 항목:</strong>
                <div className="content">이름, 주소, 성별, 생년월일, 휴대폰번호, 자녀수, 직업 등</div>
              </li>
              <li>
                <span className="number">④</span>
                <strong>개인정보 보유 및 이용 기간:</strong>
                <div className="content">1년</div>
              </li>
              <li>
                <span className="number">⑤</span>
                <strong>동의 거부시 처리:</strong>
                <div className="content">동의를 거부할 경우 신청 정보가 제공되지 않습니다.</div>
              </li>
              <li>
                <span className="number">⑥</span>
                <strong>동의철회:</strong>
                <div className="content">굿리치 고객센터 1670-9275</div>
              </li>
            </ul>
          </PolicyCard>

          <PolicyCard
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2><span className="highlight">개인정보</span> 제3자 제공 동의</h2>
            
            <div className="intro-text">
              굿리치 주식회사는 '개인정보 보호법', '신용정보의 이용 및 보호에 관한 법률', 
              '정보통신망 이용촉진 및 정보보호 등에 관한 법률' 등 관련 법규에 따라 
              귀하가 제출한 개인정보를 다음과 같이 제3자에게 제공하고자 합니다.
            </div>

            <ul className="policy-list">
              <li>
                <span className="number">①</span>
                <strong>개인정보를 제공 받는 자:</strong>
                <div className="content">굿리치(주) 소속 보험설계사</div>
              </li>
              <li>
                <span className="number">②</span>
                <strong>개인정보 이용 목적:</strong>
                <div className="content">보험가입 상담 및 보험분석 컨설팅 관련 서비스 제공</div>
              </li>
              <li>
                <span className="number">③</span>
                <strong>제공하는 개인정보의 항목:</strong>
                <div className="content">이름, 주소, 성별, 생년월일, 휴대폰번호, 자녀수, 직업 등</div>
              </li>
              <li>
                <span className="number">④</span>
                <strong>개인정보 보유 및 이용 기간:</strong>
                <div className="content">1년</div>
              </li>
              <li>
                <span className="number">⑤</span>
                <strong>동의 거부시 처리:</strong>
                <div className="content">동의를 거부할 경우 신청 정보가 제공되지 않습니다.</div>
              </li>
              <li>
                <span className="number">⑥</span>
                <strong>동의철회:</strong>
                <div className="content">굿리치 고객센터 1670-9275</div>
              </li>
            </ul>
          </PolicyCard>

          <CompanyInfo
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="company-name">굿리치보험대리점</div>
            <div className="company-details">대리점등록번호: 2006038313</div>
            <div className="website">http://goodrich.co.kr</div>
            <div className="copyright">
              ⓒ Copyright.2025. GoodRich co.Ltd. All Rights Reserved.
            </div>
          </CompanyInfo>

          <ImportantNotice
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>보험계약 관련 중요사항</h3>
            
            <div className="intro-text" style={{ margin: '0 0 1.5rem 0' }}>
              보험계약자가 기존 보험계약을 해지하고 새로운 보험계약을 체결하는 과정에서
            </div>

            <ul className="notice-list">
              <li>
                <span className="number">①</span>
                질병이력, 연령증가 등으로 가입이 거절되거나 보험료가 인상될 수 있습니다.
              </li>
              <li>
                <span className="number">②</span>
                가입상품에 따라 새로운 면책기간 적용 및 보장 제한 등 기타 불이익이 발생할 수 있습니다.
              </li>
              <li>
                <span className="number">③</span>
                본광고는 광고심의 기준을 준수하였으며, 유효기간은 심의일로부터 1년입니다.
              </li>
            </ul>

            <div className="ad-approval">
              리치-준법-2025-0000-0000-광고 (2025-07-14 ~ 2026-07-14)
            </div>
          </ImportantNotice>
        </ContentSection>
      </PrivacyContainer>
    </Layout>
  );
};

export default Privacy;

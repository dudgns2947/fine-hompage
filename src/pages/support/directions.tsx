import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout/Layout';
import SEO from '@/components/common/SEO';
import Button from '@/components/common/Button';
import { companyInfo } from '@/data/dummyData';
import Icon from '@/components/common/Icon';

const DirectionsContainer = styled.div`
  min-height: 100vh;
`;

const HeroSection = styled.section`
  padding: 3rem 0;
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
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 1rem;

    .highlight {
      color: var(--primary-color);
    }
  }

  p {
    font-size: clamp(1rem, 2vw, 1.125rem);
    color: var(--text-secondary);
    line-height: 1.6;
  }
`;

const MapSection = styled.section`
  padding: 3rem 0;
  background: white;
`;

const MapContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const MapContainer = styled.div`
  background: var(--bg-secondary);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  padding: 2rem;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  font-size: 1.125rem;
  text-align: center;

  .map-placeholder {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    .icon {
      font-size: 4rem;
      color: var(--primary-color);
    }

    h3 {
      color: var(--text-primary);
      margin-bottom: 0.5rem;
    }
  }
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoCard = styled(motion.div)`
  background: white;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 2rem;
  box-shadow: var(--shadow);

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    .icon {
      color: var(--primary-color);
    }
  }

  .info-item {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    margin-bottom: 1rem;
    
    &:last-child {
      margin-bottom: 0;
    }

    .icon {
      color: var(--primary-color);
      margin-top: 0.125rem;
      font-size: 1.1rem;
    }

    .content {
      flex: 1;

      .label {
        font-weight: 500;
        color: var(--text-primary);
        margin-bottom: 0.25rem;
      }

      .value {
        color: var(--text-secondary);
        line-height: 1.5;
      }
    }
  }
`;

const TransportSection = styled.section`
  padding: 4rem 0;
  background: var(--bg-secondary);
`;

const TransportContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  h2 {
    text-align: center;
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 3rem;

    .highlight {
      color: var(--primary-color);
    }
  }
`;

const TransportGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TransportCard = styled(motion.div)`
  background: white;
  border-radius: var(--border-radius);
  padding: 2rem;
  box-shadow: var(--shadow);
  text-align: center;

  .icon {
    font-size: 3rem;
    margin-bottom: 1rem;
    display: block;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 1rem;
  }

  .transport-info {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 1.5rem;

    .route {
      color: var(--primary-color);
      font-weight: 600;
      display: block;
      margin-bottom: 0.5rem;
    }
  }
`;

const transportMethods = [
  {
    icon: '🚇',
    title: '지하철',
    routes: ['2호선 강남역 3번 출구', '9호선 신논현역 1번 출구'],
    info: '강남역에서 도보 5분\n신논현역에서 도보 3분'
  },
  {
    icon: '🚌',
    title: '버스',
    routes: ['간선: 146, 360, 740', '지선: 3412, 6411'],
    info: '강남역 정류장 하차\n도보 5분 거리'
  },
  {
    icon: '🚗',
    title: '자가용',
    routes: ['네비게이션: 서울 강남구 테헤란로 123'],
    info: '지하 주차장 이용 가능\n2시간 무료 주차'
  }
];

const Directions: React.FC = () => {
  return (
    <Layout>
      <SEO 
        title="오시는길 - FINE"
        description="FINE 본사 위치와 교통편 안내입니다. 지하철, 버스, 자가용 이용 방법을 확인하세요."
        keywords="FINE, 오시는길, 위치, 교통편, 강남역, 주소"
      />
      
      <DirectionsContainer>
        <HeroSection>
          <HeroContent>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="highlight">오시는길</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              FINE 본사로 오시는 길을 안내해드립니다.
              다양한 교통편을 이용하여 편리하게 방문하세요.
            </motion.p>
          </HeroContent>
        </HeroSection>

        <MapSection>
          <MapContent>
            <MapContainer>
              <div className="map-placeholder">
                <div className="icon"><Icon type="map" /></div>
                <div>
                  <h3>지도 서비스</h3>
                  <p>실제 서비스에서는 Google Maps 또는<br />네이버 지도 API를 연동합니다</p>
                  <p style={{ color: 'var(--primary-color)', fontWeight: 600, marginTop: '1rem' }}>
                    <Icon type="mapmarker" style={{ marginRight: '0.5rem' }} />{companyInfo.address}
                  </p>
                </div>
              </div>
            </MapContainer>

            <InfoSection>
              <InfoCard
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3>
                  <span className="icon"><Icon type="building" /></span>
                  회사 정보
                </h3>
                <div className="info-item">
                  <span className="icon"><Icon type="mapmarker" /></span>
                  <div className="content">
                    <div className="label">주소</div>
                    <div className="value">{companyInfo.address}</div>
                  </div>
                </div>
                <div className="info-item">
                  <span className="icon"><Icon type="phone" /></span>
                  <div className="content">
                    <div className="label">전화번호</div>
                    <div className="value">{companyInfo.phone}</div>
                  </div>
                </div>
                <div className="info-item">
                  <span className="icon"><Icon type="envelope" /></span>
                  <div className="content">
                    <div className="label">이메일</div>
                    <div className="value">{companyInfo.email}</div>
                  </div>
                </div>
              </InfoCard>

              <InfoCard
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3>
                  <span className="icon">🕒</span>
                  운영 시간
                </h3>
                <div className="info-item">
                  <span className="icon">📅</span>
                  <div className="content">
                    <div className="label">평일</div>
                    <div className="value">09:00 - 18:00</div>
                  </div>
                </div>
                <div className="info-item">
                  <span className="icon">📅</span>
                  <div className="content">
                    <div className="label">토요일</div>
                    <div className="value">09:00 - 13:00</div>
                  </div>
                </div>
                <div className="info-item">
                  <span className="icon">📅</span>
                  <div className="content">
                    <div className="label">일요일/공휴일</div>
                    <div className="value">휴무</div>
                  </div>
                </div>
              </InfoCard>

              <div style={{ textAlign: 'center' }}>
                <Button size="large">
                  <Icon type="phone" style={{ marginRight: '0.5rem' }} />전화하기
                </Button>
              </div>
            </InfoSection>
          </MapContent>
        </MapSection>

        <TransportSection>
          <TransportContent>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="highlight">교통편</span> 안내
            </motion.h2>
            
            <TransportGrid>
              {transportMethods.map((method, index) => (
                <TransportCard
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="icon">{method.icon}</span>
                  <h3>{method.title}</h3>
                  <div className="transport-info">
                    {method.routes.map((route, idx) => (
                      <span key={idx} className="route">{route}</span>
                    ))}
                    {method.info.split('\n').map((line, idx) => (
                      <div key={idx}>{line}</div>
                    ))}
                  </div>
                  <Button variant="outline">
                    길찾기
                  </Button>
                </TransportCard>
              ))}
            </TransportGrid>
          </TransportContent>
        </TransportSection>
      </DirectionsContainer>
    </Layout>
  );
};

export default Directions;

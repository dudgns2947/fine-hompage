/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout/Layout';
import SEO from '@/components/common/SEO';
import Image from 'next/image';
import { FaCrown, FaUsers } from 'react-icons/fa';
import { IoIosArrowUp } from 'react-icons/io';

const IdentityContainer = styled.div`
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

const LogoSection = styled.section`
  padding: 5rem 0;
  background: white;
`;

const LogoContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const LogoDisplay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
  padding: 3rem;
  background: var(--bg-secondary);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);

  @media (max-width: 768px) {
    padding: 2rem;
    margin-bottom: 3rem;
  }

  img {
    max-width: 100%;
    height: auto;
    width: auto;

    @media (max-width: 768px) {
      max-width: 300px;
    }
  }
`;

const ClearSpaceSection = styled.section`
  padding: 5rem 0;
  background: white;
`;

const ClearSpaceContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const ClearSpaceDemo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  background: var(--bg-secondary);
  border-radius: var(--border-radius);
  margin-bottom: 2rem;
  position: relative;

  .logo-with-space {
    position: relative;
    
    img {
      max-width: 200px;
      height: auto;
    }

    &::before {
      content: '';
      position: absolute;
      top: -20px;
      left: -20px;
      right: -20px;
      bottom: -20px;
      border: 2px dashed var(--primary-color);
      opacity: 0.5;
    }
  }

  @media (max-width: 768px) {
    padding: 2rem;
    
    .logo-with-space img {
      max-width: 150px;
    }
  }
`;

const GraphicMotifSection = styled.section`
  padding: 5rem 0;
  background: var(--bg-secondary);
`;

const GraphicMotifContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const MotifDisplay = styled.div`
  margin: 3rem 0;
  
  .motif-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }
`;

const MotifCard = styled(motion.div)`
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
  
  .motif-icon {
    font-size: 4rem;
    margin-bottom: 1rem;
    display: block;
  }
  
  .motif-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
  }
  
  .motif-subtitle {
    font-size: 1rem;
    color: var(--primary-color);
    font-weight: 600;
    margin-bottom: 1rem;
    font-style: italic;
  }
  
  .motif-description {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 1.5rem;
    line-height: 1.4;
  }
  
  .motif-details {
    color: var(--text-secondary);
    line-height: 1.6;
    
    div {
      margin-bottom: 0.8rem;
      
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

const ColorSection = styled.section`
  padding: 5rem 0;
  background: white;
`;

const ColorContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const ColorPalette = styled.div`
  margin: 3rem 0;

  .main-colors {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .supporting-colors {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    .main-colors {
      grid-template-columns: 1fr;
    }
    
    .supporting-colors {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 480px) {
    .supporting-colors {
      grid-template-columns: 1fr;
    }
  }
`;

const ColorCard = styled.div<{ bgColor: string; textColor?: string }>`
  background: ${props => props.bgColor};
  color: ${props => props.textColor || 'white'};
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  text-align: center;

  .color-name {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .color-codes {
    font-size: 0.9rem;
    opacity: 0.9;
    
    div {
      margin-bottom: 0.25rem;
    }
  }
`;

const ConceptSection = styled.section`
  padding: 5rem 0;
  background: var(--bg-secondary);
`;

const ConceptContent = styled.div`
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

const ConceptGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 3rem;
  }
`;

const ConceptCard = styled(motion.div)`
  background: white;
  border-radius: var(--border-radius);
  padding: 2.5rem;
  box-shadow: var(--shadow);
  transition: var(--transition);
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-hover);
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }

  .icon {
    font-size: 3rem;
    margin-bottom: 1rem;
    display: block;
    text-align: center;
  }

  .number {
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--primary-color);
    margin-bottom: 1rem;
    text-align: center;
  }

  .title {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 1rem;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 1.25rem;
    }
  }

  .description {
    color: var(--text-secondary);
    line-height: 1.6;
    font-size: 1rem;
    text-align: center;

    .highlight-text {
      color: var(--primary-color);
      font-weight: 600;
    }
  }
`;

const PhilosophySection = styled.section`
  padding: 5rem 0;
  background: white;
`;

const PhilosophyContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const PhilosophyCard = styled(motion.div)`
  background: linear-gradient(135deg, 
    rgba(255, 107, 53, 0.1) 0%, 
    rgba(44, 62, 80, 0.05) 100%
  );
  border-radius: var(--border-radius);
  padding: 3rem;
  box-shadow: var(--shadow);
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    padding: 2rem;
  }

  .main-text {
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: 600;
    color: var(--text-primary);
    line-height: 1.4;
    margin-bottom: 1.5rem;

    .brand-name {
      color: var(--primary-color);
      font-weight: 700;
    }
  }

  .sub-text {
    font-size: clamp(1rem, 2vw, 1.25rem);
    color: var(--text-secondary);
    line-height: 1.6;
    font-style: italic;
  }
`;

const ValueSection = styled.section`
  padding: 5rem 0;
  background: var(--bg-secondary);
`;

const ValueContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const ValueGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ValueCard = styled(motion.div)`
  background: white;
  border-radius: var(--border-radius);
  padding: 2.5rem;
  box-shadow: var(--shadow);
  text-align: center;
  transition: var(--transition);

  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-hover);
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }

  .symbol {
    font-size: 4rem;
    margin-bottom: 1rem;
    display: block;
  }

  .title {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 1.25rem;
    }
  }

  .subtitle {
    color: var(--primary-color);
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .description {
    color: var(--text-secondary);
    line-height: 1.6;
  }
`;

const identityConcepts = [
  {
    title: "Dynamic",
    icon: FaCrown,
    iconColor: "#FFD700",
    description: "다이나믹(Dynamic)의 소문자 i 위 점은 왕관(Crown)으로 표현,",
    description2: "왕관은 최고를 향한 도전과 리더십을 상징하며,",
    description3: "역동적이고 탁월함을 추구하는 '다이나믹'의 정신을 나타냅니다.",
    imageUrl: "/image/dynamic.png"
  },
  {
    title: "FINE",
    icon: FaUsers,
    iconColor: "#0984E3",
    description: "파인(FINE)의 소문자 i는 사람 모양(Human figure)으로 형상화,",
    description2: "파인은 사람 중심의 가치를 담고 있으며,",
    description3: "한 사람 한 사람의 꿈과 성장이 모여",
    description4: "조직이 완성된다는 의미를 담고 있습니다.",
    imageUrl: "/image/fine.png"
  }
];

const motifData = [
  {
    icon: FaCrown,
    iconColor: "#FFD700",
    title: "왕관",
    subtitle: "Our Vision",
    description: "최고를 지향하는 조직",
    details: ["역동적인 성장", "업계의 리더십 강화"]
  },
  {
    icon: FaUsers,
    iconColor: "#0984E3",
    title: "사람",
    subtitle: "",
    description: "한 명 한 명의 가치 존중",
    details: ["한 사람 한 사람의 꿈이 모여" ,"다이나믹 파인이 완성됩니다", "우리는 사람을 소중히 하는", "조직 문화를 추구합니다"]
  },
  {
    icon: IoIosArrowUp,
    iconColor: "#00B894",
    title: "성장",
    subtitle: "",
    description: "함께 이루는 미래",
    details: ["끊임없는 도전과 성취", "지속 가능한 발전"]
  }
];

const Identity: React.FC = () => {
  return (
    <Layout>
      <SEO 
        title="아이덴티티 - FINE"
        description="Dynamic FINE의 브랜드 아이덴티티를 소개합니다. 최고를 지향하면서도 사람을 소중히 여기는 조직의 철학을 확인하세요."
        keywords="FINE, 아이덴티티, 브랜드, Dynamic FINE, 조직철학, 디자인컨셉"
      />
      
      <IdentityContainer>
        <HeroSection>
          <HeroContent>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="highlight">Dynamic FINE</span> 아이덴티티
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              최고를 지향하면서도, 사람 한 명 한 명을 소중히 여기는 <br/> 조직의 
              가치를 시각적으로 담아낸 브랜드 아이덴티티입니다.
            </motion.p>
          </HeroContent>
        </HeroSection>

        <LogoSection>
          <LogoContent>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <SectionTitle>
                <span className="highlight">Dynamic FINE</span> 로고
              </SectionTitle>
              
              <LogoDisplay>
                <Image
                  src="/image/logo.png"
                  alt="FINE 로고"
                  width={500}
                  height={200}
                  style={{ objectFit: 'contain' }}
                />
              </LogoDisplay>

              <p style={{ 
                fontSize: 'clamp(1rem, 2vw, 1.125rem)', 
                color: 'var(--text-secondary)', 
                lineHeight: '1.6',
                maxWidth: '700px',
                margin: '0 auto',
                textAlign: 'center'
              }}>
                가독성과 조화를 위해 제작된 전용 로고타입입니다. <br/>
                <span style={{ color: 'var(--primary-color)', fontWeight: '600' }}>
                  {' '}Dynamic
                </span>의 왕관과 
                <span style={{ color: 'var(--primary-color)', fontWeight: '600' }}>
                  {' '}FINE
                </span>의 사람 모양이 조직의 철학을 
                시각적으로 구현합니다.
              </p>
            </motion.div>
          </LogoContent>
        </LogoSection>

        <ConceptSection>
          <ConceptContent>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <SectionTitle>
                디자인 <span className="highlight">컨셉</span>
              </SectionTitle>
            </motion.div>

            <ConceptGrid>
              {identityConcepts.map((concept, index) => (
                <ConceptCard
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <concept.icon className="icon" style={{ fontSize: '3rem', color: concept.iconColor }} />
                  <div className="title">{concept.title}</div>
                  
                  <div style={{
                    background: 'var(--bg-secondary)',
                    padding: '2rem',
                    borderRadius: 'var(--border-radius)',
                    margin: '1.5rem 0',
                    textAlign: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '200px'
                  }}>
                    <Image
                      src={concept.imageUrl}
                      alt={`${concept.title} 컨셉 이미지`}
                      width={300}
                      height={150}
                      style={{ 
                        objectFit: 'contain',
                        maxWidth: '100%',
                        height: 'auto'
                      }}
                    />
                  </div>
                  
                  <div className="description">
                    <div style={{ marginBottom: '0.8rem', textAlign: 'center' }}>
                      {concept.description} <br/>
                    </div>
                    <div style={{ marginBottom: '0.8rem', textAlign: 'center' }}>
                      {concept.description2} <br/>
                    </div>
                    <div style={{ marginBottom: '0.8rem', textAlign: 'center' }}>
                      {concept.description3} <br/>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      {concept.description4} <br/>
                    </div>
                  </div>
                </ConceptCard>
              ))}
            </ConceptGrid>
          </ConceptContent>
        </ConceptSection>

        <ClearSpaceSection>
          <ClearSpaceContent>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <SectionTitle>
                Clear <span className="highlight">Space</span>
              </SectionTitle>
              
              <ClearSpaceDemo>
                <div className="logo-with-space">
                  <Image
                    src="/image/logo.png"
                    alt="FINE 로고"
                    width={400}
                    height={200}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </ClearSpaceDemo>

              <p style={{ 
                fontSize: 'clamp(1rem, 2vw, 1.125rem)', 
                color: 'var(--text-secondary)', 
                lineHeight: '1.6',
                maxWidth: '700px',
                margin: '0 auto'
              }}>
                로고의 가독성과 조화를 위해 제작된 전용 로고타입입니다. <br/>
                로고 주변에는 충분한 여백을 유지하여 브랜드 아이덴티티가 
                명확하게 인식될 수 있도록 합니다.
              </p>
            </motion.div>
          </ClearSpaceContent>
        </ClearSpaceSection>

        <GraphicMotifSection>
          <GraphicMotifContent>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <SectionTitle>
                Graphic <span className="highlight">Motif</span>
              </SectionTitle>
              
              <MotifDisplay>
                <div className="motif-grid">
                  {motifData.map((motif, index) => (
                    <MotifCard
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <motif.icon className="motif-icon" style={{ fontSize: '4rem', color: motif.iconColor }} />
                      <div className="motif-title">{motif.title}</div>
                      {motif.subtitle && (
                        <div className="motif-subtitle">{motif.subtitle}</div>
                      )}
                      <div className="motif-description">{motif.description}</div>
                      <div className="motif-details">
                        {motif.details.map((detail, detailIndex) => (
                          <div key={detailIndex}>{detail}</div>
                        ))}
                      </div>
                    </MotifCard>
                  ))}
                </div>
              </MotifDisplay>

              <p style={{ 
                fontSize: 'clamp(1rem, 2vw, 1.125rem)', 
                color: 'var(--text-secondary)', 
                lineHeight: '1.6',
                maxWidth: '800px',
                margin: '2rem auto 0',
                textAlign: 'center'
              }}>
                Dynamic FINE의 핵심 가치를 시각적으로 구현한 그래픽 모티프입니다. <br/>
                왕관, 사람, 성장이라는 3가지 요소로 우리 조직의 철학과 비전을 표현합니다.
              </p>
            </motion.div>
          </GraphicMotifContent>
        </GraphicMotifSection>

        <ColorSection>
          <ColorContent>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <SectionTitle>
                Color <span className="highlight">System</span>
              </SectionTitle>
              
              <ColorPalette>
                <div>
                  <h3 style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: '600', 
                    color: 'var(--text-primary)', 
                    marginBottom: '1.5rem',
                    textAlign: 'center'
                  }}>Main Color</h3>
                  <div className="main-colors">
                    <ColorCard bgColor="#FF6B35">
                      <div className="color-name">Fine Yellow</div>
                      <div className="color-codes">
                        <div>RGB: R:255 G:107 B:53</div>
                        <div>PANTONE: 2024 C</div>
                        <div>HEX: #FF6B35</div>
                      </div>
                    </ColorCard>
                    
                    <ColorCard bgColor="#7A7A7A" textColor="white">
                      <div className="color-name">Fine Gray</div>
                      <div className="color-codes">
                        <div>RGB: R:122 G:122 B:122</div>
                        <div>PANTONE: Cool Gray 9C</div>
                        <div>HEX: #7A7A7A</div>
                      </div>
                    </ColorCard>
                  </div>
                </div>

                <div>
                  <h3 style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: '600', 
                    color: 'var(--text-primary)', 
                    marginBottom: '1.5rem',
                    textAlign: 'center'
                  }}>Supporting Color</h3>
                  <div className="supporting-colors">
                    <ColorCard bgColor="#00B894">
                      <div className="color-name">Fine Green</div>
                      <div className="color-codes">
                        <div>RGB: R:0 G:184 B:148</div>
                        <div>HEX: #00B894</div>
                      </div>
                    </ColorCard>
                    
                    <ColorCard bgColor="#0984E3">
                      <div className="color-name">Fine Blue</div>
                      <div className="color-codes">
                        <div>RGB: R:9 G:132 B:227</div>
                        <div>HEX: #0984E3</div>
                      </div>
                    </ColorCard>
                    
                    <ColorCard bgColor="#6C5CE7">
                      <div className="color-name">Fine Purple</div>
                      <div className="color-codes">
                        <div>RGB: R:108 G:92 B:231</div>
                        <div>HEX: #6C5CE7</div>
                      </div>
                    </ColorCard>
                    
                    <ColorCard bgColor="#E84393">
                      <div className="color-name">Fine Red</div>
                      <div className="color-codes">
                        <div>RGB: R:232 G:67 B:147</div>
                        <div>HEX: #E84393</div>
                      </div>
                    </ColorCard>
                  </div>
                </div>
              </ColorPalette>

              <p style={{ 
                fontSize: 'clamp(1rem, 2vw, 1.125rem)', 
                color: 'var(--text-secondary)', 
                lineHeight: '1.6',
                maxWidth: '700px',
                margin: '2rem auto 0',
                textAlign: 'center'
              }}>
                Dynamic FINE의 고유한 색상 시스템으로 다양한 브랜드 터치포인트에서 <br/>
                일관된 브랜드 경험을 제공합니다.
              </p>
            </motion.div>
          </ColorContent>
        </ColorSection>

        <ValueSection>
          <ValueContent>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <SectionTitle>
                상징적 <span className="highlight">의미</span>
              </SectionTitle>
            </motion.div>

            <ValueGrid>
              <ValueCard
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <FaCrown className="symbol" style={{ fontSize: '4rem', color: '#FFD700' }} />
                <div className="title">왕관</div>
                <div className="subtitle">최고를 지향하는 도전</div>
                <div className="description">
                  최고의 목표를 향한 끊임없는 도전, 
                  리더로서의 자긍심
                </div>
              </ValueCard>

              <ValueCard
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <FaUsers className="symbol" style={{ fontSize: '4rem', color: '#0984E3' }} />
                <div className="title">사람</div>
                <div className="subtitle">구성원 중심의 소중함</div>
                <div className="description">
                  구성원의 소중함, 
                  사람을 중심에 둔 조직 문화
                </div>
              </ValueCard>
            </ValueGrid>
          </ValueContent>
        </ValueSection>

        <PhilosophySection>
          <PhilosophyContent>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <SectionTitle>
                조직 철학 <span className="highlight">반영</span>
              </SectionTitle>
            </motion.div>

            <PhilosophyCard
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="main-text">
                <span className="brand-name">Dynamic FINE</span>
                <br />
                "최고를 지향하면서도, 사람 한 명 <br />한 명을
                소중히 여기는 조직"
              </div>
              <div className="sub-text">
                이라는 가치를 시각적으로 담아낸 로고입니다.<br />
                이는 단순한 디자인을 넘어, 조직 철학과 비전을 담은<br />
                아이덴티티의 상징입니다.
              </div>
            </PhilosophyCard>
          </PhilosophyContent>
        </PhilosophySection>
      </IdentityContainer>
    </Layout>
  );
};

export default Identity;

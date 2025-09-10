import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout/Layout';
import SEO from '@/components/common/SEO';
import Button from '@/components/common/Button';
import Icon from '@/components/common/Icon';
import KakaoMap from '@/components/common/KakaoMap';
import { branches } from '@/data/dummyData';

const LocationsContainer = styled.div`
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

const SearchSection = styled.section`
  padding: 2rem 0;
  background: white;
  border-bottom: 1px solid var(--border-color);
`;

const SearchContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SearchForm = styled.div`
  display: flex;
  gap: 1rem;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 1rem;
  border: 2px solid var(--border-color);
  border-radius: var(--border-radius);
  font-size: 1rem;
  transition: var(--transition);

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.1);
  }

  &::placeholder {
    color: var(--text-secondary);
  }
`;

const MapSection = styled.section`
  padding: 3rem 0;
  background: var(--bg-secondary);
`;

const MapContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const MapWrapper = styled.div`
  background: white;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  overflow: hidden;
  min-height: 500px;
`;

const BranchList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const BranchCard = styled(motion.div)<{ selected: boolean }>`
  background: white;
  border: 2px solid ${({ selected }) => selected ? 'var(--primary-color)' : 'var(--border-color)'};
  border-radius: var(--border-radius);
  padding: 1.5rem;
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    border-color: var(--primary-color);
    box-shadow: var(--shadow);
  }

  .branch-header {
    display: flex;
    justify-content: between;
    align-items: flex-start;
    margin-bottom: 1rem;

    h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 0.5rem;
    }

    .distance {
      background: var(--primary-color);
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 15px;
      font-size: 0.875rem;
      font-weight: 500;
    }
  }

  .branch-info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .info-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.9rem;
      color: var(--text-secondary);

      .icon {
        color: var(--text-primary);
        opacity: 0.7;
      }
    }
  }

  .branch-actions {
    margin-top: 1rem;
    display: flex;
    gap: 0.5rem;
  }
`;

const FilterSection = styled.div`
  margin-bottom: 1rem;
`;

const FilterTabs = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const FilterTab = styled.button<{ active: boolean }>`
  padding: 0.5rem 1rem;
  border: 1px solid ${({ active }) => active ? 'var(--primary-color)' : 'var(--border-color)'};
  background: ${({ active }) => active ? 'var(--primary-color)' : 'white'};
  color: ${({ active }) => active ? 'white' : 'var(--text-primary)'};
  border-radius: 20px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    border-color: var(--primary-color);
    color: ${({ active }) => active ? 'white' : 'var(--primary-color)'};
  }
`;

const Locations: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBranch, setSelectedBranch] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState('전체');

  const regions = ['전체', '대전', '서울경기', '전주', '대구'];
  
  const filteredBranches = branches.filter(branch => {
    const matchesSearch = branch.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         branch.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         branch.manager.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === '전체' || branch.region === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const handleSearch = () => {
    // 검색 로직 구현
    console.log('검색:', searchTerm);
  };

  return (
    <Layout>
      <SEO 
        title="지점찾기 - FINE"
        description="가까운 FINE 본부를 찾아보세요. 전국 지점 정보와 위치, 연락처를 확인할 수 있습니다."
        keywords="FINE, 지점찾기, 지점위치, 지점정보, 매장찾기"
      />
      
      <LocationsContainer>
        <HeroSection>
          <HeroContent>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              가까운 <span className="highlight">FINE 본부</span>를<br />
              찾아보세요
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              전국 어디서나 편리하게 방문할 수 있는 FINE 본부를 찾아보세요.
            </motion.p>
          </HeroContent>
        </HeroSection>

        <SearchSection>
          <SearchContent>
            <SearchForm>
              <SearchInput
                type="text"
                placeholder="지역명 또는 지점명을 입력하세요"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
              <Button onClick={handleSearch}>
                <Icon type="search" style={{ marginRight: '0.5rem', color: 'white' }} />검색
              </Button>
            </SearchForm>
          </SearchContent>
        </SearchSection>

        <MapSection>
          <MapContent>
            <MapWrapper>
              <KakaoMap 
                branches={filteredBranches}
                selectedBranch={selectedBranch}
                onBranchSelect={setSelectedBranch}
                width="100%"
                height="500px"
              />
            </MapWrapper>

            <div>
              <FilterSection>
                <FilterTabs>
                  {regions.map((region) => {
                    const regionCount = region === '전체' 
                      ? branches.length 
                      : branches.filter(b => b.region === region).length;
                    
                    return (
                      <FilterTab
                        key={region}
                        active={activeFilter === region}
                        onClick={() => setActiveFilter(region)}
                      >
                        {region} ({regionCount})
                      </FilterTab>
                    );
                  })}
                </FilterTabs>
              </FilterSection>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1rem',
                padding: '0.5rem 0',
                borderBottom: '1px solid var(--border-color)'
              }}>
                <span style={{ 
                  fontSize: '0.9rem', 
                  color: 'var(--text-secondary)' 
                }}>
                  {activeFilter === '전체' ? '전체 지점' : `${activeFilter} 지역`} 
                  <strong style={{ color: 'var(--primary-color)', marginLeft: '0.5rem' }}>
                    {filteredBranches.length}개 지점
                  </strong>
                </span>
                <div style={{ 
                  fontSize: '0.8rem', 
                  color: 'var(--text-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem'
                }}>
                  {searchTerm && (
                    <span>
                      &quot;{searchTerm}&quot; 검색 결과
                    </span>
                  )}
                  {!searchTerm && (
                    <>
                      <Icon type="search" style={{ color: 'var(--text-secondary)', opacity: 0.7 }} />
                      지점을 클릭하면 지도에서 확인
                    </>
                  )}
                </div>
              </div>

              <BranchList>
                {filteredBranches.map((branch, index) => (
                  <BranchCard
                    key={branch.id}
                    selected={selectedBranch === branch.id}
                    onClick={() => setSelectedBranch(branch.id)}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="branch-header">
                      <div>
                        <h3>{branch.name}</h3>
                        <div style={{ 
                          fontSize: '0.8rem', 
                          color: 'var(--primary-color)', 
                          fontWeight: '600',
                          marginTop: '0.25rem'
                        }}>
                          {branch.region}
                        </div>
                      </div>
                      <div className="distance">
                        <Icon type="mapmarker" style={{ fontSize: '0.8rem', marginRight: '0.25rem', color: 'white' }} />
                        {branch.region}
                      </div>
                    </div>
                    
                    <div className="branch-info">
                      <div className="info-item">
                        <span className="icon"><Icon type="mapmarker" /></span>
                        <span style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>{branch.address}</span>
                      </div>
                      <div className="info-item">
                        <span className="icon"><Icon type="phone" /></span>
                        <span>{branch.phone}</span>
                      </div>
                      <div className="info-item">
                        <span className="icon">👤</span>
                        <span>{branch.manager}</span>
                      </div>
                    </div>

                    <div className="branch-actions" onClick={(e) => e.stopPropagation()}>
                      <Button variant="outline" size="small" onClick={() => {
                        window.open(`tel:${branch.phone}`);
                      }}>
                        <Icon type="phone" style={{ marginRight: '0.5rem', color: 'var(--primary-color)' }} />전화하기
                      </Button>
                      <Button variant="outline" size="small" onClick={() => {
                        window.open(`https://map.kakao.com/link/search/${encodeURIComponent(branch.address)}`);
                      }}>
                        <Icon type="directions" style={{ marginRight: '0.5rem', color: 'var(--primary-color)' }} />길찾기
                      </Button>
                    </div>
                  </BranchCard>
                ))}
              </BranchList>

              {filteredBranches.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{
                    textAlign: 'center',
                    padding: '3rem',
                    color: 'var(--text-secondary)'
                  }}
                >
                  <div style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--text-secondary)', opacity: 0.6 }}><Icon type="search" /></div>
                  <h3>검색 결과가 없습니다</h3>
                  <p>다른 검색어로 시도해보세요</p>
                </motion.div>
              )}
            </div>
          </MapContent>
        </MapSection>
      </LocationsContainer>
    </Layout>
  );
};

export default Locations;

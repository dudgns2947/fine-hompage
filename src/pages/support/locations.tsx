import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout/Layout';
import SEO from '@/components/common/SEO';
import Button from '@/components/common/Button';
import Icon from '@/components/common/Icon';
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

const MapContainer = styled.div`
  background: white;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  padding: 2rem;
  min-height: 500px;
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
  }
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
        color: var(--primary-color);
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

  const regions = ['전체', '서울', '부산', '대구', '인천'];
  
  const filteredBranches = branches.filter(branch => {
    const matchesSearch = branch.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         branch.address.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === '전체' || branch.address.includes(activeFilter);
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
        description="가까운 FINE 지점을 찾아보세요. 전국 지점 정보와 위치, 연락처를 확인할 수 있습니다."
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
              가까운 <span className="highlight">FINE 지점</span>을<br />
              찾아보세요
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              전국 어디서나 편리하게 방문할 수 있는 FINE 지점을 찾아보세요.
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
                <Icon type="search" style={{ marginRight: '0.5rem' }} />검색
              </Button>
            </SearchForm>
          </SearchContent>
        </SearchSection>

        <MapSection>
          <MapContent>
            <MapContainer>
              <div className="map-placeholder">
                <div className="icon"><Icon type="map" /></div>
                <div>
                  <h3>지도 서비스</h3>
                  <p>실제 서비스에서는 Google Maps 또는<br />네이버 지도 API를 연동합니다</p>
                  {selectedBranch && (
                    <p style={{ color: 'var(--primary-color)', fontWeight: 600, marginTop: '1rem' }}>
                      선택된 지점: {branches.find(b => b.id === selectedBranch)?.name}
                    </p>
                  )}
                </div>
              </div>
            </MapContainer>

            <div>
              <FilterSection>
                <FilterTabs>
                  {regions.map((region) => (
                    <FilterTab
                      key={region}
                      active={activeFilter === region}
                      onClick={() => setActiveFilter(region)}
                    >
                      {region}
                    </FilterTab>
                  ))}
                </FilterTabs>
              </FilterSection>

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
                      </div>
                      <div className="distance">1.2km</div>
                    </div>
                    
                    <div className="branch-info">
                      <div className="info-item">
                        <span className="icon"><Icon type="mapmarker" /></span>
                        <span>{branch.address}</span>
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

                    <div className="branch-actions">
                      <Button variant="outline" size="small">
                        <Icon type="phone" style={{ marginRight: '0.5rem' }} />전화하기
                      </Button>
                      <Button variant="outline" size="small">
                        <Icon type="directions" style={{ marginRight: '0.5rem' }} />길찾기
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
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}><Icon type="search" /></div>
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

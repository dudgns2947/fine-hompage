/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useLayoutEffect, useRef, useState, useCallback } from 'react';
import styled from 'styled-components';

// Kakao Map Types
declare global {
  interface Window {
    kakao: any;
  }
}

interface Branch {
  id: number;
  name: string;
  address: string;
  phone: string;
  manager: string;
  region: string;
  lat: number;
  lng: number;
}

interface KakaoMapProps {
  branches: Branch[];
  selectedBranch: number | null;
  onBranchSelect: (branchId: number) => void;
  width?: string;
  height?: string;
}

const MapContainer = styled.div<{ width: string; height: string }>`
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  position: relative;
`;

const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-secondary);
  color: var(--text-secondary);
  font-size: 1.125rem;
  border-radius: var(--border-radius);
  
  .loading-content {
    text-align: center;
    
    .loading-spinner {
      width: 40px;
      height: 40px;
      border: 4px solid var(--border-color);
      border-top: 4px solid var(--primary-color);
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin: 0 auto 1rem;
    }
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const ErrorContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-secondary);
  color: var(--text-secondary);
  font-size: 1rem;
  border-radius: var(--border-radius);
  text-align: center;
  padding: 2rem;
  
  .error-content {
    h3 {
      color: var(--primary-color);
      margin-bottom: 0.5rem;
    }
    
    p {
      line-height: 1.6;
    }
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
`;

const KakaoMap: React.FC<KakaoMapProps> = ({ 
  branches, 
  selectedBranch, 
  onBranchSelect, 
  width = '100%', 
  height = '500px' 
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [markers, setMarkers] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 카카오맵 SDK 로드
  const loadKakaoMapScript = useCallback(() => {
    return new Promise<void>((resolve, reject) => {
      console.log('카카오맵 SDK 로드 시도...');
      
      if (window.kakao && window.kakao.maps) {
        console.log('카카오맵 SDK 이미 로드됨');
        resolve();
        return;
      }

      // 환경변수 확인
      const apiKey = process.env.NEXT_PUBLIC_KAKAO_MAP_JAVASCRIPT_KEY;
      console.log('API 키 존재 여부:', !!apiKey);
      console.log('API 키 앞 4자리:', apiKey ? apiKey.substring(0, 4) + '...' : 'undefined');
      
      if (!apiKey) {
        reject(new Error('NEXT_PUBLIC_KAKAO_MAP_JAVASCRIPT_KEY가 설정되지 않았습니다.'));
        return;
      }

      const script = document.createElement('script');
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false&libraries=services`;
      script.async = true;
      
      script.onload = () => {
        console.log('카카오맵 스크립트 로드 완료');
        if (window.kakao && window.kakao.maps) {
          window.kakao.maps.load(() => {
            console.log('카카오맵 초기화 완료');
            resolve();
          });
        } else {
          reject(new Error('카카오맵 객체를 찾을 수 없습니다.'));
        }
      };
      
      script.onerror = (error) => {
        console.error('카카오맵 스크립트 로드 실패:', error);
        reject(new Error('카카오맵 SDK 로드에 실패했습니다. API 키나 도메인 설정을 확인해주세요.'));
      };
      
      // 중복 스크립트 방지
      const existingScript = document.querySelector('script[src*="dapi.kakao.com"]');
      if (existingScript) {
        console.log('카카오맵 스크립트가 이미 존재함');
        return;
      }
      
      document.head.appendChild(script);
      console.log('카카오맵 스크립트 태그 추가됨');
    });
  }, []);

  // 마커 생성
  const createMarkers = useCallback((kakaoMap: any) => {
    console.log('마커 생성 시작, 지점 수:', branches.length);
    
    // 기존 마커 제거 (현재 상태의 markers 사용)
    setMarkers(currentMarkers => {
      currentMarkers.forEach(marker => marker.setMap(null));
      return [];
    });

    const newMarkers: any[] = [];
    const bounds = new window.kakao.maps.LatLngBounds();

    branches.forEach((branch) => {
      console.log(`마커 생성: ${branch.name} (${branch.lat}, ${branch.lng})`);
      
      const markerPosition = new window.kakao.maps.LatLng(branch.lat, branch.lng);
      
      // 마커 이미지 설정 (선택된 지점은 다른 색상)
      const isSelected = selectedBranch === branch.id;
      const imageSrc = isSelected
        ? 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png'
        : 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png';
      
      const imageSize = new window.kakao.maps.Size(24, 35);
      const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize);

      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
        image: markerImage,
        title: branch.name
      });

      marker.setMap(kakaoMap);

      // 마커 클릭 이벤트
      window.kakao.maps.event.addListener(marker, 'click', () => {
        console.log('마커 클릭:', branch.name);
        onBranchSelect(branch.id);
      });

      // 인포윈도우 생성
      const infowindow = new window.kakao.maps.InfoWindow({
        content: `
          <div style="padding: 10px; font-size: 12px; width: 200px;">
            <strong style="color: #FF6B35;">${branch.name}</strong><br/>
            <span style="color: #666;">${branch.region}</span><br/>
            <span style="color: #333;">${branch.manager}</span><br/>
            <span style="color: #333;">${branch.phone}</span>
          </div>
        `
      });

      // 마커에 마우스오버 이벤트
      window.kakao.maps.event.addListener(marker, 'mouseover', () => {
        infowindow.open(kakaoMap, marker);
      });

      window.kakao.maps.event.addListener(marker, 'mouseout', () => {
        infowindow.close();
      });

      newMarkers.push(marker);
      bounds.extend(markerPosition);
    });

    // 모든 마커가 보이도록 지도 영역 조정
    if (branches.length > 0) {
      kakaoMap.setBounds(bounds);
      console.log('지도 영역 조정 완료');
    }

    setMarkers(newMarkers);
    console.log('마커 생성 완료, 총 마커 수:', newMarkers.length);
  }, [branches, selectedBranch, onBranchSelect]); // markers 의존성 제거

  // 지도 초기화 (재시도 로직 포함)
  const initializeMap = useCallback(async (retryCount = 0) => {
    const MAX_RETRIES = 3;
    
    try {
      console.log(`지도 초기화 시작 (시도 ${retryCount + 1}/${MAX_RETRIES + 1})`);
      setIsLoading(true);
      setError(null);

      await loadKakaoMapScript();

      // DOM 확인 (ref와 실제 DOM 모두 체크)
      const containerElement = mapContainer.current;
      console.log('Ref 상태:', !!containerElement);
      console.log('DOM에서 직접 찾기:', !!document.querySelector('#kakao-map-container'));
      
      if (!containerElement) {
        console.warn(`맵 컨테이너가 아직 준비되지 않음 (시도 ${retryCount + 1}/${MAX_RETRIES + 1})`);
        
        if (retryCount < MAX_RETRIES) {
          // 더 긴 지연시간으로 재시도
          setTimeout(() => {
            initializeMap(retryCount + 1);
          }, 200 + (retryCount * 100)); // 200ms, 300ms, 400ms로 점진적 증가
          return;
        } else {
          throw new Error(`맵 컨테이너를 찾을 수 없습니다. React ref 연결에 문제가 있습니다.\n재시도: ${retryCount + 1}번`);
        }
      }

      console.log('맵 컨테이너 확인 완료, 지도 생성 중...');
      // 대전을 기본 중심으로 설정 (가장 많은 지점이 있는 지역)
      const defaultCenter = new window.kakao.maps.LatLng(36.3664, 127.3447);
      
      const mapOptions = {
        center: defaultCenter,
        level: 8, // 적절한 줌 레벨
      };

      const kakaoMap = new window.kakao.maps.Map(mapContainer.current, mapOptions);
      console.log('지도 생성 완료');
      
      setMap(kakaoMap);

      // 마커 생성 (약간의 지연 후)
      setTimeout(() => {
        createMarkers(kakaoMap);
      }, 100);
      
    } catch (error) {
      console.error('카카오맵 초기화 실패:', error);
      setError(error instanceof Error ? error.message : '지도를 불러올 수 없습니다.');
    } finally {
      // 최종 시도이거나 성공한 경우에만 로딩 상태 해제
      if (retryCount >= MAX_RETRIES || mapContainer.current) {
        setIsLoading(false);
      }
    }
  }, [loadKakaoMapScript, createMarkers]);

  // 선택된 지점으로 지도 중심 이동
  useEffect(() => {
    if (map && selectedBranch) {
      console.log('선택된 지점으로 이동:', selectedBranch);
      const selectedBranchData = branches.find(b => b.id === selectedBranch);
      if (selectedBranchData) {
        const moveLatLng = new window.kakao.maps.LatLng(
          selectedBranchData.lat, 
          selectedBranchData.lng
        );
        map.setCenter(moveLatLng);
        map.setLevel(4); // 줌인
        
        // 마커 업데이트 (선택된 마커 강조를 위해)
        createMarkers(map);
      }
    }
  }, [selectedBranch, map, createMarkers, branches]); // branches 의존성 추가

  // 지점 데이터가 변경될 때 마커 업데이트
  useEffect(() => {
    if (map && branches.length > 0) {
      console.log('지점 데이터 변경으로 마커 업데이트');
      createMarkers(map);
    }
  }, [map, createMarkers, branches]); // branches 명시적 추가

  // DOM 렌더링 직후 지도 초기화 (useLayoutEffect 사용)
  useLayoutEffect(() => {
    console.log('DOM 렌더링 완료, 지도 초기화 준비');
    console.log('mapContainer.current 상태:', !!mapContainer.current);
    
    // 약간의 지연 후 초기화 (React의 ref 연결 완료 보장)
    const timer = setTimeout(() => {
      console.log('지도 초기화 시작 (useLayoutEffect)');
      initializeMap();
    }, 100); // 100ms로 증가

    // 클린업
    return () => {
      clearTimeout(timer);
      console.log('컴포넌트 언마운트, 마커 정리');
      setMarkers(currentMarkers => {
        currentMarkers.forEach(marker => marker.setMap(null));
        return [];
      });
    };
  }, [initializeMap]); // initializeMap만 의존성으로

  // 추가적인 안전장치 - 일반 useEffect로도 한번 더 시도
  useEffect(() => {
    // 5초 후에도 지도가 없다면 한번 더 시도
    const fallbackTimer = setTimeout(() => {
      if (!map && mapContainer.current) {
        console.log('Fallback: 5초 후 추가 초기화 시도');
        initializeMap();
      }
    }, 5000);

    return () => clearTimeout(fallbackTimer);
  }, [map, initializeMap]);

  return (
    <MapContainer width={width} height={height}>
      <div 
        ref={mapContainer} 
        id="kakao-map-container"
        style={{ width: '100%', height: '100%' }} 
      />

      {isLoading && (
        <Overlay>
          <LoadingContainer>
            <div className="loading-content">
              <div className="loading-spinner"></div>
              <div>카카오맵을 불러오는 중...</div>
              <div style={{ fontSize: '0.8rem', marginTop: '1rem', opacity: 0.7 }}>
                Console(F12)에서 로딩 과정을 확인하세요
              </div>
            </div>
          </LoadingContainer>
        </Overlay>
      )}

      {error && (
        <Overlay>
          <ErrorContainer>
            <div className="error-content">
              <h3>🗺️ 카카오맵 로딩 실패</h3>
              <p style={{ color: 'var(--primary-color)', fontWeight: 'bold', marginBottom: '1rem' }}>
                {error}
              </p>
              
              <div style={{ textAlign: 'left', fontSize: '0.9rem' }}>
                <h4 style={{ marginBottom: '0.5rem' }}>문제 해결 방법:</h4>
                <ol style={{ paddingLeft: '1.2rem', lineHeight: '1.6' }}>
                  <li><strong>페이지 새로고침</strong>을 2-3번 시도해보세요 (React ref 연결 문제)</li>
                  <li><strong>환경변수 확인:</strong> <code>.env.local</code>에 <code>NEXT_PUBLIC_KAKAO_MAP_JAVASCRIPT_KEY</code>가 설정되어 있는지 확인</li>
                  <li><strong>카카오 개발자 콘솔</strong>에서 다음 확인:
                    <ul style={{ marginTop: '0.3rem', paddingLeft: '1rem' }}>
                      <li>JavaScript 키가 올바른지</li>
                      <li>플랫폼 설정에 현재 도메인(localhost:3000) 등록</li>
                      <li>지도 API 서비스 활성화</li>
                    </ul>
                  </li>
                  <li><strong>브라우저 개발자 도구</strong> Console에서 &quot;Ref 상태&quot;와 &quot;DOM에서 직접 찾기&quot; 로그 확인</li>
                  <li><strong>React Strict Mode</strong>가 켜져있다면 일시적으로 끄고 테스트</li>
                </ol>
                
                <div style={{ 
                  marginTop: '1rem', 
                  padding: '0.5rem', 
                  background: 'rgba(255, 107, 53, 0.1)', 
                  borderRadius: '4px',
                  fontSize: '0.8rem'
                }}>
                  🔄 <strong>스마트 재시도:</strong> 점진적 지연시간(200ms→300ms→400ms)으로 4번 재시도<br/>
                  🔧 <strong>개선된 디버깅:</strong> useLayoutEffect + fallback 로직으로 안정성 강화<br/>
                  💡 <strong>개발 중이라면:</strong> F12 → Console에서 &quot;Ref 상태&quot; 로그를 확인해보세요!
                </div>
              </div>
            </div>
          </ErrorContainer>
        </Overlay>
      )}
    </MapContainer>
  );
};

export default KakaoMap;

import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '@/components/Layout/Layout';
import SEO from '@/components/common/SEO';
import Icon from '@/components/common/Icon';

const VideoContainer = styled.div`
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

const VideoSection = styled.section`
  padding: 5rem 0;
  background: white;
`;

const VideoContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const FeaturedVideo = styled.div`
  margin-bottom: 4rem;
`;

const VideoPlayer = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto 2rem;
  aspect-ratio: 16/9;
  background: var(--bg-secondary);
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--shadow-hover);

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--border-radius);
    
    &::-webkit-media-controls-panel {
      background-color: rgba(0, 0, 0, 0.8);
    }
    
    &::-webkit-media-controls-play-button,
    &::-webkit-media-controls-pause-button {
      background-color: var(--primary-color);
      border-radius: 50%;
    }
  }

  .video-placeholder {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--text-secondary);
    font-size: 1.125rem;

    .play-button {
      width: 80px;
      height: 80px;
      background: var(--primary-color);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 2rem;
      margin-bottom: 1rem;
      cursor: pointer;
      transition: var(--transition);

      &:hover {
        background: var(--primary-hover);
        transform: scale(1.1);
      }
    }
  }
`;

const VideoInfo = styled.div`
  text-align: center;
  max-width: 600px;
  margin: 0 auto;

  h2 {
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 1rem;
  }

  p {
    color: var(--text-secondary);
    line-height: 1.6;
  }
`;

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const VideoCard = styled(motion.div)`
  background: var(--bg-secondary);
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: var(--transition);
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-hover);
  }

  .thumbnail {
    position: relative;
    width: 100%;
    aspect-ratio: 16/9;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.5rem;

    .play-overlay {
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: var(--transition);

      .play-button {
        width: 60px;
        height: 60px;
        background: rgba(255, 255, 255, 0.9);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--primary-color);
        font-size: 1.5rem;
      }
    }

    &:hover .play-overlay {
      opacity: 1;
    }

    .duration {
      position: absolute;
      bottom: 10px;
      right: 10px;
      background: rgba(0, 0, 0, 0.7);
      color: white;
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      font-size: 0.875rem;
    }
  }

  .video-info {
    padding: 1.5rem;

    h3 {
      font-size: 1.125rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 0.5rem;
      line-height: 1.4;
    }

    p {
      color: var(--text-secondary);
      font-size: 0.9rem;
      line-height: 1.5;
      margin-bottom: 1rem;
    }

    .video-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.875rem;
      color: var(--text-secondary);

      .date {
        display: flex;
        align-items: center;
        gap: 0.25rem;
      }

      .views {
        display: flex;
        align-items: center;
        gap: 0.25rem;
      }
    }
  }
`;

const Modal = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;

  .modal-content {
    position: relative;
    width: 100%;
    max-width: 900px;
    aspect-ratio: 16/9;
    background: var(--bg-secondary);
    border-radius: var(--border-radius);
    overflow: hidden;

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: var(--border-radius);
      
      &::-webkit-media-controls-panel {
        background-color: rgba(0, 0, 0, 0.8);
      }
      
      &::-webkit-media-controls-play-button,
      &::-webkit-media-controls-pause-button {
        background-color: var(--primary-color);
        border-radius: 50%;
      }
    }

    .close-button {
      position: absolute;
      top: 1rem;
      right: 1rem;
      width: 40px;
      height: 40px;
      background: rgba(0, 0, 0, 0.7);
      border: none;
      border-radius: 50%;
      color: white;
      font-size: 1.25rem;
      cursor: pointer;
      z-index: 1001;
      transition: var(--transition);

      &:hover {
        background: rgba(0, 0, 0, 0.9);
      }
    }

    .video-placeholder {
      position: absolute;
      inset: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: var(--text-secondary);
      font-size: 1.25rem;

      .icon {
        font-size: 4rem;
        margin-bottom: 1rem;
        color: var(--primary-color);
      }
    }
  }
`;

// 새로 추가된 Intro 비디오들 (우선 노출)
const introVideos = [
  {
    id: 'intro-1',
    title: '본부 승격식',
    description: '파인본부 승격식 현장을 담은 영상입니다. 새로운 시작과 도전의 순간을 함께하세요.',
    duration: '2:30',
    date: '2025.01.20',
    views: '856',
    videoSrc: '/video/Intro-1.mp4'
  },
  {
    id: 'intro-2',
    title: '25년 시무식',
    description: '2025년 새해 시무식 영상입니다. 새로운 다짐과 비전을 공유합니다.',
    duration: '3:15',
    date: '2025.01.19',
    views: '742',
    videoSrc: '/video/Intro-2.mp4'
  },
  {
    id: 'intro-3',
    title: '파인본부 주제가',
    description: '파인본부만의 특별한 주제가를 소개합니다. 함께 부르며 하나 되는 순간을 경험하세요.',
    duration: '2:45',
    date: '2025.01.18',
    views: '623',
    videoSrc: '/video/Intro-3.mp4'
  },
  {
    id: 'intro-4',
    title: '파인본부 소개영상',
    description: '파인본부의 모든 것을 담은 공식 소개영상입니다. 우리의 가치와 미래를 확인하세요.',
    duration: '4:12',
    date: '2025.01.17',
    views: '1,234',
    videoSrc: '/video/careerIntroduce.mp4'
  }
];

// 기존 비디오들
const videos = [
  {
    id: 1,
    title: '회사 소개 영상',
    description: 'FINE의 비전과 미션, 그리고 우리가 추구하는 가치를 소개합니다.',
    duration: '3:24',
    date: '2024.01.15',
    views: '1,234'
  },
  {
    id: 2,
    title: '보험 상품 안내',
    description: '다양한 보험 상품의 특징과 혜택을 쉽게 설명해드립니다.',
    duration: '5:18',
    date: '2024.01.10',
    views: '2,567'
  },
  {
    id: 3,
    title: '고객 성공 사례',
    description: 'FINE과 함께한 고객들의 실제 경험담을 들어보세요.',
    duration: '4:42',
    date: '2024.01.05',
    views: '1,890'
  },
  {
    id: 4,
    title: '보험금 청구 가이드',
    description: '보험금 청구 절차를 단계별로 안내해드립니다.',
    duration: '6:15',
    date: '2023.12.28',
    views: '3,421'
  },
  {
    id: 5,
    title: '디지털 서비스 소개',
    description: 'FINE의 혁신적인 디지털 서비스를 소개합니다.',
    duration: '2:56',
    date: '2023.12.20',
    views: '987'
  },
  {
    id: 6,
    title: '사회공헌 활동',
    description: 'FINE의 다양한 사회공헌 활동을 소개합니다.',
    duration: '4:33',
    date: '2023.12.15',
    views: '1,654'
  }
];

const VideoPage: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | number | null>(null);

  const openModal = (videoId: string | number) => {
    setSelectedVideo(videoId);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  // 선택된 비디오 정보 가져오기
  const getSelectedVideoInfo = () => {
    if (typeof selectedVideo === 'string') {
      return introVideos.find(v => v.id === selectedVideo);
    } else if (typeof selectedVideo === 'number') {
      return videos.find(v => v.id === selectedVideo);
    }
    return null;
  };

  return (
    <Layout>
      <SEO 
        title="회사 영상 - FINE"
        description="FINE의 다양한 영상 콘텐츠를 확인하세요. 회사 소개, 상품 안내, 고객 사례 등 다양한 영상을 제공합니다."
        keywords="FINE, 회사영상, 소개영상, 상품안내, 고객사례"
      />
      
      <VideoContainer>
        <HeroSection>
          <HeroContent>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              FINE <span className="highlight">영상</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              FINE의 다양한 이야기를 영상으로 만나보세요.
              회사 소개부터 상품 안내까지 한눈에 확인할 수 있습니다.
            </motion.p>
          </HeroContent>
        </HeroSection>

        <VideoSection>
          <VideoContent>
            {/* 새로운 Intro 비디오 섹션 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{ marginBottom: '4rem' }}
            >
              <h2 style={{ 
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', 
                fontWeight: '600', 
                color: 'var(--text-primary)', 
                textAlign: 'center', 
                marginBottom: '3rem' 
              }}>
                최신 <span style={{ color: 'var(--primary-color)' }}>소개영상</span>
              </h2>
              <VideoGrid>
                {introVideos.map((video, index) => (
                  <VideoCard
                    key={video.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => openModal(video.id)}
                  >
                    <div className="thumbnail">
                      <Icon type="play" />
                      <div className="play-overlay">
                        <div className="play-button">▶</div>
                      </div>
                      <div className="duration">{video.duration}</div>
                    </div>
                    <div className="video-info">
                      <h3>{video.title}</h3>
                      <p>{video.description}</p>
                      <div className="video-meta">
                        <div className="date">
                          📅 {video.date}
                        </div>
                        <div className="views">
                          <Icon type="star" style={{ marginRight: '0.25rem' }} />{video.views}
                        </div>
                      </div>
                    </div>
                  </VideoCard>
                ))}
              </VideoGrid>
            </motion.div>

            <FeaturedVideo>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <VideoPlayer>
                  <video
                    width="100%"
                    height="100%"
                    controls
                    style={{
                      borderRadius: 'var(--border-radius)',
                      objectFit: 'cover'
                    }}
                  >
                    <source src="/video/main.mp4" type="video/mp4" />
                    브라우저가 비디오를 지원하지 않습니다.
                  </video>
                </VideoPlayer>
                <VideoInfo>
                  <h2>FINE과 함께하는 안전한 미래</h2>
                  <p>
                    FINE의 비전과 미션, 그리고 고객을 위한 다양한 서비스를 
                    소개하는 메인 영상입니다.<br/> 우리가 추구하는 가치와 
                    고객 중심의 서비스 철학을 확인해보세요.
                  </p>
                </VideoInfo>
              </motion.div>
            </FeaturedVideo>

          </VideoContent>
        </VideoSection>

        <AnimatePresence>
          {selectedVideo && (
            <Modal
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                className="modal-content"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className="close-button" onClick={closeModal}>
                  ✕
                </button>
                {(() => {
                  const videoInfo = getSelectedVideoInfo();
                  
                  // Intro 비디오들 (실제 비디오 파일 재생)
                  if (typeof selectedVideo === 'string' && videoInfo && 'videoSrc' in videoInfo) {
                    return (
                      <video
                        width="100%"
                        height="100%"
                        controls
                        autoPlay
                        poster="/image/logo.png"
                        style={{
                          borderRadius: 'var(--border-radius)',
                          objectFit: 'cover'
                        }}
                      >
                        <source src={videoInfo.videoSrc} type="video/mp4" />
                        브라우저가 비디오를 지원하지 않습니다.
                      </video>
                    );
                  }
                  
                  // 메인 비디오 (기존 main.mp4)
                  if (selectedVideo === 1) {
                    return (
                      <video
                        width="100%"
                        height="100%"
                        controls
                        autoPlay
                        poster="/image/logo.png"
                        style={{
                          borderRadius: 'var(--border-radius)',
                          objectFit: 'cover'
                        }}
                      >
                        <source src="/video/main.mp4" type="video/mp4" />
                        브라우저가 비디오를 지원하지 않습니다.
                      </video>
                    );
                  }
                  
                  // 기타 비디오들 (플레이스홀더)
                  return (
                    <div className="video-placeholder">
                      <div className="icon"><Icon type="video" /></div>
                      <div>
                        <h3>영상 재생</h3>
                        <p>실제 서비스에서는 YouTube 또는<br />Vimeo 영상이 재생됩니다</p>
                        <p style={{ color: 'var(--primary-color)', fontWeight: 600, marginTop: '1rem' }}>
                          선택된 영상: {videoInfo?.title}
                        </p>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </Modal>
          )}
        </AnimatePresence>
      </VideoContainer>
    </Layout>
  );
};

export default VideoPage;

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Layout from '@/components/Layout/Layout';
import SEO from '@/components/common/SEO';

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

const GallerySection = styled.section`
  padding: 5rem 0;
  background: white;
`;

const GalleryContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const GalleryCard = styled(motion.div)`
  background: var(--bg-secondary);
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: var(--transition);
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-hover);
  }

  .gallery-thumbnail {
    position: relative;
    width: 100%;
    aspect-ratio: 16/9;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: var(--transition);
    }

    &:hover img {
      transform: scale(1.05);
    }

    .media-count {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: rgba(0, 0, 0, 0.8);
      color: white;
      padding: 0.5rem 0.75rem;
      border-radius: 20px;
      font-size: 0.875rem;
      font-weight: 600;
    display: flex;
    align-items: center;
      gap: 0.25rem;
    }

    .play-overlay {
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: var(--transition);

      .play-button {
        width: 70px;
        height: 70px;
        background: var(--primary-color);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 2rem;
        transform: scale(0.8);
        transition: var(--transition);
      }
    }

    &:hover .play-overlay {
      opacity: 1;
      
      .play-button {
        transform: scale(1);
      }
    }
  }

  .gallery-info {
    padding: 1.5rem;

    h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 0.75rem;
    }

    p {
      color: var(--text-secondary);
      font-size: 0.95rem;
      line-height: 1.6;
      margin-bottom: 1rem;
    }

    .gallery-meta {
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

      .type {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        font-weight: 500;
      }
    }
  }
`;

const MediaModal = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;

  .modal-content {
    position: relative;
    width: 100%;
    max-width: 1200px;
    max-height: 90vh;
    background: white;
    border-radius: var(--border-radius);
    overflow: hidden;

    .modal-header {
      padding: 1.5rem 2rem;
      border-bottom: 1px solid #eee;
      display: flex;
      justify-content: between;
      align-items: center;
      
      h2 {
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--text-primary);
        margin: 0;
      }
      
      .close-button {
        position: absolute;
        top: 1.5rem;
        right: 2rem;
        width: 32px;
        height: 32px;
        background: none;
        border: none;
        font-size: 1.5rem;
        color: var(--text-secondary);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: var(--transition);
        
        &:hover {
          background: var(--bg-secondary);
          color: var(--text-primary);
        }
      }
    }
    
    .modal-body {
      padding: 2rem;
      max-height: calc(90vh - 100px);
      overflow-y: auto;
    }
  }
`;

const MediaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

const MediaItem = styled(motion.div)<{ $clickable?: boolean }>`
  position: relative;
  aspect-ratio: 16/9;
  border-radius: var(--border-radius);
  overflow: hidden;
  cursor: ${props => props.$clickable ? 'pointer' : 'default'};
  box-shadow: var(--shadow);
  transition: var(--transition);
  
  &:hover {
    transform: ${props => props.$clickable ? 'translateY(-2px)' : 'none'};
    box-shadow: ${props => props.$clickable ? 'var(--shadow-hover)' : 'var(--shadow)'};
  }
  
  img, video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .media-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: var(--transition);
    
    .play-icon {
      width: 40px;
      height: 40px;
      background: var(--primary-color);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 1.25rem;
    }
  }
  
  &:hover .media-overlay {
    opacity: 1;
  }
  
  .media-type {
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 0.25rem 0.5rem;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 500;
  }
`;

const FullMediaModal = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
  padding: 2rem;
  
  .full-media-content {
    position: relative;
    max-width: 90vw;
    max-height: 90vh;
    
    img, video {
      max-width: 100%;
      max-height: 90vh;
      object-fit: contain;
      border-radius: var(--border-radius);
    }

    .close-button {
      position: absolute;
      top: -3rem;
      right: 0;
      width: 40px;
      height: 40px;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      color: white;
      font-size: 1.25rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: var(--transition);
      
      &:hover {
        background: rgba(255, 255, 255, 0.2);
      }
    }
  }
`;

// 비디오 썸네일 생성 유틸리티 함수
const generateVideoThumbnail = (videoSrc: string, time: number = 1): Promise<string> => {
  return new Promise((resolve, reject) => {
    const video = document.createElement('video');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // 타임아웃 설정 (10초 후 실패 처리)
    const timeout = setTimeout(() => {
      console.warn(`Thumbnail generation timeout for ${videoSrc}`);
      reject(new Error('Thumbnail generation timeout'));
    }, 10000);
    
    video.addEventListener('loadedmetadata', () => {
      console.log(`Video metadata loaded for ${videoSrc}:`, {
        width: video.videoWidth,
        height: video.videoHeight,
        duration: video.duration
      });
      
      // 캔버스 크기를 비디오 크기에 맞춤
      canvas.width = video.videoWidth || 640;
      canvas.height = video.videoHeight || 360;
      
      // 특정 시점으로 이동 (더 안전한 시점 선택)
      const seekTime = Math.min(time, Math.max(0.1, video.duration * 0.05)); // 5% 지점 또는 최소 0.1초
      console.log(`Seeking to ${seekTime}s for ${videoSrc}`);
      video.currentTime = seekTime;
    });
    
    video.addEventListener('seeked', () => {
      if (ctx && canvas.width > 0 && canvas.height > 0) {
        try {
          // 비디오 프레임을 캔버스에 그림
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          
          // 캔버스를 데이터 URL로 변환
          const thumbnail = canvas.toDataURL('image/jpeg', 0.8);
          
          // 생성된 썸네일이 유효한지 확인
          if (thumbnail && thumbnail.length > 100) { // 최소 크기 확인
            console.log(`Thumbnail generated successfully for ${videoSrc}`);
            clearTimeout(timeout);
            resolve(thumbnail);
          } else {
            console.warn(`Generated thumbnail seems invalid for ${videoSrc}`);
            clearTimeout(timeout);
            reject(new Error('Invalid thumbnail generated'));
          }
        } catch (drawError) {
          console.error(`Canvas draw error for ${videoSrc}:`, drawError);
          clearTimeout(timeout);
          reject(new Error(`Canvas draw error: ${drawError}`));
        }
      } else {
        console.error(`Canvas context or size invalid for ${videoSrc}`);
        clearTimeout(timeout);
        reject(new Error('Canvas context not available or invalid size'));
      }
    });
    
    video.addEventListener('error', (e) => {
      console.error(`Video load error for ${videoSrc}:`, e);
      clearTimeout(timeout);
      reject(new Error(`Video load error: ${e.type}`));
    });
    
    video.addEventListener('loadstart', () => {
      console.log(`Loading started for ${videoSrc}`);
    });
    
    video.addEventListener('loadeddata', () => {
      console.log(`Video data loaded for ${videoSrc}`);
    });
    
    // 비디오 로드 시작
    video.muted = true; // 자동 재생을 위해 음소거
    video.playsInline = true;
    video.preload = 'metadata';
    
    // CORS 설정 제거 (로컬 파일의 경우 문제가 될 수 있음)
    // video.crossOrigin = 'anonymous';
    
    console.log(`Starting thumbnail generation for ${videoSrc}`);
    video.src = videoSrc;
    video.load();
  });
};

// 썸네일 캐시
const thumbnailCache = new Map<string, string>();

// 동적 비디오 썸네일 컴포넌트
const VideoThumbnail: React.FC<{
  src: string;
  alt: string;
  onClick?: () => void;
  className?: string;
}> = ({ src, alt, onClick, className }) => {
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadThumbnail = async () => {
      // 캐시에서 썸네일 확인
      if (thumbnailCache.has(src)) {
        setThumbnail(thumbnailCache.get(src)!);
        setLoading(false);
        return;
      }

      try {
        const thumbnailUrl = await generateVideoThumbnail(src, 1);
        thumbnailCache.set(src, thumbnailUrl);
        setThumbnail(thumbnailUrl);
      } catch (err) {
        console.warn(`Failed to generate thumbnail for ${src}:`, err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    loadThumbnail();
  }, [src]);

  if (loading) {
    return (
      <div 
        className={className}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          fontSize: '3rem',
          position: 'relative'
        }}
      >
        <div style={{
          fontSize: '3rem',
          opacity: loading ? 0.7 : 1,
          transition: 'opacity 0.5s ease-in-out'
        }}>
          🎬
        </div>
        <div style={{
          position: 'absolute',
          bottom: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'rgba(0, 0, 0, 0.8)',
          color: 'white',
          padding: '0.25rem 0.75rem',
          borderRadius: '12px',
          fontSize: '0.75rem',
          fontWeight: '500',
          whiteSpace: 'nowrap'
        }}>
          썸네일 생성중...
        </div>
      </div>
    );
  }

  if (error || !thumbnail) {
    return (
      <div 
        className={className}
        onClick={onClick}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)',
          color: 'white',
          fontSize: '3rem',
          cursor: 'pointer',
          position: 'relative'
        }}
      >
        <div style={{ marginBottom: '0.5rem' }}>🎥</div>
        <div style={{
          fontSize: '0.875rem',
          textAlign: 'center',
          opacity: 0.9,
          fontWeight: '500'
        }}>
          VIDEO
        </div>
        <div className="media-overlay" style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: 0,
          transition: 'var(--transition)'
        }}>
          <div className="play-icon" style={{
            width: '50px',
            height: '50px',
            background: 'var(--primary-color)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '1.5rem'
          }}>▶</div>
        </div>
        <div className="media-type" style={{
          position: 'absolute',
          top: '0.5rem',
          left: '0.5rem',
          background: 'rgba(0, 0, 0, 0.8)',
          color: 'white',
          padding: '0.25rem 0.5rem',
          borderRadius: '12px',
          fontSize: '0.75rem',
          fontWeight: '600'
        }}>
          🎬 VIDEO
        </div>
      </div>
    );
  }

  return (
    <div 
      className={className} 
      onClick={onClick} 
      style={{ 
        position: 'relative', 
        cursor: onClick ? 'pointer' : 'default',
        width: '100%',
        height: '100%'
      }}
    >
      <img 
        src={thumbnail} 
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
        onError={(e) => {
          console.error('Thumbnail load error:', e);
          setError(true);
        }}
      />
      {onClick && (
        <div className="media-overlay" style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: 0,
          transition: 'var(--transition)'
        }}>
          <div className="play-icon" style={{
            width: '40px',
            height: '40px',
            background: 'var(--primary-color)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '1.25rem'
          }}>▶</div>
        </div>
      )}
      <div className="media-type" style={{
        position: 'absolute',
        top: '0.5rem',
        left: '0.5rem',
        background: 'rgba(0, 0, 0, 0.7)',
        color: 'white',
        padding: '0.25rem 0.5rem',
        borderRadius: '12px',
        fontSize: '0.75rem',
        fontWeight: 500
      }}>
        🎬
      </div>
    </div>
  );
};

// 갤러리 데이터 정의
interface MediaItem {
  id: string;
  type: 'image' | 'video';
  src: string;
  thumbnail?: string;
}

interface GalleryCategory {
  id: string;
  title: string;
  description: string;
  date: string;
  thumbnail: string;
  thumbnailType?: 'image' | 'video';
  mediaCount: number;
  items: MediaItem[];
}

const galleryData: GalleryCategory[] = [
  {
    id: '2025-opening',
    title: '2025년 시무식',
    description: '2025년 새해를 맞이하여 진행된 시무식과 본부 승격식의 생생한 현장을 담았습니다.',
    date: '2025.01.20',
    thumbnail: '/image/opening/2025opening-1.jpg',
    mediaCount: 10,
    items: [
      // 이미지들 (실제 파일명 확인됨)
      { id: 'opening-img-1', type: 'image', src: '/image/opening/2025opening-1.jpg' },
      { id: 'opening-img-2', type: 'image', src: '/image/opening/2025opening-2.jpg' },
      { id: 'opening-img-3', type: 'image', src: '/image/opening/2025opening-3.jpg' },
      { id: 'opening-img-4', type: 'image', src: '/image/opening/2025opening-4.jpg' },
      { id: 'opening-img-5', type: 'image', src: '/image/opening/2025opening-5.jpg' },
      { id: 'opening-img-6', type: 'image', src: '/image/opening/2025opening-6.jpg' },
      // 비디오들 (썸네일 자동 생성)
      { id: 'opening-vid-1', type: 'video', src: '/video/2025-opening/2025-opening-1.mp4' },
      { id: 'opening-vid-2', type: 'video', src: '/video/2025-opening/2025-opening-2.mp4' },
      { id: 'opening-interview-1', type: 'video', src: '/video/2025-opening/2025-opening-interview-1.mp4' },
      { id: 'opening-interview-2', type: 'video', src: '/video/2025-opening/2025-opening-interview-2.mp4' }
    ]
  },
  {
    id: '2025-summer',
    title: '2025썸머',
    description: '2025년 여름 활동과 이벤트들을 기록한 영상 모음입니다.',
    date: '2025.07.15',
    thumbnail: '/video/summer-opening/2025-summer-opening-1.mp4', // 첫 번째 비디오에서 썸네일 자동 생성
    thumbnailType: 'video',
    mediaCount: 8,
    items: [
      // 2025년 썸머 영상들만 포함 (썸네일 자동 생성)
      { id: 'summer-2025-0', type: 'video', src: '/video/summer-opening/2025-summer-opening-0.mp4.mp4' },
      { id: 'summer-2025-1', type: 'video', src: '/video/summer-opening/2025-summer-opening-1.mp4' },
      { id: 'summer-2025-2', type: 'video', src: '/video/summer-opening/2025-summer-opening-2.mp4.mp4' },
      { id: 'summer-2025-3', type: 'video', src: '/video/summer-opening/2025-summer-opening-3.mp4.mp4' },
      { id: 'summer-2025-4', type: 'video', src: '/video/summer-opening/2025-summer-opening-4.mp4.mp4' },
      { id: 'summer-2025-5', type: 'video', src: '/video/summer-opening/2025-summer-opening-5.mp4.mp4' },
      { id: 'summer-2025-6', type: 'video', src: '/video/summer-opening/2025-summer-opening-6.mp4.mp4' },
      { id: 'summer-2025-7', type: 'video', src: '/video/summer-opening/2025-summer-opening-7.mp4.mp4' }
    ]
  },
  {
    id: '2024-summer',
    title: '2024썸머',
    description: '2024년 여름 활동 영상입니다.',
    date: '2024.07.15',
    thumbnail: '/video/summer-opening/2024-summber-opening-1.mp4', // 비디오에서 썸네일 자동 생성
    thumbnailType: 'video',
    mediaCount: 1,
    items: [
      // 실제 파일명 확인됨 (썸네일 자동 생성)
      { id: 'summer-2024-1', type: 'video', src: '/video/summer-opening/2024-summber-opening-1.mp4' }
    ]
  },
  {
    id: '2024-winter',
    title: '2024윈터 - 삿포로',
    description: '2024년 겨울 삿포로 여행의 추억을 담은 영상과 사진 모음입니다.',
    date: '2024.12.20',
    thumbnail: '/video/winter-opening/2025+FINE본부+윈터_+삿포로+(1).jpg',
    mediaCount: 3,
    items: [
      // 실제 파일명 확인됨 (특수문자 포함)
      { id: 'winter-img-1', type: 'image', src: '/video/winter-opening/2025+FINE본부+윈터_+삿포로+(1).jpg' },
      { id: 'winter-img-2', type: 'image', src: '/video/winter-opening/2025+FINE본부+윈터_+삿포로+(2).jpg' },
      { id: 'winter-vid-1', type: 'video', src: '/video/winter-opening/2025+FINE본부+윈터_+삿포로+영상.mp4' }
    ]
  },
  {
    id: 'misc',
    title: '기타',
    description: '다양한 활동과 순간들을 담은 기타 이미지들입니다.',
    date: '2024.12.01',
    thumbnail: '/image/else/1.jpg',
    mediaCount: 3,
    items: [
      // 실제 파일명 확인됨
      { id: 'misc-1', type: 'image', src: '/image/else/1.jpg' },
      { id: 'misc-2', type: 'image', src: '/image/else/2.jpg' },
      { id: 'misc-3', type: 'image', src: '/image/else/3.jpg' }
    ]
  }
];

// 소개 영상들 (메인 섹션에 표시)
const featuredVideos = [
  {
    id: 'intro-1',
    title: '본부 승격식',
    description: '파인본부 승격식 현장을 담은 영상입니다.',
    videoSrc: '/video/Intro-1.mp4',
    thumbnail: '/image/logo.png'
  },
  {
    id: 'intro-2',
    title: '25년 시무식',
    description: '2025년 새해 시무식 영상입니다.',
    videoSrc: '/video/Intro-2.mp4',
    thumbnail: '/image/logo.png'
  },
  {
    id: 'intro-3',
    title: '파인본부 주제가',
    description: '파인본부만의 특별한 주제가를 소개합니다.',
    videoSrc: '/video/Intro-3.mp4',
    thumbnail: '/image/logo.png'
  },
  {
    id: 'intro-4',
    title: '파인본부 소개영상',
    description: '파인본부의 모든 것을 담은 공식 소개영상입니다.',
    videoSrc: '/video/careerIntroduce.mp4',
    thumbnail: '/image/logo.png'
  }
];

const VideoPage: React.FC = () => {
  const [selectedGallery, setSelectedGallery] = useState<GalleryCategory | null>(null);
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [selectedFeaturedVideo, setSelectedFeaturedVideo] = useState<string | null>(null);

  const openGallery = (gallery: GalleryCategory) => {
    setSelectedGallery(gallery);
  };

  const closeGallery = () => {
    setSelectedGallery(null);
  };

  const openMedia = (media: MediaItem) => {
    setSelectedMedia(media);
  };

  const closeMedia = () => {
    setSelectedMedia(null);
  };

  const openFeaturedVideo = (videoId: string) => {
    setSelectedFeaturedVideo(videoId);
  };

  const closeFeaturedVideo = () => {
    setSelectedFeaturedVideo(null);
  };

  return (
    <Layout>
      <SEO 
        title="미디어 갤러리 - FINE"
        description="FINE의 다양한 영상과 이미지 콘텐츠를 확인하세요. 행사, 활동, 소개영상 등 생생한 현장을 만나보실 수 있습니다."
        keywords="FINE, 갤러리, 영상, 이미지, 행사, 활동"
      />
      
      <VideoContainer>
        <HeroSection>
          <HeroContent>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              FINE <span className="highlight">미디어 갤러리</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              FINE의 다양한 순간들을 영상과 사진으로 만나보세요. <br/>
              각 갤러리를 클릭하여 더 많은 미디어를 확인할 수 있습니다.
            </motion.p>
          </HeroContent>
        </HeroSection>

        {/* 소개 영상 섹션 */}
        <GallerySection style={{ background: 'var(--bg-secondary)' }}>
          <GalleryContent>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 style={{ 
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', 
                fontWeight: '600', 
                color: 'var(--text-primary)', 
                textAlign: 'center', 
                marginBottom: '3rem' 
              }}>
                소개 <span style={{ color: 'var(--primary-color)' }}>영상</span>
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem',
                marginBottom: '3rem'
              }}>
                {featuredVideos.map((video, index) => (
                  <motion.div
                    key={video.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => openFeaturedVideo(video.id)}
                    style={{
                      background: 'white',
                      borderRadius: 'var(--border-radius)',
                      overflow: 'hidden',
                      boxShadow: 'var(--shadow)',
                      cursor: 'pointer',
                      transition: 'var(--transition)'
                    }}
                  >
                    <div style={{
                      position: 'relative',
                      aspectRatio: '16/9',
                      overflow: 'hidden',
                      borderRadius: 'var(--border-radius) var(--border-radius) 0 0'
                    }}>
                      <VideoThumbnail
                        src={video.videoSrc}
                        alt={video.title}
                        className=""
                      />
                    </div>
                    <div style={{ padding: '1.5rem' }}>
                      <h3 style={{ 
                        fontSize: '1.125rem', 
                        fontWeight: '600', 
                        marginBottom: '0.5rem',
                        color: 'var(--text-primary)'
                      }}>
                        {video.title}
                      </h3>
                      <p style={{ 
                        color: 'var(--text-secondary)', 
                        fontSize: '0.9rem',
                        lineHeight: '1.5'
                      }}>
                        {video.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </GalleryContent>
        </GallerySection>

        {/* 갤러리 섹션 */}
        <GallerySection>
          <GalleryContent>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 style={{ 
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', 
                fontWeight: '600', 
                color: 'var(--text-primary)', 
                textAlign: 'center', 
                marginBottom: '1rem' 
              }}>
                미디어 <span style={{ color: 'var(--primary-color)' }}>갤러리</span>
              </h2>
              <p style={{
                textAlign: 'center',
                color: 'var(--text-secondary)',
                fontSize: '1.1rem',
                marginBottom: '3rem'
              }}>
                각 갤러리를 클릭하여 더 많은 사진과 영상을 확인해보세요
              </p>
              
              <GalleryGrid>
                {galleryData.map((gallery, index) => (
                  <GalleryCard
                    key={gallery.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => openGallery(gallery)}
                  >
                    <div className="gallery-thumbnail">
                      {gallery.thumbnailType === 'video' ? (
                        <VideoThumbnail
                          src={gallery.thumbnail}
                          alt={gallery.title}
                          className=""
                        />
                      ) : (
                        <>
                          <Image 
                            src={gallery.thumbnail} 
                            alt={gallery.title} 
                            fill
                            style={{ objectFit: 'cover' }}
                          />
                          <div className="play-overlay">
                            <div className="play-button">👁️</div>
                          </div>
                        </>
                      )}
                      <div className="media-count">
                        📂 {gallery.mediaCount}개
                      </div>
                    </div>
                    <div className="gallery-info">
                      <h3>{gallery.title}</h3>
                      <p>{gallery.description}</p>
                      <div className="gallery-meta">
                        <div className="date">
                          📅 {gallery.date}
                        </div>
                        <div className="type">
                          🎬 갤러리
                        </div>
                      </div>
                    </div>
                  </GalleryCard>
                ))}
              </GalleryGrid>
            </motion.div>
          </GalleryContent>
        </GallerySection>

        {/* 갤러리 모달 */}
        <AnimatePresence>
          {selectedGallery && (
            <MediaModal
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeGallery}
            >
              <motion.div
                className="modal-content"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="modal-header">
                  <h2>{selectedGallery.title}</h2>
                  <button className="close-button" onClick={closeGallery}>
                    ✕
                  </button>
                </div>
                <div className="modal-body">
                  <MediaGrid>
                    {selectedGallery.items.map((item, index) => (
                      <MediaItem
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        onClick={item.type === 'image' ? () => openMedia(item) : undefined}
                        $clickable={item.type === 'image'}
                      >
                        {item.type === 'image' ? (
                          <>
                            <Image 
                              src={item.src} 
                              alt={`미디어 ${index + 1}`}
                              fill
                              style={{ objectFit: 'cover' }}
                            />
                            <div className="media-type" style={{
                              position: 'absolute',
                              top: '0.5rem',
                              left: '0.5rem',
                              background: 'rgba(0, 0, 0, 0.7)',
                              color: 'white',
                              padding: '0.25rem 0.5rem',
                              borderRadius: '12px',
                              fontSize: '0.75rem',
                              fontWeight: 500
                            }}>
                              📷
                            </div>
                          </>
                        ) : (
                          <VideoThumbnail
                            src={item.src}
                            alt={`비디오 ${index + 1}`}
                            onClick={() => openMedia(item)}
                            className=""
                          />
                        )}
                      </MediaItem>
                    ))}
                  </MediaGrid>
                </div>
              </motion.div>
            </MediaModal>
          )}
        </AnimatePresence>

        {/* 전체 미디어 모달 */}
        <AnimatePresence>
          {selectedMedia && (
            <FullMediaModal
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMedia}
            >
              <motion.div
                className="full-media-content"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className="close-button" onClick={closeMedia}>
                  ✕
                </button>
                {selectedMedia.type === 'image' ? (
                  <Image 
                    src={selectedMedia.src} 
                    alt="전체 화면 이미지"
                    width={1200}
                    height={800}
                    style={{ objectFit: 'contain' }}
                  />
                ) : (
                  <video src={selectedMedia.src} controls autoPlay />
                )}
              </motion.div>
            </FullMediaModal>
          )}
        </AnimatePresence>

        {/* 소개 영상 모달 */}
        <AnimatePresence>
          {selectedFeaturedVideo && (
            <FullMediaModal
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeFeaturedVideo}
            >
              <motion.div
                className="full-media-content"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className="close-button" onClick={closeFeaturedVideo}>
                  ✕
                </button>
                      <video
                  src={featuredVideos.find(v => v.id === selectedFeaturedVideo)?.videoSrc} 
                        controls
                        autoPlay
                        poster="/image/logo.png"
                />
              </motion.div>
            </FullMediaModal>
          )}
        </AnimatePresence>
      </VideoContainer>
    </Layout>
  );
};

export default VideoPage;

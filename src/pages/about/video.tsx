import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '@/components/Layout/Layout';
import SEO from '@/components/common/SEO';

const VideoContainer = styled.div`
  min-height: 100vh;
  background: var(--bg-primary);
`;

const HeroSection = styled.section`
  padding: 6rem 0;
  background: linear-gradient(135deg, 
    rgba(255, 107, 53, 0.1) 0%, 
    rgba(44, 62, 80, 0.05) 100%
  );
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;

  h1 {
    font-size: clamp(3rem, 6vw, 5rem);
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 2rem;
    
    .highlight {
      color: var(--primary-color);
    }
  }

  p {
    font-size: clamp(1.2rem, 2.5vw, 1.6rem);
    color: var(--text-secondary);
    line-height: 1.8;
    margin-bottom: 3rem;
  }
`;

const ContentSection = styled.section`
  padding: 6rem 0;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 2rem;
  padding-right: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  text-align: center;
  color: var(--text-primary);
  margin-bottom: 3rem;

  .highlight {
    color: var(--primary-color);
  }
`;

const FeaturedSection = styled.section`
  margin-bottom: 6rem;
`;

const FeaturedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const VideoCard = styled(motion.div)`
  background: white;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;

const VideoThumbnail = styled.div`
  width: 100%;
  height: 250px;
  position: relative;
  cursor: pointer;
  overflow: hidden;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition);
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

    .play-icon {
      width: 60px;
      height: 60px;
      background: var(--primary-color);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 1.5rem;
      transform: scale(1);
      transition: var(--transition);
    }
  }

  &:hover .play-overlay {
    opacity: 1;
  }

  &:hover .play-icon {
    transform: scale(1.1);
  }
`;

const VideoInfo = styled.div`
  padding: 1.5rem;

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
  }

  p {
    color: var(--text-secondary);
    line-height: 1.6;
  }
`;

const GallerySection = styled.section`
  margin-top: 6rem;
`;

const GalleryContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const GalleryCard = styled(motion.div)`
  background: white;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;

const GalleryThumbnail = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition);
  }

  .media-count {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 600;
  }

  .category-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
    opacity: 0;
    transition: var(--transition);
  }

  &:hover .category-overlay {
    opacity: 1;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const GalleryInfo = styled.div`
  padding: 1.5rem;

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
  }

  p {
    color: var(--text-secondary);
    font-size: 0.9rem;
    line-height: 1.5;
    margin-bottom: 0.5rem;
  }

  .date {
    color: var(--primary-color);
    font-size: 0.875rem;
    font-weight: 500;
  }
`;

const VideoModal = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
`;

const VideoModalContent = styled.div`
  position: relative;
  width: 90vw;
  max-width: 900px;
  max-height: 90vh;

  video {
    width: 100%;
    height: auto;
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
`;

const MediaModal = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  flex-direction: column;
  z-index: 1000;
  padding: 2rem;
  overflow-y: auto;
`;

const MediaModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  h2 {
    color: white;
    font-size: 1.5rem;
    font-weight: 600;
  }

  .close-button {
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
`;

const MediaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 0.75rem;
  }
`;

const MediaItem = styled(motion.div)`
  position: relative;
  aspect-ratio: 16/9;
  border-radius: var(--border-radius);
  overflow: hidden;
  cursor: pointer;
  
  img, video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition);
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
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
    });
    
    video.addEventListener('loadeddata', () => {
      try {
        // 비디오 길이의 5% 지점으로 이동 (최소 1초, 최대 30초)
        const seekTime = Math.min(Math.max(video.duration * 0.05, 1), 30);
        video.currentTime = seekTime;
      } catch (err) {
        clearTimeout(timeout);
        console.error('Error setting video time:', err);
        reject(err);
      }
    });
    
    video.addEventListener('seeked', () => {
      try {
        if (ctx && canvas.width > 0 && canvas.height > 0) {
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          const thumbnailUrl = canvas.toDataURL('image/jpeg', 0.8);
          clearTimeout(timeout);
          console.log(`Thumbnail generated successfully for ${videoSrc}`);
          resolve(thumbnailUrl);
        } else {
          throw new Error('Canvas context not available');
        }
      } catch (err) {
        clearTimeout(timeout);
        console.error('Error generating thumbnail:', err);
        reject(err);
      }
    });
    
    video.addEventListener('error', (e) => {
      clearTimeout(timeout);
      console.error('Video load error:', e);
      reject(new Error('Failed to load video'));
    });
    
    video.crossOrigin = 'anonymous';
    video.muted = true;
    video.preload = 'metadata';
    video.src = videoSrc;
  });
};

// 썸네일 캐시
const thumbnailCache = new Map<string, string>();

// 동적 비디오 썸네일 컴포넌트
const VideoThumbnailComponent: React.FC<{
  src: string;
  alt: string;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}> = ({ src, alt, onClick, className, style }) => {
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadThumbnail = async () => {
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
          position: 'relative',
          ...style
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
          position: 'relative',
          ...style
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
        height: '100%',
        ...style
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

// 타입 정의
interface MediaItem {
  id: string;
  type: 'image' | 'video';
  src: string;
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
  // 1. 2025년 시무식 (확장)
  {
    id: '2025-opening',
    title: '2025년 시무식',
    description: '2025년 새해를 맞이하여 진행된 시무식과 본부 승격식의 생생한 현장을 담았습니다.',
    date: '2025.01.20',
    thumbnail: '/image/homepage/파인 영상/2025 FINE본부 시무식 단체사진.jpg',  // 단체사진으로 변경
    mediaCount: 23,
    items: [
      // 기존 opening 폴더 이미지들
      { id: 'opening-img-1', type: 'image', src: '/image/opening/2025opening-1.jpg' },
      { id: 'opening-img-2', type: 'image', src: '/image/opening/2025opening-2.jpg' },
      { id: 'opening-img-3', type: 'image', src: '/image/opening/2025opening-3.jpg' },
      { id: 'opening-img-4', type: 'image', src: '/image/opening/2025opening-4.jpg' },
      { id: 'opening-img-5', type: 'image', src: '/image/opening/2025opening-5.jpg' },
      { id: 'opening-img-6', type: 'image', src: '/image/opening/2025opening-6.jpg' },
      
      // homepage 폴더 시무식 이미지들
      { id: 'homepage-opening-1', type: 'image', src: '/image/homepage/2025 시무식 (1).jpg' },
      { id: 'homepage-opening-2', type: 'image', src: '/image/homepage/2025 시무식 (2).jpg' },
      { id: 'homepage-opening-3', type: 'image', src: '/image/homepage/2025 시무식 (3).jpg' },
      { id: 'homepage-opening-4', type: 'image', src: '/image/homepage/2025 시무식 (4).jpg' },
      { id: 'homepage-opening-5', type: 'image', src: '/image/homepage/2025 시무식 (5).jpg' },
      { id: 'homepage-opening-6', type: 'image', src: '/image/homepage/2025 시무식 (6).jpg' },
      { id: 'homepage-opening-invite', type: 'image', src: '/image/homepage/2025 시무식 초대장.jpg' },
      
      // 파인 영상 폴더 시무식 이미지들
      { id: 'fine-opening-1', type: 'image', src: '/image/homepage/파인 영상/2025 FINE본부 시무식 (1).jpg' },
      { id: 'fine-opening-2', type: 'image', src: '/image/homepage/파인 영상/2025 FINE본부 시무식 (2).jpg' },
      { id: 'fine-opening-3', type: 'image', src: '/image/homepage/파인 영상/2025 FINE본부 시무식 (3).jpg' },
      { id: 'fine-opening-4', type: 'image', src: '/image/homepage/파인 영상/2025 FINE본부 시무식 (4).jpg' },
      { id: 'fine-opening-5', type: 'image', src: '/image/homepage/파인 영상/2025 FINE본부 시무식 (5).jpg' },
      { id: 'fine-opening-6', type: 'image', src: '/image/homepage/파인 영상/2025 FINE본부 시무식 (6).jpg' },
      { id: 'fine-opening-group', type: 'image', src: '/image/homepage/파인 영상/2025 FINE본부 시무식 단체사진.jpg' },
      
      // 기존 비디오들
      { id: 'opening-vid-1', type: 'video', src: '/video/2025-opening/2025-opening-1.mp4' },
      { id: 'opening-vid-2', type: 'video', src: '/video/2025-opening/2025-opening-2.mp4' },
      { id: 'opening-interview-1', type: 'video', src: '/video/2025-opening/2025-opening-interview-1.mp4' },
      { id: 'opening-interview-2', type: 'video', src: '/video/2025-opening/2025-opening-interview-2.mp4' },
      
      // 파인 영상 폴더 시무식 비디오들
      { id: 'fine-opening-vid', type: 'video', src: '/image/homepage/파인 영상/2025 FINE본부 시무식.mp4' },
      { id: 'fine-opening-vid-2', type: 'video', src: '/image/homepage/파인 영상/2025 FINE본부 시무식(2).mp4' },
      { id: 'fine-opening-interview', type: 'video', src: '/image/homepage/파인 영상/2025 FINE본부 시무식_인터뷰.mp4' },
      { id: 'fine-opening-interview-2', type: 'video', src: '/image/homepage/파인 영상/2025 FINE본부 시무식 인터뷰(2).mp4' }
    ]
  },

  // 2. 2025년 썸머 (확장)
  {
    id: '2025-summer',
    title: '2025썸머',
    description: '2025년 여름 발대식과 활동들을 기록한 영상 모음입니다.',
    date: '2025.07.15',
    thumbnail: '/image/homepage/파인 영상/2025 FINE본부 썸머 발대식.mp4',
    thumbnailType: 'video',
    mediaCount: 16,
    items: [
      // 기존 여름 활동 영상들
      { id: 'summer-2025-0', type: 'video', src: '/video/summer-opening/2025-summer-opening-0.mp4.mp4' },
      { id: 'summer-2025-1', type: 'video', src: '/video/summer-opening/2025-summer-opening-1.mp4' },
      { id: 'summer-2025-2', type: 'video', src: '/video/summer-opening/2025-summer-opening-2.mp4.mp4' },
      { id: 'summer-2025-3', type: 'video', src: '/video/summer-opening/2025-summer-opening-3.mp4.mp4' },
      { id: 'summer-2025-4', type: 'video', src: '/video/summer-opening/2025-summer-opening-4.mp4.mp4' },
      { id: 'summer-2025-5', type: 'video', src: '/video/summer-opening/2025-summer-opening-5.mp4.mp4' },
      { id: 'summer-2025-6', type: 'video', src: '/video/summer-opening/2025-summer-opening-6.mp4.mp4' },
      { id: 'summer-2025-7', type: 'video', src: '/video/summer-opening/2025-summer-opening-7.mp4.mp4' },
      
      // 파인 영상 폴더의 2025 썸머 발대식 영상들
      { id: 'fine-summer-main', type: 'video', src: '/image/homepage/파인 영상/2025 FINE본부 썸머 발대식.mp4' },
      { id: 'fine-summer-1', type: 'video', src: '/image/homepage/파인 영상/2025 FINE본부 썸머 발대식 영상(1).mp4' },
      { id: 'fine-summer-2', type: 'video', src: '/image/homepage/파인 영상/2025 FINE본부 썸머 발대식 영상(2).mp4' },
      { id: 'fine-summer-3', type: 'video', src: '/image/homepage/파인 영상/2025 FINE본부 썸머 발대식 영상(3).mp4' },
      { id: 'fine-summer-4', type: 'video', src: '/image/homepage/파인 영상/2025 FINE본부 썸머 발대식 영상(4).mp4' },
      { id: 'fine-summer-5', type: 'video', src: '/image/homepage/파인 영상/2025 FINE본부 썸머 발대식 영상(5).mp4' },
      { id: 'fine-summer-6', type: 'video', src: '/image/homepage/파인 영상/2025 FINE본부 썸머 발대식 영상(6).mp4' },
      { id: 'fine-summer-7', type: 'video', src: '/image/homepage/파인 영상/2025 FINE본부 썸머 발대식 영상(7).mp4' }
    ]
  },

  // // 3. 2024년 썸머 파타야
  // {
  //   id: '2024-summer-pattaya',
  //   title: '2024썸머 - 파타야',
  //   description: '2024년 여름 파타야 워크샵의 특별한 추억을 담은 영상입니다.',
  //   date: '2024.07.15',
  //   thumbnail: '/image/homepage/파인 영상/2024 FINE본부 썸머_파타야.mp4',
  //   thumbnailType: 'video',
  //   mediaCount: 1,
  //   items: [
  //     { id: 'pattaya-2024', type: 'video', src: '/image/homepage/파인 영상/2024 FINE본부 썸머_파타야.mp4' }
  //   ]
  // },

  // 4. 기존 2024 썸머 (유지)
  {
    id: '2024-summer',
    title: '2024썸머',
    description: '2024년 여름 활동 영상입니다.',
    date: '2024.07.15',
    thumbnail: '/video/summer-opening/2024-summber-opening-1.mp4',
    thumbnailType: 'video',
    mediaCount: 1,
    items: [
      { id: 'summer-2024-1', type: 'video', src: '/video/summer-opening/2024-summber-opening-1.mp4' }
    ]
  },

  // 5. 2024년 윈터 삿포로 (확장)
  {
    id: '2024-winter',
    title: '2024윈터 - 삿포로',
    description: '2024년 겨울 삿포로 여행의 추억을 담은 영상과 사진 모음입니다.',
    date: '2024.12.20',
    thumbnail: '/video/winter-opening/2025+FINE본부+윈터_+삿포로+(2).jpg',
    mediaCount: 6,
    items: [
      // 기존 winter-opening 폴더 파일들
      { id: 'winter-img-1', type: 'image', src: '/video/winter-opening/2025+FINE본부+윈터_+삿포로+(1).jpg' },
      { id: 'winter-img-2', type: 'image', src: '/video/winter-opening/2025+FINE본부+윈터_+삿포로+(2).jpg' },
      { id: 'winter-vid-1', type: 'video', src: '/video/winter-opening/2025+FINE본부+윈터_+삿포로+영상.mp4' },
      
      // 파인 영상 폴더의 윈터 파일들
      { id: 'fine-winter-1', type: 'image', src: '/image/homepage/파인 영상/2025 FINE본부 윈터_ 삿포로 (1).jpg' },
      { id: 'fine-winter-2', type: 'image', src: '/image/homepage/파인 영상/2025 FINE본부 윈터_ 삿포로 (2).jpg' },
      { id: 'fine-winter-vid', type: 'video', src: '/image/homepage/파인 영상/2025 FINE본부 윈터_ 삿포로 영상.mp4' }
    ]
  },

  // 6. 정기 세미나 & 킥오프
  {
    id: 'regular-seminar',
    title: '정기 세미나 & 킥오프',
    description: '본부의 정기 세미나, 킥오프 행사, 대학교 세미나 등 다양한 교육 및 행사 현장입니다.',
    date: '2025.01.15',
    thumbnail: '/image/homepage/파인 영상/2025 FINE본부 연합 킥오프.jpg',  // 단체사진으로 변경
    mediaCount: 20,
    items: [
      // 킥오프 행사 이미지들
      { id: 'kickoff-1', type: 'image', src: '/image/homepage/정기 세미나 (킥오프 행사) (1).jpg' },
      { id: 'kickoff-2', type: 'image', src: '/image/homepage/정기 세미나 (킥오프 행사) (2).jpg' },
      { id: 'kickoff-3', type: 'image', src: '/image/homepage/정기 세미나 (킥오프 행사) (3).jpg' },
      { id: 'kickoff-4', type: 'image', src: '/image/homepage/정기 세미나 (킥오프 행사) (4).jpg' },
      { id: 'kickoff-5', type: 'image', src: '/image/homepage/정기 세미나 (킥오프 행사) (5).jpg' },
      { id: 'kickoff-6', type: 'image', src: '/image/homepage/정기 세미나 (킥오프 행사) (8).jpg' },
      { id: 'kickoff-7', type: 'image', src: '/image/homepage/정기 세미나 (킥오프 행사) (9).jpg' },
      
      // 연합 킥오프
      { id: 'union-kickoff', type: 'image', src: '/image/homepage/파인 영상/2025 FINE본부 연합 킥오프.jpg' },
      
      // 교육부 정기 세미나들
      { id: 'edu-seminar-leader', type: 'image', src: '/image/homepage/교육부/교육부 정기 세미나(본사리더).jpg' },
      { id: 'edu-seminar-univ-1', type: 'image', src: '/image/homepage/교육부/정기 세미나 (대학교) (1).jpg' },
      { id: 'edu-seminar-univ-2', type: 'image', src: '/image/homepage/교육부/정기 세미나 (대학교) (2).jpg' },
      { id: 'edu-seminar-univ-3', type: 'image', src: '/image/homepage/교육부/정기 세미나 (대학교) (3).jpg' },
      { id: 'edu-seminar-univ-4', type: 'image', src: '/image/homepage/교육부/정기 세미나 (대학교) (4).jpg' },
      { id: 'edu-seminar-univ-5', type: 'image', src: '/image/homepage/교육부/정기 세미나 (대학교) (5).jpg' },
      { id: 'edu-seminar-univ-6', type: 'image', src: '/image/homepage/교육부/정기 세미나 (대학교) (6).jpg' },
      { id: 'edu-seminar-univ-7', type: 'image', src: '/image/homepage/교육부/정기 세미나 (대학교) (7).jpg' },
      { id: 'edu-seminar-univ-8', type: 'image', src: '/image/homepage/교육부/정기 세미나 (대학교) (8).jpg' },
      { id: 'edu-seminar-univ-20', type: 'image', src: '/image/homepage/교육부/정기 세미나 (대학교) (20).jpg' }
    ]
  },

  // 7. 신입 설계사 교육
  {
    id: 'new-agent-education',
    title: '신입 설계사 교육',
    description: '전주, 대전 등 전국 각 지역에서 진행되는 신입 설계사들을 위한 체계적인 교육 프로그램입니다.',
    date: '2024.11.20',
    thumbnail: '/image/homepage/신입 설계사 교육 전주 (3).jpg',  // 단체사진으로 변경
    mediaCount: 13,
    items: [
      // 전주 교육
      { id: 'new-edu-jeonju-1', type: 'image', src: '/image/homepage/신입 설계사 교육 전주 (1).jpg' },
      { id: 'new-edu-jeonju-2', type: 'image', src: '/image/homepage/신입 설계사 교육 전주 (2).jpg' },
      { id: 'new-edu-jeonju-3', type: 'image', src: '/image/homepage/신입 설계사 교육 전주 (3).jpg' },
      
      // 대전 교육
      { id: 'new-edu-daejeon-1', type: 'image', src: '/image/homepage/교육부/신입 설계사 교육 대전 (1).jpg' },
      { id: 'new-edu-daejeon-2', type: 'image', src: '/image/homepage/교육부/신입 설계사 교육 대전 (2).jpg' },
      { id: 'new-edu-daejeon-3', type: 'image', src: '/image/homepage/교육부/신입 설계사 교육 대전 (3).jpg' },
      { id: 'new-edu-daejeon-4', type: 'image', src: '/image/homepage/교육부/신입 설계사 교육 대전 (4).jpg' },
      { id: 'new-edu-daejeon-5', type: 'image', src: '/image/homepage/교육부/신입 설계사 교육 대전 (5).jpg' },
      { id: 'new-edu-daejeon-6', type: 'image', src: '/image/homepage/교육부/신입 설계사 교육 대전 (6).jpg' },
      { id: 'new-edu-daejeon-7', type: 'image', src: '/image/homepage/교육부/신입 설계사 교육 대전 (7).jpg' },
      
      // 신입RP 교육
      { id: 'new-rp-edu-5', type: 'image', src: '/image/homepage/교육부/신입RP 교육 (5).jpg' },
      { id: 'new-rp-edu-6', type: 'image', src: '/image/homepage/교육부/신입RP 교육 (6).jpg' },
      { id: 'new-rp-edu-20', type: 'image', src: '/image/homepage/교육부/신입RP 교육 (20).jpg' },
      { id: 'new-rp-edu-23', type: 'image', src: '/image/homepage/교육부/신입RP 교육 (23).jpg' }
    ]
  },

  // 8. 본부 제휴 업무 협약식
  {
    id: 'partnership-agreement',
    title: '본부 제휴 업무 협약식',
    description: '다양한 제휴사들과의 업무 협약식 및 세미나 현장을 담은 소중한 기록들입니다.',
    date: '2024.10.15',
    thumbnail: '/image/homepage/본부 제휴 업무 협약식 세미나 (1).jpg',
    mediaCount: 9,
    items: [
      { id: 'partnership-1', type: 'image', src: '/image/homepage/본부 제휴 업무 협약식 세미나 (1).jpg' },
      { id: 'partnership-2', type: 'image', src: '/image/homepage/본부 제휴 업무 협약식 세미나 (2).jpg' },
      { id: 'partnership-3', type: 'image', src: '/image/homepage/본부 제휴 업무 협약식 세미나 (3).jpg' },
      { id: 'partnership-4', type: 'image', src: '/image/homepage/본부 제휴 업무 협약식 세미나 (4).jpg' },
      { id: 'partnership-5', type: 'image', src: '/image/homepage/본부 제휴 업무 협약식 세미나 (5).jpg' },
      { id: 'partnership-6', type: 'image', src: '/image/homepage/본부 제휴 업무 협약식 세미나 (6).jpg' },
      { id: 'partnership-7', type: 'image', src: '/image/homepage/본부 제휴 업무 협약식 세미나 (7).jpg' },
      { id: 'partnership-8', type: 'image', src: '/image/homepage/본부 제휴 업무 협약식 세미나 (8).jpg' },
      { id: 'partnership-9', type: 'image', src: '/image/homepage/본부 제휴 업무 협약식 세미나 (9).jpg' }
    ]
  },

  // 9. 본부 승격식
  {
    id: 'headquarters-promotion',
    title: '본부 승격식',
    description: '파인본부 승격의 뜻깊은 순간과 축하 행사를 기록한 소중한 사진들입니다.',
    date: '2024.09.20',
    thumbnail: '/image/homepage/본부 승격식 (1).jpg',
    mediaCount: 9,
    items: [
      { id: 'promotion-1', type: 'image', src: '/image/homepage/본부 승격식 (1).jpg' },
      { id: 'promotion-2', type: 'image', src: '/image/homepage/본부 승격식 (2).jpg' },
      { id: 'promotion-3', type: 'image', src: '/image/homepage/본부 승격식 (3).jpg' },
      { id: 'promotion-4', type: 'image', src: '/image/homepage/본부 승격식 (4).jpg' },
      { id: 'promotion-5', type: 'image', src: '/image/homepage/본부 승격식 (5).jpg' },
      { id: 'promotion-6', type: 'image', src: '/image/homepage/본부 승격식 (6).jpg' },
      { id: 'promotion-7', type: 'image', src: '/image/homepage/본부 승격식 (7).jpg' },
      { id: 'promotion-8', type: 'image', src: '/image/homepage/본부 승격식 (8).jpg' },
      { id: 'promotion-9', type: 'image', src: '/image/homepage/본부 승격식 (9).jpg' }
    ]
  },

  // 10. 법인 영업서비스 교육
  {
    id: 'corporate-sales-education',
    title: '법인 영업서비스 교육',
    description: '법인 고객 대상 영업 서비스 향상을 위한 전문 교육 과정입니다.',
    date: '2024.08.10',
    thumbnail: '/image/homepage/법인 영업서비스 교육 (1).jpg',
    mediaCount: 4,
    items: [
      { id: 'corp-edu-1', type: 'image', src: '/image/homepage/법인 영업서비스 교육 (1).jpg' },
      { id: 'corp-edu-2', type: 'image', src: '/image/homepage/법인 영업서비스 교육 (2).jpg' },
      { id: 'corp-edu-3', type: 'image', src: '/image/homepage/법인 영업서비스 교육 (3).jpg' },
      { id: 'corp-edu-4', type: 'image', src: '/image/homepage/법인 영업서비스 교육 (4).jpg' }
    ]
  },

  // 11. 금융전문가 과정
  {
    id: 'financial-expert-course',
    title: '금융전문가 과정',
    description: '전문적인 금융 지식과 실무 능력 향상을 위한 체계적인 교육 과정입니다.',
    date: '2024.06.25',
    thumbnail: '/image/homepage/금융전문가 과정 (15).jpg',  // 단체사진으로 변경
    mediaCount: 16,
    items: [
      { id: 'fin-expert-main', type: 'image', src: '/image/homepage/금융전문가 과정.jpg' },
      { id: 'fin-expert-1', type: 'image', src: '/image/homepage/금융전문가 과정 (1).jpg' },
      { id: 'fin-expert-2', type: 'image', src: '/image/homepage/금융전문가 과정 (2).jpg' },
      { id: 'fin-expert-3', type: 'image', src: '/image/homepage/금융전문가 과정 (3).jpg' },
      { id: 'fin-expert-4', type: 'image', src: '/image/homepage/금융전문가 과정 (4).jpg' },
      { id: 'fin-expert-5', type: 'image', src: '/image/homepage/금융전문가 과정 (5).jpg' },
      { id: 'fin-expert-6', type: 'image', src: '/image/homepage/금융전문가 과정 (6).jpg' },
      { id: 'fin-expert-7', type: 'image', src: '/image/homepage/금융전문가 과정 (7).jpg' },
      { id: 'fin-expert-8', type: 'image', src: '/image/homepage/금융전문가 과정 (8).jpg' },
      { id: 'fin-expert-9', type: 'image', src: '/image/homepage/금융전문가 과정 (9).jpg' },
      { id: 'fin-expert-10', type: 'image', src: '/image/homepage/금융전문가 과정 (10).jpg' },
      { id: 'fin-expert-11', type: 'image', src: '/image/homepage/금융전문가 과정 (11).jpg' },
      { id: 'fin-expert-12', type: 'image', src: '/image/homepage/금융전문가 과정 (12).jpg' },
      { id: 'fin-expert-13', type: 'image', src: '/image/homepage/금융전문가 과정 (13).jpg' },
      { id: 'fin-expert-14', type: 'image', src: '/image/homepage/금융전문가 과정 (14).jpg' },
      { id: 'fin-expert-15', type: 'image', src: '/image/homepage/금융전문가 과정 (15).jpg' }
    ]
  },

  // 12. 워크샵 & 리더 교육
  {
    id: 'workshop-leadership',
    title: '워크샵 & 리더 교육',
    description: '정기 워크샵, 리더워크샵, 썸머 워크샵 등 다양한 교육 프로그램과 리더십 개발 과정입니다.',
    date: '2024.05.30',
    thumbnail: '/image/homepage/교육부/썸머 워크샵 (6).jpg',
    mediaCount: 22,
    items: [
      // 리더워크샵
      { id: 'leader-workshop', type: 'image', src: '/image/homepage/리더워크샵.png' },
      
      // 교육부 정기워크샵
      { id: 'edu-workshop-1', type: 'image', src: '/image/homepage/교육부/교육부 정기워크샵 (1).jpg' },
      { id: 'edu-workshop-2', type: 'image', src: '/image/homepage/교육부/교육부 정기워크샵 (2).jpg' },
      { id: 'edu-workshop-3', type: 'image', src: '/image/homepage/교육부/교육부 정기워크샵 (3).jpg' },
      { id: 'edu-workshop-4', type: 'image', src: '/image/homepage/교육부/교육부 정기워크샵 (4).jpg' },
      { id: 'edu-workshop-5', type: 'image', src: '/image/homepage/교육부/교육부 정기워크샵 (5).jpg' },
      { id: 'edu-workshop-6', type: 'image', src: '/image/homepage/교육부/교육부 정기워크샵 (6).jpg' },
      
      // 정기워크샵
      { id: 'regular-workshop-1', type: 'image', src: '/image/homepage/교육부/정기워크샵 (1).jpg' },
      { id: 'regular-workshop-2', type: 'image', src: '/image/homepage/교육부/정기워크샵 (2).jpg' },
      { id: 'regular-workshop-3', type: 'image', src: '/image/homepage/교육부/정기워크샵 (3).jpg' },
      { id: 'regular-workshop-4', type: 'image', src: '/image/homepage/교육부/정기워크샵 (4).jpg' },
      { id: 'regular-workshop-5', type: 'image', src: '/image/homepage/교육부/정기워크샵 (5).jpg' },
      { id: 'regular-workshop-6', type: 'image', src: '/image/homepage/교육부/정기워크샵 (6).jpg' },
      { id: 'regular-workshop-7', type: 'image', src: '/image/homepage/교육부/정기워크샵 (7).jpg' },
      { id: 'regular-workshop-8', type: 'image', src: '/image/homepage/교육부/정기워크샵 (8).jpg' },
      { id: 'regular-workshop-9', type: 'image', src: '/image/homepage/교육부/정기워크샵 (9).jpg' },
      
      // 썸머 워크샵
      { id: 'summer-workshop-1', type: 'image', src: '/image/homepage/교육부/썸머 워크샵 (1).jpg' },
      { id: 'summer-workshop-2', type: 'image', src: '/image/homepage/교육부/썸머 워크샵 (2).jpg' },
      { id: 'summer-workshop-3', type: 'image', src: '/image/homepage/교육부/썸머 워크샵 (3).jpg' },
      { id: 'summer-workshop-4', type: 'image', src: '/image/homepage/교육부/썸머 워크샵 (4).jpg' },
      { id: 'summer-workshop-5', type: 'image', src: '/image/homepage/교육부/썸머 워크샵 (5).jpg' },
      { id: 'summer-workshop-6', type: 'image', src: '/image/homepage/교육부/썸머 워크샵 (6).jpg' }
    ]
  },

  // 13. 전문 교육 & 특강
  {
    id: 'special-education',
    title: '전문 교육 & 특강',
    description: 'OJT 교육, 원수사 교육, ChatGPT 교육, 특강 등 다양한 전문 교육 프로그램입니다.',
    date: '2024.04.20',
    thumbnail: '/image/homepage/파인 영상/2025 FINE본부 특강.jpg',
    mediaCount: 10,
    items: [
      // OJT 교육
      { id: 'ojt-1', type: 'image', src: '/image/homepage/교육부/교육부 OJT.png' },
      { id: 'ojt-2', type: 'image', src: '/image/homepage/교육부/교육부 OJT(2).png' },
      { id: 'ojt-3', type: 'image', src: '/image/homepage/교육부/교육부 OJT(3).png' },
      { id: 'ojt-4', type: 'image', src: '/image/homepage/교육부/교육부 OJT(4).png' },
      
      // 원수사 교육
      { id: 'wonsu-edu-1', type: 'image', src: '/image/homepage/교육부/원수사 교육 (1).jpg' },
      { id: 'wonsu-edu-2', type: 'image', src: '/image/homepage/교육부/원수사 교육 (2).jpg' },
      { id: 'wonsu-edu-3', type: 'image', src: '/image/homepage/교육부/원수사 교육 (3).jpg' },
      { id: 'wonsu-edu-4', type: 'image', src: '/image/homepage/교육부/원수사 교육 (4).jpg' },
      
      // ChatGPT 교육 & 특강
      { id: 'chatgpt-edu', type: 'image', src: '/image/homepage/교육부/챗 GPT 교육.png' },
      { id: 'special-lecture', type: 'image', src: '/image/homepage/파인 영상/2025 FINE본부 특강.jpg' }
    ]
  },

  // 14. 파인본부 소개영상
  {
    id: 'fine-introduction-videos',
    title: '파인본부 소개영상',
    description: '파인본부의 비전과 꿈을 담은 소개 영상 모음입니다.',
    date: '2024.03.15',
    thumbnail: '/image/homepage/파인 영상/파인본부 영상.mp4',
    thumbnailType: 'video',
    mediaCount: 3,
    items: [
      { id: 'fine-intro-main', type: 'video', src: '/image/homepage/파인 영상/파인본부 영상.mp4' },
      { id: 'fine-intro-dream', type: 'video', src: '/image/homepage/파인 영상/파인본부 영상(우리의꿈).mp4' },
      { id: 'fine-intro-2', type: 'video', src: '/image/homepage/파인 영상/파인본부 영상2.mp4' }
    ]
  },

  // 15. 수상 & 성과
  {
    id: 'awards-achievements',
    title: '수상 & 성과',
    description: '파인본부가 달성한 소중한 성과와 수상 내역을 기록한 자랑스러운 순간들입니다.',
    date: '2025.01.10',
    thumbnail: '/image/homepage/파인 영상/2025 FINE본부 연도대상.jpg',
    mediaCount: 1,
    items: [
      { id: 'annual-award-2025', type: 'image', src: '/image/homepage/파인 영상/2025 FINE본부 연도대상.jpg' }
    ]
  },

  // 기존 기타 카테고리 (유지)
  {
    id: 'misc',
    title: '기타',
    description: '다양한 활동과 순간들을 담은 기타 이미지들입니다.',
    date: '2024.12.01',
    thumbnail: '/image/else/1.jpg',
    mediaCount: 3,
    items: [
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
    title: '본부 소개',
    description: '파인본부 소개 영상입니다.',
    videoSrc: '/video/Intro-3.mp4',
    thumbnail: '/image/logo.png'
  }
];

const VideoPage: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedGallery, setSelectedGallery] = useState<GalleryCategory | null>(null);
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [selectedFeaturedVideo, setSelectedFeaturedVideo] = useState<typeof featuredVideos[0] | null>(null);

  const handleVideoPlay = useCallback((videoSrc: string) => {
    setSelectedVideo(videoSrc);
  }, []);

  const handleGalleryOpen = useCallback((gallery: GalleryCategory) => {
    setSelectedGallery(gallery);
  }, []);

  const handleMediaOpen = useCallback((media: MediaItem) => {
    setSelectedMedia(media);
  }, []);

  const handleFeaturedVideoPlay = useCallback((video: typeof featuredVideos[0]) => {
    setSelectedFeaturedVideo(video);
  }, []);

  const closeModals = useCallback(() => {
    setSelectedVideo(null);
    setSelectedGallery(null);
    setSelectedMedia(null);
    setSelectedFeaturedVideo(null);
  }, []);

  const handleBackdropClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModals();
    }
  }, [closeModals]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModals();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [closeModals]);

  return (
    <Layout>
      <SEO 
        title="동영상 갤러리 - FINE"
        description="파인본부의 다양한 활동과 교육 프로그램을 담은 동영상과 이미지 갤러리입니다. 시무식, 교육, 워크샵 등 생생한 현장을 확인하세요."
        keywords="FINE, 파인본부, 동영상, 갤러리, 시무식, 교육, 워크샵, 세미나"
      />
      
      <VideoContainer>
        <HeroSection>
          <HeroContent>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="highlight">FINE</span> 갤러리
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              파인본부의 생생한 현장과 소중한 순간들을 영상과 이미지로 만나보세요
            </motion.p>
          </HeroContent>
        </HeroSection>

        <ContentSection>
          <FeaturedSection>
            <SectionTitle>
              <span className="highlight">소개</span> 영상
            </SectionTitle>
            <FeaturedGrid>
              {featuredVideos.map((video, index) => (
                <VideoCard
                  key={video.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <VideoThumbnailComponent 
                    src={video.videoSrc}
                    alt={video.title}
                    onClick={() => handleFeaturedVideoPlay(video)}
                    style={{
                      width: '100%',
                      height: '250px',
                    }}
                  />
                  <VideoInfo>
                    <h3>{video.title}</h3>
                    <p>{video.description}</p>
                  </VideoInfo>
                </VideoCard>
              ))}
            </FeaturedGrid>
          </FeaturedSection>

          <GallerySection>
            <SectionTitle>
              <span className="highlight">미디어</span> 갤러리
            </SectionTitle>
            <GalleryGrid>
              {galleryData.map((gallery, index) => (
                <GalleryCard
                  key={gallery.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  onClick={() => handleGalleryOpen(gallery)}
                >
                  <GalleryThumbnail>
                    {gallery.thumbnailType === 'video' ? (
                      <VideoThumbnailComponent 
                        src={gallery.thumbnail}
                        alt={gallery.title}
                        style={{
                          width: '100%',
                          height: '100%',
                        }}
                      />
                    ) : (
                      <img src={gallery.thumbnail} alt={gallery.title} />
                    )}
                    <div className="media-count">
                      {gallery.mediaCount}개
                    </div>
                    <div className="category-overlay" />
                  </GalleryThumbnail>
                  <GalleryInfo>
                    <h3>{gallery.title}</h3>
                    <p>{gallery.description}</p>
                    <div className="date">{gallery.date}</div>
                  </GalleryInfo>
                </GalleryCard>
              ))}
            </GalleryGrid>
          </GallerySection>
        </ContentSection>

        {/* 소개영상 모달 */}
        <AnimatePresence>
          {selectedFeaturedVideo && (
            <VideoModal
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleBackdropClick}
            >
              <VideoModalContent>
                <video 
                  src={selectedFeaturedVideo.videoSrc} 
                  controls 
                  autoPlay
                  style={{ borderRadius: 'var(--border-radius)' }}
                />
                <button 
                  className="close-button"
                  onClick={closeModals}
                >
                  ×
                </button>
              </VideoModalContent>
            </VideoModal>
          )}
        </AnimatePresence>

        {/* 갤러리 모달 */}
        <AnimatePresence>
          {selectedGallery && (
            <MediaModal
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleBackdropClick}
            >
              <MediaModalHeader>
                <h2>{selectedGallery.title}</h2>
                <button 
                  className="close-button"
                  onClick={closeModals}
                >
                  ×
                </button>
              </MediaModalHeader>
              
              <MediaGrid>
                {selectedGallery.items.map((item, index) => (
                  <MediaItem
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleMediaOpen(item);
                    }}
                  >
                    {item.type === 'image' ? (
                      <img src={item.src} alt={`${selectedGallery.title} ${index + 1}`} />
                    ) : (
                      <VideoThumbnailComponent 
                        src={item.src}
                        alt={`${selectedGallery.title} ${index + 1}`}
                        style={{
                          width: '100%',
                          height: '100%',
                        }}
                      />
                    )}
                  </MediaItem>
                ))}
              </MediaGrid>
            </MediaModal>
          )}
        </AnimatePresence>

        {/* 개별 미디어 모달 */}
        <AnimatePresence>
          {selectedMedia && (
            <FullMediaModal
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleBackdropClick}
            >
              <div className="full-media-content">
                {selectedMedia.type === 'image' ? (
                  <img 
                    src={selectedMedia.src} 
                    alt="Selected media"
                    style={{ borderRadius: 'var(--border-radius)' }}
                  />
                ) : (
                  <video 
                    src={selectedMedia.src} 
                    controls 
                    autoPlay
                    style={{ borderRadius: 'var(--border-radius)' }}
                  />
                )}
                <button 
                  className="close-button"
                  onClick={closeModals}
                >
                  ×
                </button>
              </div>
            </FullMediaModal>
          )}
        </AnimatePresence>
      </VideoContainer>
    </Layout>
  );
};

export default VideoPage;

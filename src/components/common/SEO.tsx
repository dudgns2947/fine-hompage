import React from 'react';
import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  siteName?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'FINE - 신뢰할 수 있는 보험 파트너',
  description = '고객 중심의 맞춤형 보험 서비스로 여러분의 소중한 일상을 보호합니다.',
  keywords = '보험, 생명보험, 손해보험, 건강보험, 연금보험, FINE',
  image = '/image/logo.png',
  url = 'https://dynamicfine.co.kr',
  type = 'website',
  siteName = 'FINE',
}) => {
  return (
    <Head>
      {/* 기본 메타 태그 */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="FINE" />
      
      {/* Open Graph 태그 */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="ko_KR" />
      
      {/* Twitter Card 태그 */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* 추가 메타 태그 */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content="#FF6B35" />
      <meta name="msapplication-TileColor" content="#FF6B35" />
      
      {/* 구조화된 데이터 (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "FINE",
            "description": description,
            "url": url,
            "logo": image,
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "02-1234-5678",
              "contactType": "customer service",
              "areaServed": "KR",
              "availableLanguage": "Korean"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "테헤란로 123",
              "addressLocality": "강남구",
              "addressRegion": "서울특별시",
              "addressCountry": "KR"
            },
            "sameAs": [
              "https://www.facebook.com/goodrich",
              "https://www.instagram.com/goodrich",
              "https://www.linkedin.com/company/goodrich"
            ]
          })
        }}
      />
    </Head>
  );
};

export default SEO;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  
  async redirects() {
    return [
      {
        source: '/guide',
        destination: '/about',
        permanent: true,
      },
      // 추후 다른 리다이렉트가 필요한 경우 여기에 추가
    ];
  },
};

export default nextConfig;

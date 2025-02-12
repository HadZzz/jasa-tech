import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'cdni.iconscout.com',
      'images.unsplash.com',
      'cdn.worldvectorlogo.com'
    ]
  },
  // Ensure static files are served correctly
  async rewrites() {
    return [
      {
        source: '/googled3abef38210a98f2.html',
        destination: '/googled3abef38210a98f2.html'
      }
    ];
  }
};

export default nextConfig;

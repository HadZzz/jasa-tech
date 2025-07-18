import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Performance optimization for Core Web Vitals
  experimental: {
    // Disable optimizeCss temporarily to fix Vercel build
    // optimizeCss: true,
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
  
  // Image optimization for better LCP
  images: {
    domains: [
      'cdni.iconscout.com',
      'images.unsplash.com',
      'cdn.worldvectorlogo.com'
    ],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Compression for faster loading
  compress: true,
  
  // Static optimization
  trailingSlash: false,
  
  // Headers for better caching and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
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

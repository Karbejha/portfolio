/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for better SEO
  trailingSlash: true,
  
  // Image optimization
  images: {
    domains: ['drive.google.com', 'github.com', 'linkedin.com'],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Compress pages for better performance
  compress: true,

  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },

  // Rewrites for better SEO URLs
  async rewrites() {
    return [
      {
        source: '/portfolio',
        destination: '/#projects',
      },
      {
        source: '/about',
        destination: '/#about',
      },
      {
        source: '/contact',
        destination: '/#contact',
      },
      {
        source: '/skills',
        destination: '/#about',
      },
      {
        source: '/achievements',
        destination: '/#achievements',
      },
    ];
  },

  // Experimental features for better performance
  experimental: {
    optimizePackageImports: [
      'framer-motion',
      '@heroicons/react',
      'react-type-animation',
    ],
  },

  // Bundle analyzer for optimization
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use trailingSlash consistently across the site
  trailingSlash: true,
  
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'linkedin.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'immorise.com',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'static1.squarespace.com',
        pathname: '/static/**',
      },
      {
        protocol: 'https',
        hostname: 'bmms-landing.vercel.app',
        pathname: '/logo.png',
      },
      {
        protocol: 'https',
        hostname: 'acilimsoft.com',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'misas.com.tr',
        pathname: '/wp-content/uploads/**',
      },
    ],
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

  // Redirects to consolidate duplicates
  async redirects() {
    return [
      // Section aliases -> redirect to root (hash fragments are client-side only)
      { source: '/portfolio', destination: '/', permanent: true },
      { source: '/about', destination: '/', permanent: true },
      { source: '/contact', destination: '/', permanent: true },
      { source: '/skills', destination: '/', permanent: true },
      { source: '/achievements', destination: '/', permanent: true },
    ];
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

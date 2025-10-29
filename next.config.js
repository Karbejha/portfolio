/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use trailingSlash consistently across the site
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

  // Redirects to consolidate duplicates and enforce canonical host
  async redirects() {
    return [
      // Force non-www as canonical
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.karbejha.site',
          },
        ],
        destination: 'https://karbejha.site/:path*',
        permanent: true,
      },

      // Section aliases -> single-page anchors (for users). Google ignores fragments and treats as '/'
      { source: '/portfolio', destination: '/#projects', permanent: true },
      { source: '/about', destination: '/#about', permanent: true },
      { source: '/contact', destination: '/#contact', permanent: true },
      { source: '/skills', destination: '/#about', permanent: true },
      { source: '/achievements', destination: '/#achievements', permanent: true },
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

import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lovable.dev',
      },
    ],
    unoptimized: false,
  },
  // Enable SSR for all pages
  output: 'standalone',
}

export default nextConfig

import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lovable.dev',
      },
    ],
    // Cloudflare Pages requires unoptimized images for static export
    unoptimized: true,
  },
  // Static export for Cloudflare Pages
  output: 'export',
  // Enable trailing slash for better compatibility with static export
  trailingSlash: true,
  // Skip trailing slash redirect for static export
  skipTrailingSlashRedirect: true,
  eslint: {
    // Ignore ESLint errors during builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Ignore TypeScript errors during builds
    ignoreBuildErrors: true,
  },
}

export default nextConfig

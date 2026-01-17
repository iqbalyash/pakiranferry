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
  // Disable trailing slash for cleaner URLs
  trailingSlash: false,
}

export default nextConfig

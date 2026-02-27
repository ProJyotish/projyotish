/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  // Custom domain projyotish.com — no basePath or assetPrefix needed
  
  // Optimize images
  images: {
    unoptimized: true,
  },
  
  // Enable compression
  compress: true,
  
  // Optimize production builds
  productionBrowserSourceMaps: false,
  
  // Route-based code splitting (Next.js 14 auto tree-shakes in production)
  experimental: {
    optimizePackageImports: ['@radix-ui', 'lucide-react'],
  },
};

module.exports = withBundleAnalyzer(nextConfig);

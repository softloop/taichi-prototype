/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only use static export for production builds, not in dev mode
  ...(process.env.NODE_ENV === 'production' ? { output: 'export' } : {}),
  images: {
    unoptimized: true,
  },
  // Allow Google Fonts to be loaded during build
  optimizeFonts: true,
}

export default nextConfig


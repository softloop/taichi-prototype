/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Allow Google Fonts to be loaded during build
  optimizeFonts: true,
}

export default nextConfig


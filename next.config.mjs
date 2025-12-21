/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only use static export for production builds, not in dev mode
  ...(process.env.NODE_ENV === 'production' ? { output: 'export' } : {}),
  images: {
    unoptimized: true,
  },
  // Allow Google Fonts to be loaded during build
  optimizeFonts: true,
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      config.watchOptions = {
        // Ignoriere viele Verzeichnisse, um "too many open files" zu vermeiden
        ignored: [
          '**/node_modules/**',
          '**/.git/**',
          '**/.next/**',
          '**/out/**',
          '**/.cache/**',
          '**/dist/**',
          '**/build/**',
        ],
        // Erhöhte Timeout-Werte
        aggregateTimeout: 500,
        poll: 1000, // Nutze Polling mit 1 Sekunde Intervall
      }
    }
    return config
  },
}

export default nextConfig


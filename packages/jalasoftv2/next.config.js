/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/landings',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'purecatamphetamine.github.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  swcMinify: true,
  cssModules: true,
  compress: true,
  experimental: {
    optimizeCss: true,
  },
  reactStrictMode: true,
};
module.exports = nextConfig;

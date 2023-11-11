// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPlugins = require('next-compose-plugins')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const withTM = require('next-transpile-modules')(['@common/components-library'])

const isProd = process.env.NODE_ENV === 'production'
const withPWA = require('next-pwa')
const withCss = require('@zeit/next-css')
const withPurgeCss = require('next-purgecss')
const { redirects } = require('./redirects.js');

const ANALYZE = process.env.ANALYZE || false
const securityHeaders = [
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  }
]

module.exports = withPlugins([
  [withTM],
  [
    withPWA,
    {
      pwa: {
        dest: 'public',
        disable: !isProd
      },
    }
  ],
  [withCss(withPurgeCss())],
  {
    redirects,
    headers: () => {
      return [
        {
          source: '/:path*',
          headers: securityHeaders
        }
      ]
    },
    images: {
      domains: ['images.ctfassets.net', 'purecatamphetamine.github.io'],
      formats: ['image/avif', 'image/webp'],
    },
    distDir: 'build',
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      if (!isServer) {
        config.resolve.fallback = {
          fs: false,
          stream: false,
          constants: false,
          path: false,
          net: false,
          os: false,
          zlib: false
        }
      }
      if (ANALYZE) {
       config.plugins.push(
         new BundleAnalyzerPlugin({
           analyzerMode: 'server',
           analyzerPort: isServer ? 8888 : 8889,
           openAnalyzer: true,
         })
       )
      }
      return config
    },
    compress: true,
  }
])

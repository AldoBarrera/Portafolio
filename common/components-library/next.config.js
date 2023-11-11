// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPlugins = require('next-compose-plugins')

const withTM = require('next-transpile-modules')(['@common/components-library'])

const isProd = process.env.NODE_ENV === 'production'
const withPWA = require('next-pwa')

module.exports = withPlugins([
  [withTM],
  [
    withPWA,
    {
      pwa: {
        dest: 'public',
        disable: !isProd
      }
    }
  ]
])

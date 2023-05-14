/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,

  async headers() {
    return [
      {
        source: '/(.*)?',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'allow-from uri: https://plausible.io',
          }
        ]
      }
    ]
  },

  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ["localhost", "picsum.photos"],
  },

  i18n: {
    locales: ['vi', 'en', 'ja'],
    defaultLocale: "vi",
    localeDetection: false,
  },

}

module.exports = nextConfig

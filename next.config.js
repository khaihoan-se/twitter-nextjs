/**
 * @format
 * @type {import('next').NextConfig}
 */
// const NextI18Next = require('next-i18next').default
// const path = require('path')
// module.exports = new NextI18Next({
//    defaultLanguage: 'en',
//    otherLanguages: ['vi'],
//    localePath: path.resolve('./public/locales'),
// })
// const { i18n } = require('./next-i18next.config')

const nextConfig = {
   reactStrictMode: false,
   swcMinify: true,
   images: {
      unoptimized: true,
   },
}

module.exports = nextConfig

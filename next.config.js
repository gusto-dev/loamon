/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'img.lostark.co.kr',
      'localhost',
      'cdn-lostark.game.onstove.com',
      'developer-lostark.game.onstove.com',
    ],
  },
  experimental: {
    largePageDataBytes: 128 * 100000,
  },
}

module.exports = nextConfig

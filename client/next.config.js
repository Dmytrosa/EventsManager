/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost:3001', 'i.ibb.co'],
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    serverActions: true,
  },
  env: {
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
  }
}

module.exports = nextConfig;
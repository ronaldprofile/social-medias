/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },

  images: {
    domains: ["avatars.githubusercontent.com"]
  }
};

module.exports = nextConfig;

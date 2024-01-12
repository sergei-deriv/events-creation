/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  esling: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;

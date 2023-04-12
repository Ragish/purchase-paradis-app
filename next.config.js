/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["s3.ap-southeast-2.amazonaws.com"],
  },
};

module.exports = {
  ...nextConfig,
  experiments: {
    topLevelAwait: true,
  },
};

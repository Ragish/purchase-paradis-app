// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     appDir: true,
//   },
//   images: {
//     domains: ["s3.ap-southeast-2.amazonaws.com"],
//   },
// };

// module.exports = {
//   ...nextConfig,
//   experiments: {
//     topLevelAwait: true,
//   },
// };

/** @type {import("next").NextConfig} */
module.exports = {
  experimental: { appDir: true },
  serverComponentsExternalPackages: ["mongoose"],
  images: {
    domains: ["s3.ap-southeast-2.amazonaws.com"],
  },
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
  },
};

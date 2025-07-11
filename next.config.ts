/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.aiscribbles.com',
      },
    ],
  },
};

module.exports = nextConfig;
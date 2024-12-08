/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'neilpatel.com',
      }
    ]
  }
};

export default nextConfig;

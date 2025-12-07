/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.dicebear.com',
        pathname: '/**',
      },
    ],
    // زيادة timeout للصور الخارجية
    minimumCacheTTL: 60,
  },
};

export default nextConfig;

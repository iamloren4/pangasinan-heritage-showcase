/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH
  ? `/${process.env.NEXT_PUBLIC_BASE_PATH.replace(/^\/+|\/+$/g, '')}`
  : '';

const nextConfig = {
  output: 'export',
  basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

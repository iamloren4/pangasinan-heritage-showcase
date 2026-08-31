/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",

  basePath: "/pangasinan-heritage-showcase",

  assetPrefix: "/pangasinan-heritage-showcase/",

  trailingSlash: true,

  images: {
    unoptimized: true,
  },
};

export default nextConfig;

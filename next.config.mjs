/** @type {import('next').NextConfig} */
export const nextConfig = {
  output: "export",
  basePath: '/portfolio',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.scdn.co",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

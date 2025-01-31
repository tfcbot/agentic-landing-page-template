/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: "img.clerk.com",
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: "images.unsplash.com",
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: "*.cloudfront.net",
          port: '',
          pathname: '/**',
        }
      ],
    },
    env: {
      NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    },
  };

export default nextConfig;

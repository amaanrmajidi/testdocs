import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/admin/api/:path*',
          destination: 'http://localhost:8081/api/:path*',
        },
      ],
    }
  }
};

export default withMDX(config);

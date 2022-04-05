/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    MONGO_URL:
      'mongodb+srv://nextjs:nextjs@nextjs-mongodb.qb2nw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://mongodb-nextjs.vercel.app/:path*',
      },
    ]
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    MONGO_URL:
      'mongodb+srv://nextjs:nextjs@nextjs-mongodb.qb2nw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  },
};

module.exports = nextConfig;

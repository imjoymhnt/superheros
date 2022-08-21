/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    MONGO_URI:
      "mongodb+srv://imjoymhnt:qwerty123@cluster0.px203.mongodb.net/?retryWrites=true&w=majority",
  },
};

module.exports = nextConfig;

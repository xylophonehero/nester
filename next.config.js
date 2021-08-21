module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "res.cloudinary.com", "nester-strapi-dev.s3.eu-west-1.amazonaws.com"],
  },
  async rewrites()
  {
    return [
      {
        source: '/about',
        destination: '/react',
      },
      {
        source: '/test',
        destination: '/react',
      },
    ];
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./lib/generateLayoutFiles')();
    }
    return config;
  },
}

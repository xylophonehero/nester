module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "a.storyblok.com", "nester-strapi-dev.s3.eu-west-1.amazonaws.com", "d3pn6k1zz30voy.cloudfront.net"],
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

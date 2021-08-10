module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "res.cloudinary.com"],
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
}

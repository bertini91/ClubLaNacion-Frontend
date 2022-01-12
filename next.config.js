module.exports = {
  /* basePath: "/", */
  experimental: {
    async redirects() {
      return [
        {
          source: "/",
          destination: "/home",
          permanent: true,
        }, // a permanent redirect
      ];
    },
    images: {
      domains: ['https://bucket1.glanacion.com', 'example2.com'],
    },
  },
  
};

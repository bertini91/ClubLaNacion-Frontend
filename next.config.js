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
    reactStrictMode: true,
    images: {
      domains: ["bucket1.glanacion.com", "localhost", "http://bucket1.glanacion.com/Club.LN/anexos/"],
      formats: ["image/png", "image/jpeg", "image/jpg"],
    },
  },
  publicRuntimeConfig: {
    HEROKU_URL: "https://la-nacion-itr.herokuapp.com",
    CLUB_LN_URL: "https://club.lanacion.com.ar",
    ACCOUNT_TOURISM: "api/accounts/tourism",
    ACCOUNT_DISCOUNT: "api/accounts/active-flag",
  },
};

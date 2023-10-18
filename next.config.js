module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "arnoutj-website.s3.eu-central-1.amazonaws.com",
        port: "",
        pathname: "/assets/**"
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com"
      }
    ]
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: "preset-default",
                  params: {
                    overrides: {
                      removeViewBox: false
                    }
                  }
                }
              ]
            }
          }
        }
      ]
    });

    return config;
  }
};

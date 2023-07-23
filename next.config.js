module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'arnoutj-website.s3.eu-central-1.amazonaws.com',
        port: '',
        pathname: '/assets/**'
      }
    ]
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack']
    });

    return config;
  }
};

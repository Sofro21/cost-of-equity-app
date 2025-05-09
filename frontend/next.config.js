const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/cost-of-equity-app' : '',
  assetPrefix: isProd ? '/cost-of-equity-app/' : '',
};

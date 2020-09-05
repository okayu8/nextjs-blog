const path = require('path');
const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)?$/,
});

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '~': path.resolve(__dirname, './src'),
    };
    return config;
  },
  pageExtensions: ['tsx', 'mdx'],
};

module.exports = withMDX(nextConfig);

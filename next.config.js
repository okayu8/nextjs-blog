const path = require('path')

const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)?$/,
  options: {
    providerImportSource: '@mdx-js/react',
  },
})

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '~': path.resolve(__dirname, './src'),
    }
    return config
  },
  pageExtensions: ['tsx', 'mdx'],
  output: 'export',
  trailingSlash: true,
}

module.exports = withMDX(nextConfig)

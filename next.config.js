const path = require('path')
const rehypeHighlight = require('rehype-highlight')
// const rehypePrism = require('@mapbox/rehype-prism')
const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)?$/,
  options: {
    rehypePlugins: [rehypeHighlight],
  },
})

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '~': path.resolve(__dirname, './src'),
    }
    return config
  },
  pageExtensions: ['tsx', 'mdx'],
}

module.exports = withMDX(nextConfig)

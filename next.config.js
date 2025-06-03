const path = require('path')
const rehypeHighlight = require('rehype-highlight')
const remarkSlug = require('remark-slug')

const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)?$/,
  options: {
    rehypePlugins: [rehypeHighlight],
    remarkPlugins: [remarkSlug],
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
}

module.exports = withMDX(nextConfig)

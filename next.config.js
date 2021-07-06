const path = require('path')
const rehypeHighlight = require('rehype-highlight')
const remarkSlug = require('remark-slug')
const remarkAutolinkHeadings = require('remark-autolink-headings')

const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)?$/,
  options: {
    rehypePlugins: [rehypeHighlight],
    remarkPlugins: [
      remarkSlug,
      [
        remarkAutolinkHeadings,
        {
          behavior: 'prepend',
          content: {
            type: 'element',
            tagName: 'img',
            properties: {
              alt: 'header link',
              src: '/link-icon.svg',
              className: ['header-link-icon'],
            },
          },
        },
      ],
    ],
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

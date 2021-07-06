const fs = require('fs-extra')
const path = require('path')
const extractMetadata = require('extract-mdx-metadata')
const pagePrefix = path.join(process.cwd(), 'src/pages')
const docsDir = path.join(process.cwd(), 'src/pages')
const metaDataPath = path.join(process.cwd(), 'src/data/metadata.json')
const tagsListPath = path.join(process.cwd(), 'src/data/tagslist.json')
const sitemap = require('nextjs-sitemap-generator')

// 各mdxのメタデータから取得したデータをまとめる
const getMetadata = async (files, parentPath) => {
  return Promise.all(
    files
      .filter((name) => name.endsWith('.mdx') || !name.includes('.'))
      .map(async (file) => {
        const filePath = path.join(parentPath, file)
        const isDirectory = fs.statSync(filePath).isDirectory()
        if (isDirectory) {
          const children = await fs.readdir(filePath)
          const childrenMetadata = await getMetadata(children, filePath)
          return { name: file, children: childrenMetadata }
        }
        const content = await fs.readFile(filePath, 'utf-8')
        const meta = await extractMetadata(content)
        const url = filePath.replace(pagePrefix, '').replace('.mdx', '')
        return { name: meta.title || file, url, meta }
      }),
  )
}

// 日付順にarticlesを並び替える
const sortArticles = (data) => {
  const articles = (data.find((item) => item.name === 'articles') || {}).children || []
  const sorted = articles
    .map((post) => {
      console.log(new Date(post.meta.date))
      if (!post.meta) {
        console.error(`[missing metadata]: ${post.url}`)
        return post
      }

      if (!post.meta.title) {
        console.error(`[metadata]: missing key "title" in (${post.name}) ${post.url}`)
        console.error('> Please make sure that each post has a [title].')
      }
      if (!post.meta.date) {
        console.error(`[metadata]: missing key "date" in (${post.name}) ${post.url}`)
        console.error('> Try to run "new Date().toUTCString()" in console to get "date".')
        const meta = { ...post.meta, date: new Date().toUTCString() }
        return { ...post, meta }
      }

      if (`${new Date(post.meta.date)}` === 'Invalid Date') {
        console.error(`[metadata]: format error "date" in (${post.name}) ${post.url}`)
        console.error('> Try to run "new Date().toUTCString()" in console to get "date".')
      }
      return post
    })
    .sort((pre, next) => +new Date(next.meta.date) - new Date(pre.meta.date))

  return data.map((v) => {
    if (v.name !== 'articles') return v
    return { ...v, children: sorted }
  })
}

// metadataの各articleのtagsを取得し重複の無い配列として返す
const getTagsList = (data) => {
  let tagsList = []
  data.map((item) => {
    if (item.name === 'articles') {
      item.children.map((child) => {
        if (child.meta.tags) {
          child.meta.tags.map((tag) => {
            if (!tagsList.includes(tag)) {
              tagsList.push(tag)
            }
          })
        }
      })
    }
  })

  return tagsList
}

;(async () => {
  try {
    // metadata.jsonの生成
    const files = await fs.readdir(docsDir)
    const data = await getMetadata(files, docsDir)
    const sorted = sortArticles(data)
    await fs.ensureFile(metaDataPath)
    await fs.writeJson(metaDataPath, sorted)

    //taglist.jsonの生成
    const tagsList = getTagsList(data)
    await fs.ensureFile(tagsListPath)
    await fs.writeJson(tagsListPath, tagsList)
  } catch (e) {
    console.log(e)
    process.exit(1)
  }

  // TODO: 作成時に整形したい
  sitemap({
    baseUrl: '',
    pagesDirectory: path.join(process.cwd(), 'src/pages/articles'),
    ignoredPaths: ['index'],
    targetDirectory: 'public/',
    nextConfigPath: path.join(__dirname, '../next.config.js'),
    ignoredExtensions: ['png', 'jpg'],
  })
})()

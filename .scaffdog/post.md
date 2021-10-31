---
name: 'post'
root: './src/pages/articles'
output: '**/*'
ignore: []
questions:
  value: 'Please enter any text.'
---

# `{{ inputs.value }}.mdx`

```md
import Layout from '~/components/Layout'

export const meta = {
  title: '',
  createdDate: '',
  updatedDate: '',
  description:'',
  tags: [],
}

export const headlines = [
  {
    title: '',
    children: [],
  },
  {
    title: '',
    children: [],
  },
]

<!-- 記事の内容 -->

export default ({ children }) => (
  <Layout meta={meta} headlines={headlines} type="post">
    {children}
  </Layout>
)
```

---
name: 'page'
root: './src/pages'
output: '**/*'
ignore: []
questions:
  value: 'Please enter any text.'
---

# `{{ inputs.value }}.tsx`

```jsx
import Layout from '~/components/Layout'

const meta = {
  title: '',
  description: '',
}

const {{ inputs.value }} = () => {
  return (
    <Layout meta={meta}>
      {/* children */}
    </Layout>
  )
}
export default {{ inputs.value }}

```

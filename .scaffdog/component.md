---
name: 'component'
root: './src/components'
output: '**/*'
ignore: []
questions:
  value: 'Please enter any text.'
---

# `{{ inputs.value }}.tsx`

```jsx
import React from 'react'
import styled from 'styled-components'

type Props = {}

const {{ inputs.value }}: React.FC<Props> = () => {
  return ()
}
export default {{ inputs.value }}

```

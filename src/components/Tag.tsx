import React from 'react'
import styled from 'styled-components'

import Const from '~/const'

type Props = {
  tag: string
}

const Wrapper = styled.div`
  margin: ${Const.SIZE.MARGIN.SMALL}px;
  padding: 4px 8px;
  font-size: ${Const.SIZE.FONT.SMALL}px;
  font-weight: 700;
  color: ${Const.COLOR.FONT.WHITE};
  background-color: ${Const.COLOR.BACKGROUND.TAG};
  border-radius: 16px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`

const Tag = ({ tag }: Props) => {
  return (
    <a href={`/tag/${tag}`}>
      <Wrapper>{tag}</Wrapper>
    </a>
  )
}

export default Tag

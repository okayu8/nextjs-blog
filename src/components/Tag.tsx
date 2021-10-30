import React from 'react'
import styled from 'styled-components'

type Props = {
  tag: string
}

const Wrapper = styled.div`
  margin: ${(props) => props.theme.SIZE.MARGIN.SMALL}px;
  padding: 4px 8px;
  font-size: ${(props) => props.theme.SIZE.FONT.SMALL}px;
  font-weight: 700;
  color: ${(props) => props.theme.COLOR.FONT.WHITE};
  background: ${(props) => props.theme.COLOR.BACKGROUND.TAG};
  border-radius: 16px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  transition: all 0.1s;

  &:hover {
    background: ${(props) => props.theme.COLOR.BACKGROUND.TAG_HOEVER};
  }
`

const Tag = ({ tag }: Props) => {
  return (
    <a href={`/tag/${tag}`}>
      <Wrapper>{tag}</Wrapper>
    </a>
  )
}

export default Tag

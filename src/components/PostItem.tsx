import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import Const from '~/const'

type Props = {
  post: {
    name: string
    url: string
    meta: {
      title: string
      date: string
      description: string
      tags: string[] | []
    }
  }
}

const Wrapper = styled.div`
  margin: 0 0 ${Const.SIZE.MARGIN.XLARGE}px;
  padding: ${Const.SIZE.MARGIN.XLARGE}px;
  background: ${Const.COLOR.BACKGROUND.PANEL};
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.1s;

  > a {
    font-size: ${Const.SIZE.FONT.SITE_TITLE}px;
    color: ${Const.COLOR.FONT.LINK};
  }

  &:hover {
    border-color: transparent;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12);
  }
`

const Date = styled.p`
  margin: 0;
  color: ${Const.COLOR.FONT.DATE};
`

const Description = styled.p`
  margin: 0;
  font-size: ${Const.SIZE.FONT.LARGE};
`

const PostItem: React.FC<Props> = ({
  post: {
    name,
    url,
    meta: { date, description },
  },
}) => {
  return (
    <>
      <Link href={url}>
        <Wrapper>
          <Date>{date}</Date>
          <a>{name}</a>
          <Description>{description}</Description>
        </Wrapper>
      </Link>
    </>
  )
}

export default PostItem

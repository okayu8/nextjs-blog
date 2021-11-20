import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

type Props = {
  post: {
    name: string
    url: string
    meta: {
      title: string
      createdDate: string
      description: string
      tags: string[] | []
      imgPath?: string
    }
  }
}

const Wrapper = styled.div`
  margin: 0 0 ${(props) => props.theme.SIZE.MARGIN.XLARGE}px;
  padding: ${(props) => props.theme.SIZE.MARGIN.XLARGE}px;
  background: ${(props) => props.theme.COLOR.BACKGROUND.PANEL};
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.1s;

  > a {
    font-size: ${(props) => props.theme.SIZE.FONT.SITE_TITLE}px;
    color: ${(props) => props.theme.COLOR.FONT.LINK};
  }

  &:hover {
    border-color: transparent;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12);
  }
`

const Date = styled.p`
  margin: 0;
  color: ${(props) => props.theme.COLOR.FONT.DATE};
`

const Description = styled.p`
  margin: 0;
  font-size: ${(props) => props.theme.SIZE.FONT.LARGE};
`

const PostItem: React.FC<Props> = ({
  post: {
    name,
    url,
    meta: { createdDate, description },
  },
}) => {
  return (
    <>
      <Link href={url}>
        <Wrapper>
          <Date>{createdDate}</Date>
          <a>{name}</a>
          <Description>{description}</Description>
        </Wrapper>
      </Link>
    </>
  )
}

export default PostItem

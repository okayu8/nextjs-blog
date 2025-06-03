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
      bgImgPath?: string
    }
  }
}

const DEFAULT_IMG_PATH = '/img/articles/article_default.jpeg'

const Wrapper = styled.div<{ $imgPath: string }>`
  width: 270px;
  height: 300px;
  background: ${(props) => props.theme.COLOR.BACKGROUND.PANEL};
  box-sizing: border-box;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.1s;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  background: no-repeat url(${(props) => props.$imgPath});
  background-size: auto 100%;
  &:hover {
    opacity: 0.6;
    border-color: transparent;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }
`

const ContentWrapper = styled.div`
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 150px;
  padding: ${(props) => props.theme.SIZE.MARGIN.XLARGE}px;
`

const Date = styled.p`
  margin: 0;
  color: ${(props) => props.theme.COLOR.FONT.TOP_DATE};
`

const Title = styled.p`
  margin: 0;
  font-size: ${(props) => props.theme.SIZE.FONT.XXLARGE}px;
  color: ${(props) => props.theme.COLOR.FONT.WHITE};
  word-break: break-word;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`

const PostItem: React.FC<Props> = ({
  post: {
    name,
    url,
    meta: { createdDate, imgPath = DEFAULT_IMG_PATH },
  },
}) => {
  return (
    <>
      <Link href={url}>
        <Wrapper $imgPath={imgPath} role="link">
          <ContentWrapper>
            <Date>{createdDate}</Date>
            <Title>{name}</Title>
          </ContentWrapper>
        </Wrapper>
      </Link>
    </>
  )
}

export default PostItem

import React from 'react'
import styled from 'styled-components'

import TopPostItem from './TopPostItem'
import metadata from '~/data/metadata.json'

type Props = {
  tagName?: string
}

const allPosts = (data: any) => {
  const postNode = data.find((item: any) => item.name === 'articles')
  const posts = (postNode || {}).children || []
  return posts
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 1116px;
  margin 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  @media screen and (max-width: 1163px) {
    max-width: 846px;
  } 
  @media screen and (max-width: 881px) {
    max-width: 552px;
  }
  @media screen and (max-width: 599px) {
    max-width: 270px;
  }
`

const PostList: React.FC<Props> = ({ tagName }) => {
  const posts = allPosts(metadata)
  const slisedPosts = posts.slice(0, 8)
  return (
    <Wrapper>
      {slisedPosts.map((item: any, index: any) => {
        if (!tagName) {
          return <TopPostItem key={index} post={item} />
        } else {
          return item.meta.tags.includes(tagName) && <TopPostItem key={index} post={item} />
        }
      })}
    </Wrapper>
  )
}

export default PostList

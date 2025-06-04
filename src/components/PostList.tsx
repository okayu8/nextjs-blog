import React from 'react'

import PostItem from './PostItem'
import metadata from '~/data/metadata.json'

type Props = {
  tagName?: string
}

const allPosts = (data: any) => {
  const postNode = data.find((item: any) => item.name === 'articles')
  const posts = (postNode || {}).children || []
  return posts
}

const PostList: React.FC<Props> = ({ tagName }) => {
  const posts = allPosts(metadata)
  return (
    <div className="mt-24">
      {posts.map((item: any, index: any) => {
        if (!tagName) {
          return <PostItem key={index} post={item} />
        } else {
          return item.meta.tags.includes(tagName) && <PostItem key={index} post={item} />
        }
      })}
    </div>
  )
}

export default PostList
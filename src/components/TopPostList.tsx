import React from 'react'

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

const PostList: React.FC<Props> = ({ tagName }) => {
  const posts = allPosts(metadata)
  const slisedPosts = posts.slice(0, 8)
  return (
    <div className="w-full max-w-[270px] sm:max-w-[552px] lg:max-w-[846px] xl:max-w-1120 mx-auto flex flex-wrap gap-[12px]">
      {slisedPosts.map((item: any, index: any) => {
        if (!tagName) {
          return <TopPostItem key={index} post={item} />
        } else {
          return item.meta.tags.includes(tagName) && <TopPostItem key={index} post={item} />
        }
      })}
    </div>
  )
}

export default PostList
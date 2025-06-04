import React from 'react'
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
        <div 
          role="link"
          className="mb-24 p-24 bg-bg-panel border border-black/[0.12] rounded-lg cursor-pointer transition-all duration-100 hover:border-transparent hover:shadow-[0_10px_20px_rgba(0,0,0,0.12)]"
        >
          <p className="m-0 text-font-date">{createdDate}</p>
          <p className="text-24 text-font-link m-0">{name}</p>
          <p className="m-0 text-18">{description}</p>
        </div>
      </Link>
    </>
  )
}

export default PostItem
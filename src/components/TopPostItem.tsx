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

const DEFAULT_IMG_PATH = '/img/articles/article_default.jpeg'

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
        <div 
          role="link"
          className="w-[270px] h-[300px] bg-bg-panel box-border rounded-lg cursor-pointer transition-all duration-100 overflow-hidden flex flex-row items-end bg-no-repeat bg-auto hover:opacity-60 hover:border-transparent hover:shadow-[0_10px_20px_rgba(0,0,0,0.3)]"
          style={{
            backgroundImage: `url(${imgPath})`,
            backgroundSize: 'auto 100%'
          }}
        >
          <div className="bg-black/60 w-full h-[150px] p-24">
            <p className="m-0 text-font-topDate">{createdDate}</p>
            <p className="m-0 text-24 text-font-white break-words line-clamp-3">{name}</p>
          </div>
        </div>
      </Link>
    </>
  )
}

export default PostItem
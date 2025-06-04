import React from 'react'

type Props = {
  tag: string
}

const Tag = ({ tag }: Props) => {
  return (
    <a href={`/tag/${tag}`} role="button">
      <div className="m-4 px-8 py-4 text-12 font-bold text-font-white bg-bg-tag rounded-[16px] cursor-pointer shadow-[0_2px_4px_rgba(0,0,0,0.5)] transition-all duration-100 hover:bg-bg-tagHover">
        {tag}
      </div>
    </a>
  )
}

export default Tag
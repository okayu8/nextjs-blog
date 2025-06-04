import React, { Fragment } from 'react'

type Props = {
  headlines?: HeadLineType[]
}

export type HeadLineType = {
  title: string
  children: HeadLineType[]
}

const parseTitleToLinkId = (s: string) => {
  const parsed = s.toLowerCase().replace(/\s/g, '-').replace('.', '')
  return `#${parsed}`
}

const Toc: React.FC<Props> = ({ headlines }) => {
  const renderHeadline = (headline: HeadLineType) => (
    <Fragment key={headline.title}>
      <li className="py-4 px-0 list-none rounded hover:bg-bg-baseHover">
        <a href={parseTitleToLinkId(headline.title)} className="block">
          {headline.title}
        </a>
      </li>
      {(headline.children || []).length > 0 ? (
        <ul className="pl-24 list-none text-18">
          {(headline.children || []).map((child) => renderHeadline(child))}
        </ul>
      ) : null}
    </Fragment>
  )
  
  return (
    <div>
      <div className="text-[1.5em] text-font-date">CONTENTS</div>
      <ul className="px-[12px] pb-8 pl-[12px] mt-8 list-none text-18">
        {headlines?.map((headline: HeadLineType) => renderHeadline(headline))}
      </ul>
    </div>
  )
}

export default Toc
import React, { Fragment } from 'react'
import styled from 'styled-components'

import Const from '~/const'

type Props = {
  headlines?: HeadLineType[]
}

export type HeadLineType = {
  title: string
  children: HeadLineType[]
}

const OuterUl = styled.ul`
  padding: 8px 12px;
  list-style: none;
  font-size: ${Const.SIZE.FONT.LARGE};
`

const InnerUl = styled.ul`
  padding-left: 24px;
  list-style: none;
  font-size: ${Const.SIZE.FONT.LARGE};
`

const Li = styled.li`
  padding: 4px 0;
  &:hover {
    background: ${Const.COLOR.BACKGROUND.BASE};
  }
`

const parseTitleToLinkId = (s: string) => {
  const parsed = s.toLowerCase().replace(/\s/g, '-').replace('.', '')
  return `#${parsed}`
}

const Toc: React.FC<Props> = ({ headlines }) => {
  const renderHeadline = (headline: HeadLineType) => (
    <Fragment key={headline.title}>
      <a href={parseTitleToLinkId(headline.title)}>
        <Li>{headline.title}</Li>
      </a>
      {(headline.children || []).length > 0 ? (
        <InnerUl>{(headline.children || []).map((child) => renderHeadline(child))}</InnerUl>
      ) : null}
    </Fragment>
  )
  return (
    <div>
      <OuterUl>{headlines?.map((headline: HeadLineType) => renderHeadline(headline))}</OuterUl>
    </div>
  )
}

export default Toc

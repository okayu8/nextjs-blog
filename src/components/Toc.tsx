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

const Title = styled.div`
  font-size: 1.5em;
  color: ${Const.COLOR.FONT.DATE};
`

const OuterUl = styled.ul`
  padding: 0px 12px 8px 12px;
  margin-top: 8px;
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
  list-style: none;
  border-radius: 4px;
  &:hover {
    background: ${Const.COLOR.BACKGROUND.BASE_HOVER};
  }
`

const TocLink = styled.a`
  display: block;
`

const parseTitleToLinkId = (s: string) => {
  const parsed = s.toLowerCase().replace(/\s/g, '-').replace('.', '')
  return `#${parsed}`
}

const Toc: React.FC<Props> = ({ headlines }) => {
  const renderHeadline = (headline: HeadLineType) => (
    <Fragment key={headline.title}>
      <Li>
        <TocLink href={parseTitleToLinkId(headline.title)}>{headline.title}</TocLink>
      </Li>
      {(headline.children || []).length > 0 ? (
        <InnerUl>{(headline.children || []).map((child) => renderHeadline(child))}</InnerUl>
      ) : null}
    </Fragment>
  )
  return (
    <div>
      <Title>CONTENTS</Title>
      <OuterUl>{headlines?.map((headline: HeadLineType) => renderHeadline(headline))}</OuterUl>
    </div>
  )
}

export default Toc

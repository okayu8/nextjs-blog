import React from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

import CommonHeader from './organisms/common-header'
import CommonFooter from './organisms/common-footer'
import Tag from './atoms/tag'
import Const from '~/const'

const theme = {
  colors: {
    font_blue: '#00b7ce',
    header_gray: '#555',
    green: '#0f0',
  },
  layout: {
    width: 960,
  },
} as const

type Props = {
  children?: React.ReactNode
  meta: {
    title?: string
    date: string
    description: string
    tags?: string[] | []
  }
}

const Layout: React.FC<Props> = ({ children, meta }) => {
  const tags = meta.tags || []
  return (
    <div>
      <GlobalStyle />
      <CommonHeader />
      <Container>
        <PostContainer>
          <SideBar>test </SideBar>
          <PostContent>
            <H1>{meta.title}</H1>
            <Date>{meta.date}</Date>
            {tags && (
              <TagsWrapper>
                {tags.map((item: string, index: any) => {
                  return <Tag key={index} tag={item} />
                })}
              </TagsWrapper>
            )}
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
          </PostContent>
        </PostContainer>
        <CommonFooter />
      </Container>
    </div>
  )
}

const GlobalStyle = createGlobalStyle`
  html {
    font-family: "-apple-system","BlinkMacSystemFont","Helvetica Neue","Segoe UI","Hiragino Kaku Gothic ProN","Hiragino Sans","ヒラギノ角ゴ ProN W3","Arial","メイリオ","Meiryo","sans-serif";
    line-height: 1.75;
    font-weight: 400;
    font-size: ${Const.SIZE.FONT.BASE}px;
    -webkit-letter-spacing: .03em;
    -moz-letter-spacing: .03em;
    -ms-letter-spacing: .03em;
    letter-spacing: .03em;
    color: ${Const.COLOR.FONT.BASE};
  }

  body {
    margin: ${Const.SIZE.HEIGHT.HEADER}px 0 0 0;
    padding: 0;
    background-color: ${Const.COLOR.BACKGROUND.BASE};
  }

  a {
    color: ${Const.COLOR.FONT.LINK};
    text-decoration: none;
  }

  pre {
    font-size: 14px;
  }

  code {
    font-family: Consolas, Monaco, monospace;
    border-radius: 4px;
  }
`

const Container = styled.div`
  margin: 0 auto;
  padding: ${Const.SIZE.MARGIN.XLARGE}px;
  max-width: ${Const.SIZE.WIDTH.WIDE_CONTENT}px;
`

const H1 = styled.h1`
  color: ${Const.COLOR.FONT.PAGE_TITLE};
  margin: 0;
`

const Date = styled.p`
  color: ${Const.COLOR.FONT.DATE};
  margin: 0;
  text-align: right;
`

const TagsWrapper = styled.div`
  display: flex;
`

const PostContainer = styled.div`
  display: flex;
  flex-direction: flex-between;
`

const PostContent = styled.div`
  width: 100%;
  margin-left: ${Const.SIZE.WIDTH.TABLE_OF_CONTENT}px;

  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`

const SideBar = styled.div`
  width: ${Const.SIZE.WIDTH.TABLE_OF_CONTENT}px;
  position: fixed;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export default Layout

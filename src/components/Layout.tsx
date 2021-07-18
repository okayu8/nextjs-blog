import React from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import Head from 'next/head'

import CommonHeader from './CommonHeader'
import CommonFooter from './CommonFooter'
import Tag from './Tag'
import Toc, { HeadLineType } from './Toc'

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
  headlines?: HeadLineType[]
  type?: 'normal' | 'post'
}

const Wrapper = styled.div`
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
  margin-bottom: ${Const.SIZE.MARGIN.XXLARGE}px;
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

const MainContent = styled.main<{ type?: 'normal' | 'post' }>(
  ({ type }) => `
    width: ${Const.SIZE.WIDTH.CONTENT}px;
    margin: 0 auto;
    ${type !== 'normal' &&
    `
        margin: 0 0 0 340px ;
        width: calc(100% - 340px);
      `
    }

    @media screen and (max-width: 768px) {
      margin: 0 auto;
      width: 100%;
    }
  `,
)

const SideBar = styled.div`
  position: fixed;
  width: ${Const.SIZE.WIDTH.TABLE_OF_CONTENT}px;
  background: ${Const.COLOR.BACKGROUND.BASE};
  padding: ${Const.SIZE.MARGIN.LARGE}px;
  border-radius: 4px;
  box-shadow: var(--shadow);
  --shadow: 4px 4px 8px rgba(0, 0, 0, 0.1), -4px -4px 8px rgba(255, 255, 255, 0.9);

  @media screen and (max-width: 768px) {
    display: none;
  }
`

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
    font-size: 0.8em;
  }

  code {
    font-family: Consolas, Monaco, monospace;
    border-radius: 4px;
  }

  p {
    word-break: break-all;
    white-space: pre-wrap;
    code {
      padding: 2px;
      font-size: 0.8em;
      background: ${Const.COLOR.BACKGROUND.CODE};
    }
  }

  h1, h2, h3, h4, h5 {
    &::before {
      display: block;
      height: 6rem;
      margin-top: -6rem;
      content: "";
    }
  }

  h1 {
    font-size: 2.2em;
    text-decoration: underline;
    text-underline-position: under;
    text-decoration-color: ${Const.COLOR.BORDER.H1};
    text-decoration-thickness: 6px;
  }

  h2 {
    font-size: 2em;
    margin-top: 80px;
    text-decoration: underline;
  }

  h3 {
    margin-top: 50px;
  }

  li {
    list-style: none;
  }
`

const Layout: React.FC<Props> = ({ children, meta, headlines, type = 'normal' }) => {
  const tags = meta.tags || []
  return (
    <div>
      <Head>
        <title>{meta.title ? `${meta.title} | OK Log` : 'OKLog'}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={meta.description} />
      </Head>
      <GlobalStyle />
      <CommonHeader />
      <Wrapper>
        {/* 規模が大きくなったらテンプレート分ける */}
        {type === 'post' && (
          <SideBar>
            <Toc headlines={headlines} />
          </SideBar>
        )}
        <Container>
          <MainContent type={type}>
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
          </MainContent>
        </Container>
        <CommonFooter />
      </Wrapper>
    </div>
  )
}

export default Layout

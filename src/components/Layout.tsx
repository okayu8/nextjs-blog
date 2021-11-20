import React from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import Head from 'next/head'

import CommonHeader from './CommonHeader'
import CommonFooter from './CommonFooter'
import Tag from './Tag'
import Toc, { HeadLineType } from './Toc'

import Const from '~/const'

type Props = {
  meta: {
    title?: string
    createdDate?: string
    updatedDate?: string
    description: string
    tags?: string[] | []
    imgPath?: string
    bgImgPath?: string
  }
  headlines?: HeadLineType[]
  type?: 'normal' | 'post' | 'top'
}

type ThemeType = {
  COLOR: typeof Const.LIGHT_THEME | typeof Const.DARK_THEME
  SIZE: typeof Const.SIZE
}

const theme = {
  light: {
    COLOR: Const.LIGHT_THEME,
    SIZE: Const.SIZE,
  },
  dark: {
    COLOR: Const.DARK_THEME,
    SIZE: Const.SIZE,
  },
} as const

const Wrapper = styled.div`
  margin: 0 auto;
  padding: ${(props) => props.theme.SIZE.MARGIN.XLARGE}px;
  max-width: ${(props) => props.theme.SIZE.WIDTH.WIDE_CONTENT}px;
`

const BackgroundImg = styled.div<{ imgPath?: string }>`
  position: fixed;
  top: -110px;
  left: -24px;
  width: calc(100% + 48px);
  height: 400px;
  z-index: -1;
  ${(props) =>
    props.imgPath &&
    `
    background: linear-gradient(to bottom,rgba(255, 255, 255, 0.6) 20%,${props.theme.COLOR.BACKGROUND.BASE} 100%),
      url(${props.imgPath});
    background-repeat: no-repeat;
    background-size: cover;
  `};
`

const H1 = styled.h1`
  color: ${(props) => props.theme.COLOR.FONT.PAGE_TITLE};
  margin: 0;
`

const DateWrapper = styled.div`
  color: ${(props) => props.theme.COLOR.FONT.DATE};
  display: flex;
  justify-content: end;
`

const DateTitle = styled.p`
  margin: 0 16px;
`

const Date = styled.p`
  margin: 0;
  width: 100px;
  text-align: right;
`

const TagsWrapper = styled.div`
  display: flex;
  margin: ${(props) => props.theme.SIZE.MARGIN.LARGE}px 0
    ${(props) => props.theme.SIZE.MARGIN.XXLARGE}px 0;
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

const MainContent = styled.main<{ type?: 'normal' | 'post' | 'top' }>(
  ({ type, theme }) => `
    width: ${theme.SIZE.WIDTH.CONTENT}px;
    margin: 0 auto;
    // position: relative;
    ${
      type === 'top'
        ? `
        width: 100%;
      `
        : ''
    }
    ${
      type === 'post'
        ? `
        margin: 0 0 0 340px;
        width: calc(100% - 340px);
      `
        : ''
    };
    

    @media screen and (max-width: 768px) {
      margin: 0 auto;
      width: 100%;
    }
  `,
)

const SideBar = styled.div`
  position: fixed;
  width: ${(props) => props.theme.SIZE.WIDTH.TABLE_OF_CONTENT}px;
  background: ${(props) => props.theme.COLOR.BACKGROUND.BASE};
  padding: ${(props) => props.theme.SIZE.MARGIN.LARGE}px;
  border-radius: 4px;
  box-shadow: var(--shadow);
  --shadow: 0px 0px 8px rgba(0, 0, 0, 0.4);

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  html {
    font-family: "-apple-system","BlinkMacSystemFont","Helvetica Neue","Segoe UI","Hiragino Kaku Gothic ProN","Hiragino Sans","ヒラギノ角ゴ ProN W3","Arial","メイリオ","Meiryo","sans-serif";
    line-height: 1.75;
    font-weight: 400;
    font-size: ${(props) => props.theme.SIZE.FONT.BASE}px;
    -webkit-letter-spacing: .03em;
    -moz-letter-spacing: .03em;
    -ms-letter-spacing: .03em;
    letter-spacing: .03em;
    color: ${(props) => props.theme.COLOR.FONT.BASE};
  }

  body {
    margin: ${(props) => props.theme.SIZE.MARGIN.XXXLARGE}px 0 0 0;
    padding: 0;
    background-color: ${(props) => props.theme.COLOR.BACKGROUND.BASE};
  }

  a {
    color: ${(props) => props.theme.COLOR.FONT.LINK};
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
      background: ${(props) => props.theme.COLOR.BACKGROUND.CODE};
    }
  }

  ul, li {
    word-break: break-all;
    white-space: pre-wrap;
  }

  h2, h3, h4, h5 {
    &::before {
      display: block;
      height: 6rem;
      margin-top: -6rem;
      content: "";
    }
  }

  h1 {
    font-size: 2.2em;
    text-underline-position: under;
    text-decoration-color: ${(props) => props.theme.COLOR.BORDER.H1};
    text-decoration-thickness: 6px;
  }

  h2 {
    font-size: 1.8em;
    margin-top: 60px;
    border-bottom: solid 4px ${(props) => props.theme.COLOR.BORDER.H2};
  }

  h3 {
    margin-top: 40px;
  }
`

const Layout: React.FC<Props> = ({ children, meta, headlines, type = 'normal' }) => {
  const tags = meta.tags || []
  return (
    // TODO: LIGHT_THEME と DARK_THEME を切り替えられるようにする
    <ThemeProvider theme={theme['light']}>
      <Head>
        <title>{meta.title ? `${meta.title} | OK Log` : 'OKLog'}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={meta.description} />
      </Head>
      <GlobalStyle />
      <CommonHeader />
      <BackgroundImg imgPath={meta.bgImgPath} />
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
            {type === 'post' && meta.createdDate && (
              <DateWrapper>
                <DateTitle>作成日</DateTitle>
                <Date>{meta.createdDate}</Date>
              </DateWrapper>
            )}
            {type === 'post' && meta.updatedDate && (
              <DateWrapper>
                <DateTitle>更新日</DateTitle>
                <Date>{meta.updatedDate}</Date>
              </DateWrapper>
            )}
            {type === 'post' && tags && (
              <TagsWrapper>
                {tags.map((item: string, index: any) => {
                  return <Tag key={index} tag={item} />
                })}
              </TagsWrapper>
            )}
            {children}
          </MainContent>
        </Container>
        <CommonFooter />
      </Wrapper>
    </ThemeProvider>
  )
}

export default Layout

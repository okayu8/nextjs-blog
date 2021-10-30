import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import Icons from '~/components/icons'

const { ProfileIcon, PostIcon } = Icons

const Wrapper = styled.header<{ isScrollTop: boolean }>`
  position: fixed;
  top: 0;
  width: 100%;
  height: ${(props) => props.theme.SIZE.HEIGHT.HEADER}px;
  transition: all 0.2s;
  background-color: ${(props) =>
    props.isScrollTop
      ? (props) => props.theme.COLOR.BACKGROUND.HEADER
      : props.theme.COLOR.BACKGROUND.HEADER_SCROLL};
  box-shadow: 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%),
    0px 2px 4px -1px rgb(0 0 0 / 20%);
`

const Inner = styled.div`
  margin: 0 auto;
  padding: 0 ${(props) => props.theme.SIZE.MARGIN.XLARGE}px;
  max-width: ${(props) => props.theme.SIZE.WIDTH.WIDE_CONTENT}px;
  height: 100%;
  display: flex;
  justify-content: space-between;
`

const TitleWrapper = styled.div`
  height: 100%;
  display: flex;
`

const SiteTitle = styled.a`
  margin: auto;
  color: ${(props) => props.theme.COLOR.FONT.SITE_TITLE};
  font-size: 1.6em;
  text-decoration: none;
  cursor: pointer;
`

const Ul = styled.ul`
  @media screen and (max-width: 767px) {
    display: none;
  }
`

const Li = styled.li`
  display: inline-box;
`

const NavItem = styled.a`
  color: ${(props) => props.theme.COLOR.FONT.NAV_ITEM};
  text-decoration: none;
  display: inline-block;
  margin-left: ${(props) => props.theme.SIZE.MARGIN.LARGE}px;
  cursor: pointer;
`

const SpIcons = styled.div`
  display: flex;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

const P = styled.p`
  margin-left: ${(props) => props.theme.SIZE.MARGIN.LARGE}px;
  cursor: pointer;
`

const CommonHeader: React.FC = () => {
  const [isScrollTop, setIsScrollTop] = useState(true)
  const ScrollEvent = () => {
    if (window.scrollY === 0) {
      return setIsScrollTop(true)
    } else {
      return setIsScrollTop(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', ScrollEvent)
    return () => {
      window.removeEventListener('scroll', ScrollEvent)
    }
  }, [])
  return (
    <Wrapper isScrollTop={isScrollTop}>
      <Inner>
        <TitleWrapper>
          <Link href="/">
            <SiteTitle>OKLog</SiteTitle>
          </Link>
        </TitleWrapper>
        <Ul>
          <Li>
            <Link href="/articles">
              <NavItem>Articles</NavItem>
            </Link>
          </Li>
          <Li>
            <Link href="/about">
              <NavItem>About</NavItem>
            </Link>
          </Li>
        </Ul>
        <SpIcons>
          <Link href="/articles">
            <P>
              <PostIcon />
            </P>
          </Link>
          <Link href="/about">
            <P>
              <ProfileIcon />
            </P>
          </Link>
        </SpIcons>
      </Inner>
    </Wrapper>
  )
}

export default CommonHeader

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import Const from '~/const';

const CommonHeader = () => {
  return (
    <Wrapper>
      <Inner>
        <TitleWrapper>
          <Link href="/">
            <SiteTitle>Atomic Style Dev</SiteTitle>
          </Link>
        </TitleWrapper>
        <ul>
          <Li>
            <Link href="/posts">
              <NavItem>Articles</NavItem>
            </Link>
          </Li>
          <Li>
            <Link href="/about">
              <NavItem>About</NavItem>
            </Link>
          </Li>
        </ul>
      </Inner>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: ${Const.SIZE.HEIGHT.HEADER}px;
  background-color: ${Const.COLOR.BACKGROUND.HEADER};
`;

const Inner = styled.div`
  margin: 0 auto;
  padding: 0 ${Const.SIZE.MARGIN.XLARGE}px;
  max-width: ${Const.SIZE.WIDTH.CONTENT}px;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const TitleWrapper = styled.div`
  height: 100%;
  display: flex;
`;

const SiteTitle = styled.a`
  margin: auto;
  color: ${Const.COLOR.FONT.SITE_TITLE};
  font-size: 1.6em;
  text-decoration: none;
  cursor: pointer;
`;

const Li = styled.li`
  display: inline-box;
`;

const NavItem = styled.a`
  color: ${Const.COLOR.FONT.NAV_ITEM};
  text-decoration: none;
  display: inline-block;
  margin-left: 16px;
  cursor: pointer;
`;

export default CommonHeader;

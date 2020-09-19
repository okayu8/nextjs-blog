import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import CommonHeader from './organisms/common-header';
import Const from '~/const';

const theme = {
  colors: {
    font_blue: '#00b7ce',
    header_gray: '#555',
    green: '#0f0',
  },
  layout: {
    width: 960,
  },
} as const;

type Props = {
  children?: React.ReactNode;
  meta: {
    title?: string;
    date: string;
    description: string;
  };
};

const Layout: React.FC<Props> = ({ children, meta }) => {
  return (
    <div>
      <GlobalStyle />
      <CommonHeader />
      <Container>
        <h1>{meta.title}</h1>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Container>
    </div>
  );
};

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
  };

  body {
    margin: ${Const.SIZE.HEIGHT.HEADER}px 0 0 0;
    padding: 0;
    background-color: ${Const.COLOR.BACKGROUND.BASE}
  };
`;

const Container = styled.div`
  margin: 0 auto;
  padding: 0 ${Const.SIZE.MARGIN.XLARGE}px;
  max-width: ${Const.SIZE.WIDTH.CONTENT}px;
`;

export default Layout;

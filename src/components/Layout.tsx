import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const theme = {
  main: '#00b7ce',
};

type Props = {
  children?: React.ReactNode;
  meta: {
    title: string;
    date: string;
    description: string;
  };
};

const Layout: React.FC<Props> = ({ children, meta }) => {
  const siteTitle = 'Atomic Style Blog';
  return (
    <div>
      <H1>{siteTitle}</H1>
      {meta.title}
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </div>
  );
};

export const H1 = styled.h1`
  color: #00b7ce;
`;

export default Layout;

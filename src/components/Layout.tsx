import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  main: 'red',
};

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </div>
  );
};

export default Layout;

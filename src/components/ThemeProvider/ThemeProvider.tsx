import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import theme from '@constants/theme';
import { ReactNode } from 'react';

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return <StyledThemeProvider theme={theme.light}>{children}</StyledThemeProvider>;
};

export default ThemeProvider;

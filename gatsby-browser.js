import React from 'react';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import createEmotionCache from './src/createEmotionCache';
import theme from './src/styles/theme';

const cache = createEmotionCache();

export const wrapRootElement = ({ element }) => {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {element}
      </ThemeProvider>
    </CacheProvider>
  );
};

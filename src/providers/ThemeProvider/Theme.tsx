import React, { PropsWithChildren } from 'react';
import { useLang, useMedia, useMode, useStyle } from './useContext';
import { ThemeProvider } from 'styled-components';

export const Theme: React.FC<PropsWithChildren<unknown>> = ({ children }) => {
  const { mode } = useMode();
  const style = useStyle();
  const media = useMedia();
  const lang = useLang();

  return (
    <ThemeProvider theme={{ mode, ...style, media, lang }}>
      {children}
    </ThemeProvider>
  );
};

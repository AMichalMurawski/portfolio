import React, { PropsWithChildren } from 'react';
import { useLang, useMedia, useMode, useStyle } from '../useContext';
import { ThemeProvider } from 'styled-components';
import { styleData } from '../../utils/styles';

export const Theme: React.FC<PropsWithChildren<unknown>> = ({ children }) => {
  const { mode } = useMode();
  const styled = styleData(mode);
  const media = useMedia();
  const lang = useLang();

  return (
    <ThemeProvider theme={{ mode, media, lang, ...styled }}>
      {children}
    </ThemeProvider>
  );
};

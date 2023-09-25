import React, { PropsWithChildren, useState } from 'react';
import {
  LangContext,
  MediaContext,
  ModeContext,
  StyleContext,
} from './context';
import { LangType, ModeType } from './types';
import { useMediaQuery } from './useContext';
import { style } from './styleData';
import { Theme } from './Theme';

export const ThemeProvider: React.FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  const [lang, setLang] = useState<LangType>('en');
  const toggleLang = (): void => {
    if (lang === 'en') {
      setLang('pl');
    }
    if (lang === 'pl') {
      setLang('en');
    }
  };

  const mobile = useMediaQuery(480);
  const tablet = useMediaQuery(768);
  const desktop = useMediaQuery(1200);

  const [mode, setMode] = useState<ModeType>('light');
  const toggleMode = (): void => {
    if (mode === 'light') {
      setMode('dark');
    }
    if (mode === 'dark') {
      setMode('light');
    }
  };

  const styled: any = style(mode);

  return (
    <LangContext.Provider value={{ lang, setLang, toggleLang }}>
      <MediaContext.Provider value={{ mobile, tablet, desktop }}>
        <ModeContext.Provider value={{ mode, setMode, toggleMode }}>
          <StyleContext.Provider value={styled}>
            <Theme>{children}</Theme>
          </StyleContext.Provider>
        </ModeContext.Provider>
      </MediaContext.Provider>
    </LangContext.Provider>
  );
};

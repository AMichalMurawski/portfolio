import React, { PropsWithChildren } from 'react';
import { Theme } from './Theme';
import { LangProvider } from './LangProvider';
import { MediaProvider } from './MediaProvider';
import { ModeProvider } from './ModeProvider';
import { StyleProvider } from './StyleProvider';

export const ThemeProvider: React.FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  return (
    <LangProvider>
      <MediaProvider>
        <ModeProvider>
          <StyleProvider>
            <Theme>{children}</Theme>
          </StyleProvider>
        </ModeProvider>
      </MediaProvider>
    </LangProvider>
  );
};

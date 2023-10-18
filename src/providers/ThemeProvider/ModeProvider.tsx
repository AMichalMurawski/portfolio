import React, { createContext, PropsWithChildren, useState } from 'react';
import { LangState, LangType, ModeState, ModeType } from './types';

const defaultMode: ModeState = {
  mode: 'light',
  setMode: () => {},
  toggleMode: () => {},
};

export const ModeContext = createContext(defaultMode);

export const ModeProvider: React.FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  const [mode, setMode] = useState<ModeType>('light');
  const toggleMode = (): void => {
    if (mode === 'light') {
      setMode('dark');
    }
    if (mode === 'dark') {
      setMode('light');
    }
  };

  return (
    <ModeContext.Provider value={{ mode, setMode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
};

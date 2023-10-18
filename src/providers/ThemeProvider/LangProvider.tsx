import React, { createContext, PropsWithChildren, useState } from 'react';
import { LangState, LangType } from './types';

const defaultLang: LangState = {
  lang: 'en',
  setLang: () => {},
  toggleLang: () => {},
};

export const LangContext = createContext(defaultLang);

export const LangProvider: React.FC<PropsWithChildren<unknown>> = ({
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

  return (
    <LangContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
};

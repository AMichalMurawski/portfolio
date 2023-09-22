import { createContext } from 'react';
import { LangState, MediaState, ModeState } from './types';
import { style } from './styleData';

const defaultLang: LangState = {
  lang: 'en',
  setLang: () => {},
  toggleLang: () => {},
};
export const LangContext = createContext(defaultLang);

const defaultMedia: MediaState = {
  mobile: false,
  tablet: false,
  desktop: false,
};
export const MediaContext = createContext(defaultMedia);

const defaultMode: ModeState = {
  mode: 'light',
  setMode: () => {},
  toggleMode: () => {},
};
export const ModeContext = createContext(defaultMode);

export const StyleContext = createContext(style);

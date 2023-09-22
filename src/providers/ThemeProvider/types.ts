export type LangType = 'en' | 'pl';

export interface LangState {
  lang: LangType;
  setLang: (lang: LangType) => void;
  toggleLang: () => void;
}

export type ModeType = 'dark' | 'light';

export interface ModeState {
  mode: ModeType;
  setMode: (mode: ModeType) => void;
  toggleMode: () => void;
}

export interface MediaState {
  mobile: boolean;
  tablet: boolean;
  desktop: boolean;
}

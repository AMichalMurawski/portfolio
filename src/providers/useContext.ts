import { useContext, useEffect, useState } from 'react';
import { StyleContext } from './ThemeProvider/StyleProvider';
import { LangContext } from './ThemeProvider/LangProvider';
import { MediaContext } from './ThemeProvider/MediaProvider';
import { ModeContext } from './ThemeProvider/ModeProvider';

export const useLang = () => useContext(LangContext);

export const useMedia = () => useContext(MediaContext);

export const useMode = () => useContext(ModeContext);

export const useStyle = () => useContext(StyleContext);

export const useMediaQuery = (query: number) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(`(min-width: ${query}px)`);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener('resize', listener);

    return () => window.removeEventListener('resize', listener);
  }, [query, matches]);

  return matches;
};

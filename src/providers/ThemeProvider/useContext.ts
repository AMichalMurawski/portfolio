import { useContext, useEffect, useState } from 'react';
import {
  LangContext,
  MediaContext,
  ModeContext,
  StyleContext,
} from './context';

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

import React from 'react';
import {
  useLang,
  useMedia,
  useMediaQuery,
  useMode,
  useStyle,
} from '../providers/ThemeProvider/useContext';

export const FooTheme: React.FC = () => {
  const { mobile, tablet, desktop } = useMedia();
  const mediaQuery = useMediaQuery;

  const { lang, setLang, toggleLang } = useLang();

  const { mode, setMode, toggleMode } = useMode();

  const style: any = useStyle();

  return (
    <div>
      <div>
        <h2>Media test</h2>
        <p>isMobile: {mobile.toString()}</p>
        <p>isTablet: {tablet.toString()}</p>
        <p>isDesktop: {desktop.toString()}</p>
        <p>query 300px: {mediaQuery(300).toString()}</p>
      </div>
      <div>
        <h2>Lang test</h2>
        <p>Lang: {lang}</p>
        <button onClick={() => setLang('pl')}>Set PL</button>
        <button onClick={() => setLang('en')}>Set EN</button>
        <button onClick={toggleLang}>Toggle</button>
      </div>
      <div>
        <h2>Mode test</h2>
        <p style={{ backgroundColor: style.bg.main }}>Mode: {mode}</p>
        <button onClick={() => setMode('light')}>Set LIGHT</button>
        <button onClick={() => setMode('dark')}>Set DARK</button>
        <button onClick={toggleMode}>Toggle</button>
      </div>
    </div>
  );
};

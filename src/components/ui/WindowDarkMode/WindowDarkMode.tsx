import React, { useState } from 'react';
import { WindowBox, WindowFrame } from './WindowDarkMode.styled';

export const WindowDarkMode: React.FC = () => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const handleClick = () => {
    if (mode === 'light') {
      setMode('dark');
    }
    if (mode === 'dark') {
      setMode('light');
    }
  };
  return (
    <WindowBox onClick={handleClick}>
      <WindowFrame $side="left" $mode={mode} />
      <WindowFrame $side="right" $mode={mode} />
    </WindowBox>
  );
};

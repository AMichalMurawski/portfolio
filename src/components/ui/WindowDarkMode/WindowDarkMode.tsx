import React from 'react';
import { WindowBox, WindowFrame } from './WindowDarkMode.styled';

export const WindowDarkMode: React.FC = () => {
  return (
    <WindowBox>
      <WindowFrame $side="left" />
      <WindowFrame $side="right" />
    </WindowBox>
  );
};

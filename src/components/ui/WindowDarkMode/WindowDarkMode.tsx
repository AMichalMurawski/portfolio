import React, { useState } from 'react';
import {
  BgSky,
  CloudBox,
  Clouds,
  Sun,
  WindowBg,
  WindowBox,
  WindowFrame,
} from './WindowDarkMode.styled';
import { useMode } from '../../../providers';

export const WindowDarkMode: React.FC = () => {
  const { mode, toggleMode } = useMode();

  return (
    <WindowBox onClick={toggleMode}>
      <WindowBg>
        <BgSky>
          <Sun />
          <CloudBox>
            <Clouds />
          </CloudBox>
        </BgSky>
      </WindowBg>
      <WindowFrame $side="left" $mode={mode} />
      <WindowFrame $side="right" $mode={mode} />
    </WindowBox>
  );
};

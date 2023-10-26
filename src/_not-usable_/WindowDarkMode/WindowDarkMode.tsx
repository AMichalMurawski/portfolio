import React from 'react';
import {
  BgSky,
  CloudBox,
  Clouds,
  Moon,
  MoonRotate,
  Sun,
  SunRotate,
  WindowBg,
  WindowBox,
  WindowFrame,
} from './WindowDarkMode.styled';
import { useMode } from '../../providers';

export const WindowDarkMode: React.FC = () => {
  const { mode, toggleMode } = useMode();

  return (
    <WindowBox onClick={toggleMode}>
      <WindowBg>
        <BgSky>
          <SunRotate>
            <Sun />
          </SunRotate>
          <MoonRotate>
            <Moon />
          </MoonRotate>
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

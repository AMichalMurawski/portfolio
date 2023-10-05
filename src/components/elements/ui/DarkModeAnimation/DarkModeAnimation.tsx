import React from 'react';
import {
  Background,
  BackgroundWrapper,
  Cloud,
  CloudMove,
  ModeWrapper,
  Moon,
  Sun,
  SunBox,
} from './DarkModeAnimation.styled';

const mapCloud = () => {
  const array: number[] = [];
  for (let i = 0; i < Math.round(Math.random() * 10 + 10); i++) {
    array.push(i);
  }
  return array;
};

export const DarkModeAnimation: React.FC = () => {
  return (
    <ModeWrapper>
      <Background>
        {mapCloud().map((e, i) => {
          const bottom = Math.random() * 10 + 13;
          const delay = Math.round(Math.random() * 17000);
          const duration = Math.random() * 5000 + 12000;
          const scale = Math.round(Math.random() * 60) / 100 + 0.6;
          return (
            <CloudMove
              key={i}
              $bottom={bottom}
              $delay={delay}
              $duration={duration}
            >
              <Cloud $scale={scale} />
            </CloudMove>
          );
        })}
      </Background>
      <BackgroundWrapper>
        <SunBox>
          <Sun />
          <Moon />
        </SunBox>
      </BackgroundWrapper>
    </ModeWrapper>
  );
};

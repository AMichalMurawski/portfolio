import React from 'react';
import { LandscapeWrapper } from './Landscape.styled';
import { Sky } from './Landscape/Sky';
import { SunMoon } from './Landscape/SunMoon';
import { Clouds } from './Landscape/Clouds';
import { Bird } from './Landscape/Bird';

export const Landscape: React.FC = () => {
  return (
    <LandscapeWrapper>
      <Sky />
      <SunMoon />
      <Clouds />
      <Bird />
    </LandscapeWrapper>
  );
};

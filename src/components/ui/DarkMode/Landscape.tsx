import React from 'react';
import {
  BirdBox,
  BirdWingBox,
  CloudBox,
  Clouds,
  LandscapeWrapper,
  Moon,
  MoonRotate,
  Sky,
  Sun,
  SunRotate,
} from './Landscape.styled';

export const Landscape: React.FC = () => {
  return (
    <LandscapeWrapper>
      <Sky />
      <SunRotate>
        <Sun />
      </SunRotate>
      <MoonRotate>
        <Moon />
      </MoonRotate>
      <CloudBox $delay={0} $duration={30}>
        <Clouds />
      </CloudBox>
      <CloudBox $delay={3} $duration={20}>
        <Clouds />
      </CloudBox>
      <CloudBox $delay={6} $duration={25}>
        <Clouds />
      </CloudBox>
      <BirdBox>
        <BirdWingBox $side="left"></BirdWingBox>
        <BirdWingBox $side="right"></BirdWingBox>
      </BirdBox>
    </LandscapeWrapper>
  );
};

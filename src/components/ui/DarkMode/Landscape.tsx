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
  Star,
  Sun,
  SunRotate,
} from './Landscape.styled';
import { useMode } from '../../../providers/useContext';

const starArray = [
  [20, 70, 1, 248],
  [40, 85, 0.4, 954],
  [60, 60, 0.6, 547],
  [10, 20, 0.8, 457],
  [50, 5, 0.4, 354],
];

export const Landscape: React.FC = () => {
  const { mode } = useMode();

  return (
    <LandscapeWrapper>
      <Sky>
        {starArray.map((e, i) => (
          <Star
            key={i}
            $top={e[0]}
            $left={e[1]}
            $scale={e[2]}
            $duration={e[3]}
            $mode={mode}
          />
        ))}
      </Sky>
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

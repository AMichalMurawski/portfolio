import React from 'react';
import { Crater, Moon, MoonRotate, Sun, SunRotate } from './SunMoon.styled';

const cratersArray = [
  [30, 35, 0.35],
  [45, 70, 0.15],
  [65, 45, 0.25],
];

export const SunMoon: React.FC = () => {
  return (
    <>
      <SunRotate>
        <Sun></Sun>
      </SunRotate>
      <MoonRotate>
        <Moon>
          {cratersArray.map((e, i) => (
            <Crater key={i} $top={e[0]} $left={e[1]} $scale={e[2]} />
          ))}
        </Moon>
      </MoonRotate>
    </>
  );
};

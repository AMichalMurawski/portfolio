import React, { useEffect, useState } from 'react';
import { Crater, Moon, Sun, SunMoonBox, SunMoonRotate } from './SunMoon.styled';
import { useMode } from '../../../../providers';

const cratersArray = [
  [30, 35, 0.35],
  [45, 70, 0.15],
  [65, 45, 0.25],
];

export const SunMoon: React.FC = () => {
  const [rotate, setRotate] = useState<number>(0);
  const { mode } = useMode();

  useEffect(() => {
    if (
      (mode === 'light' && rotate % 120 === 60) ||
      (mode === 'dark' && rotate % 120 === 0)
    ) {
      setRotate(rotate + 60);
    }
  }, [mode, rotate]);

  return (
    <>
      <SunMoonRotate $rotate={rotate}>
        {[...Array(3)].map((e, i) => (
          <>
            <SunMoonBox $rotate={i * 120 + 0}>
              <Sun />
            </SunMoonBox>
            <SunMoonBox $rotate={i * 120 + 60}>
              <Moon>
                {cratersArray.map((e, i) => (
                  <Crater key={i} $top={e[0]} $left={e[1]} $scale={e[2]} />
                ))}
              </Moon>
            </SunMoonBox>
          </>
        ))}
      </SunMoonRotate>
    </>
  );
};

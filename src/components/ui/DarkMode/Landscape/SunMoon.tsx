import React, { useEffect, useState } from 'react';
import { Crater, Moon, Sun, SunMoonBox, SunMoonRotate } from './SunMoon.styled';
import { useMode } from '../../../../providers';

const cratersArray = [
  [30, 35, 0.35],
  [45, 70, 0.15],
  [65, 45, 0.25],
];

export const SunMoon: React.FC = () => {
  const [first, setFirst] = useState<boolean>(true);
  const [rotate, setRotate] = useState<number>(0);
  const { mode } = useMode();

  useEffect(() => {
    if (first === false) {
      setRotate(rotate + 60);
    } else if (mode === 'light') {
      setRotate(0);
      setFirst(false);
    } else if (mode === 'dark') {
      setRotate(60);
      setFirst(false);
    }
  }, [mode]);

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

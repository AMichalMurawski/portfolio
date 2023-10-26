import React from 'react';
import { SkyWraper, Star } from './Sky.styled';
import { useMode } from '../../../../providers/useContext';

const starArray = [
  [20, 70, 1, 248],
  [40, 85, 0.4, 957],
  [60, 60, 0.6, 525],
  [10, 20, 0.8, 431],
  [50, 5, 0.4, 364],
  [30, 15, 0.3, 578],
  [65, 20, 0.3, 143],
  [15, 50, 0.3, 896],
  [70, 80, 0.3, 682],
];

export const Sky: React.FC = () => {
  const { mode } = useMode();

  return (
    <SkyWraper>
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
    </SkyWraper>
  );
};

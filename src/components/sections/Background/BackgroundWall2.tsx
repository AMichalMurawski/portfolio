import React from 'react';
import { BgDarkMode, BgImage, BgWrapper } from './BackgroundWall2.styled';

export const BackgroundWall2: React.FC = () => {
  return (
    <BgWrapper>
      <BgImage />
      <BgDarkMode />
    </BgWrapper>
  );
};

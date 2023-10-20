import React from 'react';
import { BgDarkMode, BgImage, BgWrapper } from './Background.styled';

export const Background: React.FC = () => {
  return (
    <BgWrapper>
      <BgImage />
      <BgDarkMode />
    </BgWrapper>
  );
};

import React from 'react';
import { BirdBox, BirdWingBox } from './Bird.styled';

export const Bird: React.FC = () => {
  return (
    <BirdBox>
      <BirdWingBox $side="left" />
      <BirdWingBox $side="right" />
    </BirdBox>
  );
};

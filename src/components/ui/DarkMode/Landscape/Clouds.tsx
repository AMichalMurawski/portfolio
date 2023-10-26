import React from 'react';
import { Cloud, CloudBox } from './Clouds.styled';

export const Clouds: React.FC = () => {
  return (
    <>
      <CloudBox $delay={0} $duration={30}>
        <Cloud />
      </CloudBox>
      <CloudBox $delay={-6} $duration={20}>
        <Cloud />
      </CloudBox>
      <CloudBox $delay={-12} $duration={25}>
        <Cloud />
      </CloudBox>
    </>
  );
};

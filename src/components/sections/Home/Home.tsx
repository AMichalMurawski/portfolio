import React from 'react';
import { HomeWrapper } from './Home.styled';
import { Introduction, MyPicture } from '../../ui';

export const Home: React.FC = () => {
  return (
    <HomeWrapper id="home">
      <Introduction
        wrapperStyles={{
          margin: '15% 0 0',
        }}
      />
      <MyPicture />
    </HomeWrapper>
  );
};

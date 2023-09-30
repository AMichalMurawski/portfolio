import React from 'react';
import { HomeWrapper } from './Home.styled';
import { Introduction } from '../../groups/Introduction/Introduction';
import { MyPicture } from '../../groups/MyPicture/MyPicture';

export const Home: React.FC = () => {
  return (
    <HomeWrapper>
      <Introduction
        wrapperStyles={{
          margin: '15% 0 0',
        }}
      />
      <MyPicture />
    </HomeWrapper>
  );
};

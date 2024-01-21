import React from 'react';
import { HomeWrapper, IntroduceWrapper, MyPictureWrapper } from './Home.styled';
import { Introduction, MyPicture } from '../../ui';

export const Home: React.FC = () => {
  return (
    <HomeWrapper id="home">
      <MyPictureWrapper>
        <MyPicture />
      </MyPictureWrapper>
      <IntroduceWrapper>
        <Introduction />
      </IntroduceWrapper>
    </HomeWrapper>
  );
};

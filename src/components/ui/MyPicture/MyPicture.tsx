import React from 'react';
import { ButtonCV } from '../../elements';
import { groupProps } from '../../elements/types';
import {
  BackgroundImage,
  BoxWrapper,
  CVWrapper,
  Picture,
  PictureBackground,
  PictureWrapper,
} from './MyPicture.styled';
// import { myPicture } from '../../../images';

export const MyPicture: React.FC<groupProps> = ({ wrapperStyles }) => {
  return (
    <BoxWrapper style={wrapperStyles}>
      <PictureWrapper>
        <Picture src={''} alt="My picture" />
        <PictureBackground>
          <BackgroundImage />
        </PictureBackground>
      </PictureWrapper>
      <CVWrapper>
        <ButtonCV linkTo="/" />
      </CVWrapper>
    </BoxWrapper>
  );
};

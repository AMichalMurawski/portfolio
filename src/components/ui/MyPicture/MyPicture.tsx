import React from 'react';
import { ButtonCV } from '../../elements';
import { groupProps } from '../../elements/types';
import { BoxWrapper, CVWrapper, PictureWrapper } from './MyPicture.styled';

export const MyPicture: React.FC<groupProps> = ({ wrapperStyles }) => {
  return (
    <BoxWrapper style={wrapperStyles}>
      <PictureWrapper>My Pic</PictureWrapper>
      <CVWrapper>
        <ButtonCV linkTo="/curriculum-vitae" />
      </CVWrapper>
    </BoxWrapper>
  );
};

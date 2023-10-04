import React from 'react';
import {
  IntroductionWrapper,
  Name,
  Proffesion,
  Sentence,
} from './Introduction.styled';
import { groupProps } from '../../types';

export const Introduction: React.FC<groupProps> = ({ wrapperStyles }) => {
  return (
    <IntroductionWrapper style={wrapperStyles}>
      <Proffesion>Web Developer</Proffesion>
      <Name>Michał Murawski</Name>
      <Sentence>
        Anything that can be explained logically,
        <br />
        can be coded
      </Sentence>
    </IntroductionWrapper>
  );
};

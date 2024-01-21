import React from 'react';
import {
  IntroductionWrapper,
  Name,
  Proffesion,
  Sentence,
} from './Introduction.styled';

export const Introduction: React.FC = () => {
  return (
    <IntroductionWrapper>
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

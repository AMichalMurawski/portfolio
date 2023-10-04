import React from 'react';
import { Subtitle } from '../../elements/texts';
import { AboutWrapper } from './About.styled';
import { Paragraph } from '../../elements/texts/Paragraph/Paragraph';
import { aboutMe } from '../../../context';

export const About: React.FC = () => {
  return (
    <AboutWrapper id="about">
      <Subtitle>About Me</Subtitle>
      {aboutMe.map((about, i) => (
        <Paragraph key={i}>{about}</Paragraph>
      ))}
    </AboutWrapper>
  );
};

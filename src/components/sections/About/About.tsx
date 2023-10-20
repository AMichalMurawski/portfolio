import React from 'react';
import { Subtitle } from '../../elements';
import { AboutWrapper, Paragraph } from './About.styled';
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

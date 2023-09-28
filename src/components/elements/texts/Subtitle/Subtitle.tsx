import React from 'react';
import { H2Element } from './Subtitle.styled';

interface SubtitleProps {
  children: any;
}

export const Subtitle: React.FC<SubtitleProps> = ({ children }) => {
  return <H2Element>{children}</H2Element>;
};

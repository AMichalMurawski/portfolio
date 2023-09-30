import React from 'react';
import { H2Element } from './Subtitle.styled';
import { TextProps } from '../types';

export const Subtitle: React.FC<TextProps> = ({ children }) => {
  return <H2Element>{children}</H2Element>;
};

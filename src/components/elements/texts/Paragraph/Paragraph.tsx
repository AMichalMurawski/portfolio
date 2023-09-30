import React from 'react';
import { PElement } from './Paragraph.styled';
import { TextProps } from '../types';

export const Paragraph: React.FC<TextProps> = ({ children }) => {
  return <PElement>{children}</PElement>;
};

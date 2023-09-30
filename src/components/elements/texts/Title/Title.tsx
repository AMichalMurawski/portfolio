import React from 'react';
import { H1Element } from './Title.styled';
import { TextProps } from '../types';

export const Title: React.FC<TextProps> = ({ children }) => {
  return <H1Element>{children}</H1Element>;
};

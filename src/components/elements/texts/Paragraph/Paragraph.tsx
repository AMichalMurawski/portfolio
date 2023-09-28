import React from 'react';
import { PElement } from './Paragraph.styled';

interface ParagraphProps {
  children: any;
}

export const Paragraph: React.FC<ParagraphProps> = ({ children }) => {
  return <PElement>{children}</PElement>;
};

import React from 'react';
import { Button } from './ButtonHash.styled';

interface ButtonProps {
  caption: string;
  linkTo: string;
}

export const ButtonHash: React.FC<ButtonProps> = ({ caption, linkTo }) => {
  return (
    <Button spy={true} offset={-200} hashSpy={true} to={linkTo}>
      {caption}
    </Button>
  );
};

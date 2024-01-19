import React from 'react';
import {
  Bulb,
  LampFrame,
  LampInnerLight,
  LampOuterLight,
  LampWrapper,
} from './ButtonHashLamp.styled';

interface ButtonProps {
  caption: string;
  linkTo: string;
}

export const ButtonHashLamp: React.FC<ButtonProps> = ({ caption, linkTo }) => {
  return (
    <LampWrapper>
      <LampOuterLight>
        <LampFrame>
          <LampInnerLight>
            <Bulb spy={true} offset={-120} hashSpy={true} to={linkTo}>
              {caption}
            </Bulb>
          </LampInnerLight>
        </LampFrame>
      </LampOuterLight>
    </LampWrapper>
  );
};

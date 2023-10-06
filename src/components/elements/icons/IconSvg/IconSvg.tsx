import React from 'react';
import { SVG, USE } from './IconSvg.styled';
import icons from '../../../../images/icons.svg';

interface IconSvgProps {
  iconName: string;
}

export const IconSvg: React.FC<IconSvgProps> = ({ iconName }) => {
  return (
    <>
      <SVG width={'16'} height={'16'} viewBox="0 0 16 16">
        <USE
          width={'16'}
          height={'16'}
          xlinkHref={icons + '#icon-' + iconName}
        />
      </SVG>
    </>
  );
};

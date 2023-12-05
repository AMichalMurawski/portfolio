import React from 'react';
import { icons } from '../../../images';
import { SVG } from './IconSvg.styled';

interface IconSvgProps {
  link: string;
  dimension: string;
}

export const IconSvg: React.FC<IconSvgProps> = ({ link, dimension }) => {
  return (
    <SVG
      viewBox="0 0 30 30"
      x="30"
      y="30"
      xmlns="http://www.w3.org/2000/svg"
      $dimension={dimension}
    >
      <use href={icons + '#iconskill-' + link} />
    </SVG>
  );
};

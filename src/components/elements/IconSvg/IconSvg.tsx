import React from 'react';
import { icons } from '../../../images';
import { SVG } from './IconSvg.styled';

interface IconSvgProps {
  type: string;
  name: string;
  dimension: string;
  fill?: string;
}

export const IconSvg: React.FC<IconSvgProps> = ({
  type,
  name,
  dimension,
  fill,
}) => {
  return (
    <SVG
      viewBox="0 0 30 30"
      x="30"
      y="30"
      xmlns="http://www.w3.org/2000/svg"
      $dimension={dimension}
      $fill={fill}
    >
      <use href={icons + '#' + type + '-' + name} />
    </SVG>
  );
};

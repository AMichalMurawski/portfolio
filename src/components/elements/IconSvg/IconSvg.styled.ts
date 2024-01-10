import styled from 'styled-components';

interface SVGProps {
  $dimension: string;
  $fill?: string;
}

export const SVG = styled.svg<SVGProps>`
  ${({ $dimension, $fill }) =>
    `
      width: ${$dimension};  
      height: ${$dimension};
      fill: ${!!$fill ? $fill : null}
  `}
`;

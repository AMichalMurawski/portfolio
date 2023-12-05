import styled from 'styled-components';

interface SVGProps {
  $dimension: string;
}

export const SVG = styled.svg<SVGProps>`
  width: ${props => props.$dimension};
  height: ${props => props.$dimension};
`;

import styled from 'styled-components';
import { bricks2 } from '../../../images';

export const BoxWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const clipFloor = [
  '4% 70%',
  '8% 81%',
  '19% 87%',
  '28% 92%',
  '41% 96%',
  '53% 93%',
  '65% 91%',
  '77% 92%',
  '86% 86%',
  '93% 76%',
  '96% 62%',
];

export const PictureWrapper = styled.div`
  position: relative;
  width: min(480px, 90vw);
  height: min(480px, 90vw);
  clip-path: polygon(${clipFloor.join(', ')}, 100% 57%, 100% 0%, 0% 0%, 0% 65%);
`;

export const PictureBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: brightness(${({ theme }) => theme.filter.brightness}%);
  transition: ${({ theme }) => theme.transition('filter')};
  clip-path: polygon(
    ${clipFloor.join(', ')},
    94% 57%,
    92% 45%,
    91% 37%,
    85% 26%,
    82% 18%,
    75% 14%,
    64% 12%,
    51% 12%,
    36% 9%,
    26% 12%,
    16% 16%,
    10% 19%,
    7% 30%,
    9% 41%,
    6% 50%,
    8% 56%,
    5% 65%
  );
  box-shadow: inset 4px 4px 8px red;
  overflow: hidden;
  z-index: -10;
`;

export const Picture = styled.img`
  position: absolute;
  bottom: 0;
  left: 50%;
  translate: -50%;
  width: 100%;
  height: 100%;
`;

export const BackgroundImage = styled.div`
  width: 140%;
  height: 140%;
  translate: -20%, -20%;
  background-image: url(${bricks2});
  background-size: cover;
  background-repeat: repeat;
`;

export const CVWrapper = styled.div`
  position: absolute;
  left: 2%;
  top: 75%;
`;

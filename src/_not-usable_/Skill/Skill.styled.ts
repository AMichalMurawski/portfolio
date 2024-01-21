import styled, { keyframes } from 'styled-components';
import { PElement } from '../../utils/styles';

const basicWidth = 100;
const basicHeight = 250;

export const SkillWrapper = styled.div`
  width: ${basicWidth}px;
  height: ${basicHeight}px;
  position: relative;
`;

export const Nail = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  width: ${basicWidth / 5}px;
  height: ${basicWidth / 5}px;
  border-radius: 50%;
  background-color: black;
  z-index: 1;
`;

const pennantMove = keyframes`
  0%, 10%, 20%, 30%, 40%, 50%, 60%, 70%, 80%, 90%, 100% {
    rotate: 0;
  }
  5%, {
    rotate: 5.5deg;
  }
  15% {
    rotate: -4.5deg;
  }
  25%, {
    rotate: 3.6deg;
  }
  35% {
    rotate: -2.8deg;
  }
  45%, {
    rotate: 2.1deg;
  }
  55% {
    rotate: -1.5deg;
  }
  65%, {
    rotate: 1deg;
  }
  75% {
    rotate: -0.6deg;
  }
  85% {
    rotate: 0.3deg;
  }
  95% {
    rotate: -0.1deg;
  }
`;

export const PennantMove = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-origin: top;
  animation: ${pennantMove} 4000ms ease-in-out;
`;

export const PennantWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-origin: top;
`;

export const Rope = styled.div`
  position: absolute;
  top: ${basicWidth / 2}px;
  left: 50%;
  translate: -50% -${basicWidth / 3}px;
  width: ${(basicWidth / 3) * 2}px;
  height: ${(basicWidth / 3) * 2}px;
  rotate: 45deg;
  border-top-left-radius: ${basicWidth / 15}px;
  box-shadow: 0 0 0 ${basicWidth / 20}px red;
  outline: dashed ${basicWidth / 20}px orange;
`;

export const Pennant = styled.div`
  position: absolute;
  top: ${basicWidth * 0.54}px;
  left: 50%;
  width: ${basicWidth * 0.99}px;
  height: ${(basicHeight * 2) / 3}px;
  padding: ${basicWidth / 10}px;
  translate: -50% 0;
  background-color: orange;
  box-shadow: 0 0 0 ${basicWidth / 20}px red;
  outline: dashed ${basicWidth / 20}px orange;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const SVGContener = styled.div`
  width: ${basicWidth * 0.8}px;
  height: ${basicWidth * 0.8}px;
`;

export const SVGPosition = styled.div`
  width: ${basicWidth}px;
  height: ${basicWidth}px;
  translate: -${basicWidth / 10}px -${basicWidth / 10}px;
`;

export const SkillName = styled(PElement)`
  font-size: 18px;
  font-weight: 700;
  text-align: center;
`;

import styled, { keyframes } from 'styled-components';
import { ImgElement, PElement } from '../../../utils/styles';

export const SkillWrapper = styled.div`
  width: 150px;
  height: 300px;
  position: relative;
`;

export const Nail = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: black;
  z-index: 1;
`;

const pennantMove = keyframes`
  0%, 10%, 20%, 30%, 40%, 50%, 60%, 70%, 80%, 90%, 100% {
    rotate: 0;
  }
  5%, {
    rotate: 8deg;
  }
  15% {
    rotate: -7deg;
  }
  25%, {
    rotate: 6deg;
  }
  35% {
    rotate: -5deg;
  }
  45%, {
    rotate: 4deg;
  }
  55% {
    rotate: -3deg;
  }
  65%, {
    rotate: 2deg;
  }
  75% {
    rotate: -1.5deg;
  }
  85% {
    rotate: 1deg;
  }
  95% {
    rotate: -0.5deg;
  }
`;

export const PennantMove = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-origin: top;
  animation: ${pennantMove} 3000ms ease-in-out;
`;

export const PennantWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-origin: top;
`;

export const Rope = styled.div`
  position: absolute;
  top: 60px;
  left: 50%;
  translate: -50% -40px;
  width: 100px;
  height: 100px;
  rotate: 45deg;
  border-top-left-radius: 10px;
  box-shadow: 0 0 0 3px red;
  outline: dotted 3px orange;
`;

export const Pennant = styled.div`
  position: absolute;
  top: 73px;
  left: 50%;
  width: 143px;
  height: 200px;
  translate: -50% 0;
  background-color: orange;
  box-shadow: 0 0 0 3px red;
  outline: dotted 3px orange;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageContener2 = styled.div`
  width: 80%;
  height: 80%;
`;

export const Image2 = styled(ImgElement)`
  object-fit: scale-down;
`;

export const ImgName2 = styled(PElement)`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`;

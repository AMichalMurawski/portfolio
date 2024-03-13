import styled, { keyframes } from 'styled-components';
import { PElement } from '../../../utils/styles';

const basicWidth = 150;
const basicHeight = 200;

export const SkillWrapper = styled.div`
  width: ${basicWidth}px;
  height: ${basicHeight * 1.22}px;
  position: relative;
`;

const nailGradient = `transparent 0%,
      transparent 20%,
      lightgray 20%,
      black 23%,
      black 27%,
      lightgray 30%,
      transparent 30%`;

export const Nail = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  width: ${basicWidth / 10}px;
  height: ${basicWidth / 10}px;
  border-radius: 50%;
  background-color: gray;
  background-image: linear-gradient(64deg, ${nailGradient}),
    linear-gradient(-64deg, ${nailGradient}),
    linear-gradient(244deg, ${nailGradient}),
    linear-gradient(-244deg, ${nailGradient});
  background-size: ${basicWidth / 40}px ${basicWidth / 20}px;
  background-repeat: repeat-x space;
  z-index: 1;
`;

const paintingMove = keyframes`
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

export const PaintingMove = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-origin: top;
  animation: ${paintingMove} 4000ms ease-in-out;
`;

export const PaintingWrapper = styled.div`
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
  width: ${basicWidth * 0.6}px;
  height: ${basicWidth * 0.6}px;
  rotate: 45deg;
  border-top-left-radius: ${basicWidth / 15}px;
  box-shadow: 0 0 0 ${basicWidth / 40}px black;
  outline: dashed ${basicWidth / 40}px rgb(90, 90, 90);
  filter: drop-shadow(8px 3px 3px gray);
`;

export const Painting = styled.div`
  position: absolute;
  top: ${basicWidth * 0.3}px;
  left: 50%;
  width: ${basicWidth}px;
  height: ${basicHeight}px;
  padding: ${basicWidth / 10}px;
  translate: -50% 0;
  background-color: rgb(235, 235, 235);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  overflow: hidden;
  filter: drop-shadow(10px 10px 6px gray);
`;

export const ImageFrame = styled.img`
  position: absolute;
  top: 50%;
  left: 50.5%;
  transform: translate(-50%, -50%);
  width: 106%;
  height: 104%;
  background-size: cover;
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
  color: black;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
`;

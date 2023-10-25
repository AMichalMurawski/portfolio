import styled, { keyframes } from 'styled-components';
import { DarkModeWindowBorders } from './DarkMode.styled';

export const LandscapeWrapper = styled(DarkModeWindowBorders)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  overflow: hidden;
`;

export const Sky = styled.div`
  position: absolute:
  left: 0;
  top: 0;
  width: 100%;
  height: 160%;
  background-color: ${props => props.theme.bg.sky};
  transform: perspective(100vw) translateY(-20%) rotateX(45deg);
`;

export const SunRotate = styled.div`
  position: absolute;
  top: 290px;
  left: 200px;
  width: 600px;
  height: 600px;
  transform: translate(-50%, -50%)
    rotateZ(${props => props.theme.transform.sun}deg);
  transition: ${props => props.theme.transition('transform')};
`;

export const Sun = styled.div`
  position: absolute;
  left: 25%;
  top: 5%;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: yellow;
  box-shadow: 0 0 2px 1px yellow, 0 0 4px 2px yellow, 0 0 6px 3px yellow,
    0 0 8px 4px yellow, 0 0 10px 5px yellow;
`;

export const MoonRotate = styled.div`
  position: absolute;
  top: 290px;
  left: 200px;
  width: 600px;
  height: 600px;
  transform: translate(-50%, -50%)
    rotateZ(${props => props.theme.transform.moon}deg);
  transition: ${props => props.theme.transition('transform')};
`;

export const Moon = styled.div`
  position: absolute;
  left: 25%;
  top: 5%;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: gray;
`;

const cloudMoveHorizontal = keyframes`
  from{
    transform: translateX(0%)
  }

  to {
    transform: translateX(-300%)
  }
`;

const cloudMoveVertical = keyframes`
  0% {
    transform: translateY(-6%)
  }

  100% {
    transform: translateY(6%)
  }
`;

interface CloudBoxProps {
  $delay: number;
  $duration: number;
}

export const CloudBox = styled.div<CloudBoxProps>`
  position: absolute;
  left: 120%;
  top: 50%;
  animation-name: ${cloudMoveHorizontal};
  animation-delay: ${props => props.$delay}s;
  animation-duration: ${props => props.$duration}s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

export const Clouds = styled.div`
  width: 100px;
  height: 30px;
  border-radius: 50px;
  background: ${props => props.theme.bg.cloud};
  animation: ${cloudMoveVertical} 5s alternate-reverse ease-in-out infinite;
  box-shadow: 0 0 10px 10px 10px white;
  filter: blur(5px);

  &:after,
  &:before {
    content: '';
    position: absolute;
    background-color: ${props => props.theme.bg.cloud2};
    border-radius: 50px;
    z-index: -200;
  }

  &:after {
    width: 40px;
    height: 40px;
    top: -15px;
    left: 15px;
  }

  &:before {
    width: 50px;
    height: 50px;
    top: -20px;
    right: 10px;
  }
`;

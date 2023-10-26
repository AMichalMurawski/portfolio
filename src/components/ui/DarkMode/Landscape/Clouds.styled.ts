import styled, { keyframes } from 'styled-components';

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

export const Cloud = styled.div`
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

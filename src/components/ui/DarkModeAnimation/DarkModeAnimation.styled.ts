import styled, { keyframes } from 'styled-components';
import { PageWrapper } from '../../../pages/Portfolio.styled';

export const ModeWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -100;
`;

export const Background = styled.div`
  width: 120%;
  height: 300%;
  background: linear-gradient(
    5deg,
    rgba(53, 125, 213, 1) 0%,
    rgba(71, 91, 173, 1) 35%,
    rgba(51, 72, 125, 1) 50%,
    rgba(11, 11, 116, 1) 65%,
    rgba(2, 0, 36, 1) 100%
  );
  transform: ${props => props.theme.transform.sky};
  transition: transform ease 500ms;
`;

export const BackgroundWrapper = styled(PageWrapper)`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  // background-color: blue;
  z-index: 10;
`;

export const SunBox = styled.div`
  position: absolute;
  width: ${props => `${props.theme.height.header * 4}px`};
  height: ${props => `${props.theme.height.header * 4}px`};
  top: 1;
  left: 27%;
  transform: translateX(-50%) ${props => props.theme.transform.sun};
  border-radius: 50%;
  // background-color: purple;
  transition: transform ease-in-out 500ms;
  z-index: 10;
`;

export const Sun = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  border-radius: 50%;
  background-color: yellow;
  z-index: 20;
`;

export const Moon = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;
  background-color: gray;
  z-index: 20;
`;

const cloudMoveHorizontal = keyframes`
  from{
    transform: translateX(120vw)
  }

  to {
    transform: translateX(0)
  }
`;

const cloudMoveVertical = keyframes`
  from{
    transform: translateY(-10%)
  }

  to {
    transform: translateY(10%)
  }
`;

interface CloudMoveProps {
  $bottom: number;
  $delay: number;
  $duration: number;
}

export const CloudMove = styled.div<CloudMoveProps>`
  position: absolute;
  left: 0;
  bottom: ${props => `${props.$bottom}%`};
  animation-name: ${cloudMoveHorizontal};
  animation-delay: ${props => `-${props.$delay}ms`};
  animation-duration: ${props => `${props.$duration}ms`};
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

interface CloudProps {
  $scale: number;
}

export const Cloud = styled.div<CloudProps>`
  width: 100px;
  height: 30px;
  border-radius: 50px;
  transform: scale(${props => props.$scale});
  background: linear-gradient(
    180deg,
    rgb(242, 249, 254) 5%,
    rgb(214, 240, 253) 100%
  );
  animation: ${cloudMoveVertical} 1000ms alternate-reverse ease-in-out infinite;

  &:after,
  &:before {
    content: '';
    position: absolute;
    transform: scale(${props => props.$scale});
    background-color: #f2f9fe;
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

import styled from 'styled-components';

interface FrameVerticalProps {
  $side: 'left' | 'right';
}

interface FrameHorizontalProps {
  $side: 'top' | 'bottom';
}

interface HookProps {
  $topPosition: string;
}

export const Frame = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 20px;
`;

export const FrameVertical = styled.div<FrameVerticalProps>`
  position: absolute;
  top: 0;
  ${props => props.$side}: 0;
  width: 20px;
  height: 100%;
  overflow: hidden;
  //   background-color: black;
  background-image: linear-gradient(
    to bottom,
    #000 0%,
    #000 10%,
    transparent 10%,
    transparent 20%,
    #000 20%,
    #000 80%,
    transparent 80%,
    transparent 90%,
    #000 90%,
    #000 100%
  );

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 6px;
    height: 10%;
    transform: translate(-50%, -50%);
    left: 50%;
    border-radius: 3px;
    box-shadow: 0 0 0 10px black;
  }

  &::before {
    top: 15%;
  }

  &::after {
    top: 85%;
  }
`;

export const FrameHorizontal = styled.div<FrameHorizontalProps>`
  position: absolute;
  ${props =>
    props.$side === 'top'
      ? `
    top: 0;
    rotate: 0deg;
`
      : `
  bottom:0;
  rotate: 180deg;
    `}
  left: 0;
  width: 100%;
  height: 20px;
  background-color: black;
  overflow: hidden;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    height: 40px;
    border: 1px solid white;
  }

  &::after {
    transform: translate(12px, -8px) rotate(-45deg);
    left: 0;
  }

  &::before {
    transform: translate(-12px, -8px) rotate(45deg);
    right: 0;
  }
`;

export const Hook = styled.div<HookProps>`
  position: absolute;
  top: calc(${props => props.$topPosition} - 15px);
  left: 50%;
  width: 5px;
  height: 20px;
  translate: -50% 0%;
  background-color: gray;
  border-radius: 2.5px;
  z-index: 1;
`;

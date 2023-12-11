import styled, { keyframes } from 'styled-components';

interface ScrollBoardFrameVerticalProps {
  $side: 'left' | 'right';
}

interface ScrollBoardFrameHorizontalProps {
  $side: 'top' | 'bottom';
}

interface ScrollBoardHookProps {
  $topPosition: string;
}

interface ScrollBoardCoverFrameProps {
  $adjacent: 'horizontal' | 'vertical';
  $side: 'left' | 'right' | 'top' | 'bottom';
}

interface ScrollBoardCoverProps {
  $isOpen: boolean;
}

export const ScrollBoardWrapper = styled.div`
  position: relative;
  width: 100%;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40px;
    background-color: black;
  }
`;

export const ScrollBoardFrame = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 20px;
`;

export const ScrollBoardFrameVertical = styled.div<ScrollBoardFrameVerticalProps>`
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

export const ScrollBoardFrameHorizontal = styled.div<ScrollBoardFrameHorizontalProps>`
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

export const ScrollBoardHook = styled.div<ScrollBoardHookProps>`
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

export const ScrollBoardCover = styled.div<ScrollBoardCoverProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%) perspective(3800px)
    rotateX(${props => (props.$isOpen === true ? '101deg' : '0deg')});
  transform-origin: 50% 0;
  transform-style: preserve-3d;
  transition: ${({ theme }) => theme.transition('transform')};
  z-index: 10;
`;

const scrollBoardCoverFlash = keyframes`
  0%{
    left: -15%
  }
  40%{
    left: -15%
  }
  60%{
    left: 115%
  }
  100%{
    left: 115%
  }
`;

export const ScrollBoardCoverFront = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform: translateZ(20px);
  transform-style: preserve-3d;
`;

export const ScrollBoardCoverGlass = styled.div`
  position: absolute;
  width: calc(100% - 36px);
  height: calc(100% - 36px);
  transform: translate(18px, 18px);
  background-color: rgba(255, 255, 255, 0.3);
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 200px;
    height: 100%;
    background-image: linear-gradient(
      75deg,
      transparent 0%,
      transparent 40%,
      rgba(230, 230, 230, 0.5) 50%,
      transparent 60%,
      transparent 100%
    );
    animation: ${scrollBoardCoverFlash} 10s infinite;
    transition: background-image 3000ms linear;
  }
`;

export const ScrollBoardCoverFrame = styled.div<ScrollBoardCoverFrameProps>`
  position: absolute;
  background-color: black;
  ${({ $adjacent, $side }) => {
    let css = ``;
    if ($adjacent === 'horizontal') {
      css = `
        width: 100%;
        height: 20px;
      `;
    }
    if ($adjacent === 'vertical') {
      css = `
        width: 20px;
        height: 100%;
      `;
    }
    if ($side === 'left' || $side === 'right') {
      css =
        css +
        `top: 0;
         ${$side}: 0;`;
    }
    if ($side === 'top' || $side === 'bottom') {
      css =
        css +
        `left: 0;
         ${$side}: 0;`;
    }
    return css;
  }}
`;

export const ScrollBoardCoverSide = styled(ScrollBoardCoverFrame)`
  transform-origin: ${props => props.$side};
  background-color: black;
  ${({ $adjacent, $side }) => {
    if ($adjacent === 'horizontal' && $side === 'top') {
      return `
          border-top: 1px solid white;
          transform: rotateX(-90deg);
        `;
    }
    if ($adjacent === 'horizontal' && $side === 'bottom') {
      return `
          border-bottom: 1px solid white;
          transform: rotateX(90deg);
        `;
    }
    if ($adjacent === 'vertical' && $side === 'left') {
      return `
          border-left: 1px solid white;
          transform: rotateY(90deg);
        `;
    }
    if ($adjacent === 'vertical' && $side === 'right') {
      return `
          border-right: 1px solid white;
          transform: rotateY(-90deg);
        `;
    }
  }};
`;

export const ScrollBoardConsole = styled.div`
  position: absolute;
  bottom: -40px;
  width: 100%;
  height: 40px;
  background-color: red;
`;

export const ScrollBoardPrev = styled.button`
  position: absolute;
`;

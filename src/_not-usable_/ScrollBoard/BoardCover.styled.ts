import styled, { keyframes } from 'styled-components';

interface FrameProps {
  $adjacent: 'horizontal' | 'vertical';
  $side: 'left' | 'right' | 'top' | 'bottom';
}

interface CoverProps {
  $isOpen: boolean;
}

export const Cover = styled.div<CoverProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%)
    perspective(calc(5000px + 14000 * (100vw / 600)))
    rotateX(${props => (props.$isOpen === true ? '96deg' : '0deg')});
  transform-origin: 50% 0;
  transform-style: preserve-3d;
  transition: ${({ theme }) => theme.transition('transform')};
  z-index: 10;

  @media screen and (min-width: 600px) {
    transform: translate(-50%, -50%) perspective(calc(5000 * (100vw / 900)))
      rotateX(${props => (props.$isOpen === true ? '95.5deg' : '0deg')});
  }

  @media screen and (min-width: 900px) {
    transform: translate(-50%, -50%) perspective(4600px)
      rotateX(${props => (props.$isOpen === true ? '99deg' : '0deg')});
  }
`;

const flash = keyframes`
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

export const Front = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform: translateZ(20px);
  transform-style: preserve-3d;
`;

export const Glass = styled.div`
  position: absolute;
  width: calc(100% - 36px);
  height: calc(100% - 36px);
  transform: translate(18px, 18px);
  background-color: rgba(255, 255, 255, 0.2);
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
    animation: ${flash} 10s infinite;
    transition: background-image 3000ms linear;
  }
`;

export const Frame = styled.div<FrameProps>`
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

export const Side = styled(Frame)`
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

import styled, { keyframes } from 'styled-components';

const birdMove = keyframes`
    0% {
        bottom: -20%;
        left: 50%;
        transform: scale(100%);
        opacity: 1;
    }

    50% {
        bottom: -20%;
        left: 50%;
        transform: scale(100%);
        opacity: 1;
    }
    
    80% {
        transform: scale(35%);
        opacity: 1;
    }

    100% {
        bottom: 40%;
        left: 70%;
        transform: scale(0%);
        opacity: 0;
    }
`;

export const BirdBox = styled.div`
  position: absolute;
  width: 30px;
  height: 15px;
  bottom: -20%;
  left: 50%;
  animation: ${birdMove} 6s ease-out infinite;
`;

interface BirdWingBoxProps {
  $side: 'left' | 'right';
}

const birdFly = $side => keyframes`
  0% {
    border-top-${$side}-radius: 30%
  }
  100% {
    border-top-${$side}-radius: 100%
  }
`;

export const BirdWingBox = styled.div<BirdWingBoxProps>`
  position: absolute;
  width: 50%;
  height: 100%;
  top: 0;
  overflow: hidden;

  ${props => {
    const { $side } = props;
    return `
        ${$side}: 0;
        `;
  }}

  &::before {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    border-top: 1px solid black;
    animation: ${props => birdFly(props.$side)} 500ms alternate-reverse
      ease-in-out infinite;

    ${props => {
      const { $side } = props;
      return `
        border-top-${$side === 'left' ? 'right' : 'left'}-radius: 50%;
        border-top-${$side}-radius: 30%;
        ${$side}: 0;
        
        `;
    }}
  }
`;

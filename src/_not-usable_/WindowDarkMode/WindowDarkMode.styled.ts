import styled, { keyframes } from 'styled-components';

const windowProps = {
  border: 60,
};

export const WindowBox = styled.div`
  position: absolute;
  top: 25%;
  left: calc(50% - 157px);
  width: 160px;
  height: 100px;
  transform: translate(-50%, -50%);
  background-color: white;
  border-top-left-radius: ${windowProps.border}px;
  border-top-right-radius: ${windowProps.border}px;
`;

type WindowFrameProps = {
  $side: 'left' | 'right';
  $mode: 'light' | 'dark';
};

export const WindowFrame = styled.div<WindowFrameProps>`
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  border: 2px solid black;
  background-color: rgba(250, 250, 250, 0.15);
  background-image: linear-gradient(
      to right,
      transparent 49%,
      #000 49%,
      #000 51%,
      transparent 51%
    ),
    linear-gradient(
      to bottom,
      transparent 49%,
      #000 49%,
      #000 51%,
      transparent 51%
    );
  ${props => {
    const { $side, $mode, theme } = props;
    return `${$side}: 0;
            border-top-${$side}-radius: ${windowProps.border}px;
            transform: perspective(800px)
              rotateY(${
                $side === 'left' ? ($mode === 'light' ? 240 : 360) : ''
              }${$side === 'right' ? ($mode === 'light' ? 120 : 0) : ''}deg);
            transform-origin: ${$side};
            transition: ${theme.transition('transform')};`;
  }}
`;

export const WindowBg = styled.div`
  width: 100%;
  height: 100%;
  border-top-left-radius: ${windowProps.border}px;
  border-top-right-radius: ${windowProps.border}px;
  overflow: hidden;
`;

export const BgSky = styled.div`
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
    transform: translateX(200%)
  }

  to {
    transform: translateX(-120%)
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

export const CloudBox = styled.div`
  position: absolute;
  left: 0;
  top: 30%;
  animation-name: ${cloudMoveHorizontal};
  animation-delay: 3ms;
  animation-duration: 30s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

export const Clouds = styled.div`
  width: 100px;
  height: 30px;
  border-radius: 50px;
  background: ${props => props.theme.bg.cloud};
  animation: ${cloudMoveVertical} 5s alternate-reverse ease-in-out infinite;

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

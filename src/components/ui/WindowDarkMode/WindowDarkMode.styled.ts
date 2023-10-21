import styled from 'styled-components';

const windowProps = {
  border: '70px',
};

export const WindowBox = styled.div`
  position: absolute;
  top: 25%;
  left: calc(50% - 150px);
  width: 200px;
  height: 120px;
  transform: translate(-50%, -50%);
  background-color: white;
  border-top-left-radius: ${windowProps.border};
  border-top-right-radius: ${windowProps.border};
`;

type WindowFrameProps = {
  $side: 'left' | 'right';
  $mode: 'light' | 'dark';
};

export const WindowFrame = styled.div<WindowFrameProps>`
  position: absolute;
  top: 0;
  ${props => props.$side}: 0;
  width: 50%;
  height: 100%;
  border: 2px solid black;
  border-top-${props => props.$side}-radius: ${windowProps.border};
  background-image: linear-gradient(to right, transparent 49%, #000 49%, #000 51%, transparent 51%), linear-gradient(to bottom, transparent 49%, #000 49%, #000 51%, transparent 51%);
  transform: perspective(800px) rotateY(${props =>
    props.$mode === 'light' ? 120 : 0}deg) ;
  perspective-origin: left;
  transform-origin: ${props => props.$side};
  transition: ${props => props.theme.transition('transform')};
  `;

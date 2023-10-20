import styled from 'styled-components';

export const BgWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  min-width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.gap.mortar}px;
  background-color: ${props => props.theme.bg.wall};
  overflow: hidden;
  z-index: -100;
`;

export const BrickLine = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${props => props.theme.gap.mortar}px;

  &:nth-child(odd) *:first-child {
    width: ${props => `${props.theme.width.brick / 2}`}px;
  }

  &:nth-child(odd) *:last-child {
    width: ${props => `${props.theme.width.brick / 2}`}px;
  }
`;

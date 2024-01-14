import { Link } from 'react-scroll';
import styled from 'styled-components';

export const LedBoardFrame = styled.div`
  padding: 6px;
  background-color: black;
  max-width: 50vw;
  z-index: 1;
  width: 50%;
`;

export const LedConteiner = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 8px;
  column-gap: 4px;
  background-color: gray;
  background-image: radial-gradient(
    circle at 2px 2px,
    lightgray 1.5px,
    transparent 0
  );
  background-size: 4px 4px;
  width: 100%;
  height: 100%;
`;

export const HashLink = styled(Link)`
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
  cursor: pointer;
  gap: 4px;
`;

export const Letter = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FlashPoint = styled.div`
  width: 4px;
  height: 4px;
  background-image: radial-gradient(
    circle at 2px 2px,
    blue 1.5px,
    transparent 0
  );
`;

export const EmptyPoint = styled.div`
  width: 4px;
  height: 4px;
`;

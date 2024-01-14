import { Link } from 'react-scroll';
import styled from 'styled-components';

const dimension = 2.5;

export const LedBoardFrame = styled.div`
  padding: ${2 * dimension}px;
  background-color: black;
  max-width: 50%;
  z-index: 1;
  min-width: min-content;
`;

export const LedConteiner = styled.nav`
  max-width: fit-content;
  display: flex;
  flex-wrap: wrap;
  row-gap: ${2 * dimension}px;
  column-gap: ${5 * dimension}px;
  background-color: gray;
  background-image: radial-gradient(
    circle at ${dimension / 2}px ${dimension / 2}px,
    lightgray ${(0.75 * dimension) / 2}px,
    transparent 0
  );
  background-size: ${dimension}px ${dimension}px;
`;

export const Phrase = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${dimension}px;
`;

export const HashLink = styled(Link)`
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
  cursor: pointer;
  gap: ${dimension}px;
`;

export const Letter = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Point = styled.div`
  position: relative;
  width: ${dimension}px;
  height: ${dimension}px;
`;

export const LightPoint = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 75%;
  height: 75%;
  background-color: blue;
  border-radius: 50%;
`;

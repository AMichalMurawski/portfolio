import { Link } from 'react-scroll';
import styled from 'styled-components';

export const dimension = 2.5;

export const LedBoardFrame = styled.div`
  padding: ${dimension}px;
  border: ${2 * dimension}px solid black;
  max-width: 50%;
  z-index: 1;
  min-width: min-content;
  background-color: gray;
  background-image: radial-gradient(
    circle at ${dimension / 2}px ${dimension / 2}px,
    lightgray ${(0.55 * dimension) / 2}px,
    transparent 0
  );
  background-size: ${dimension}px ${dimension}px;
`;

export const LedConteiner = styled.nav`
  max-width: fit-content;
  display: flex;
  flex-wrap: wrap;
  row-gap: ${2 * dimension}px;
  column-gap: ${5 * dimension}px;
  // justify-content: center;
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
  width: 85%;
  height: 85%;
  background-color: rgb(225, 255, 200);
  box-shadow: 0 0 16px 1px rgba(160, 255, 255, 0.6),
    0 0 32px 1px rgba(144, 255, 255, 0.6);
  border-radius: 50%;
`;

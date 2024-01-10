import styled from 'styled-components';

export const Console = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: center;
  align-items: center;
  bottom: -30px;
  width: 100%;
  height: 30px;
  background-color: darkgray;
  z-index: 10;
`;

export const IconWrapper = styled.button.attrs({ type: 'button' })`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  background-color: gray;

  border-radius: 4px;
  scale: 1;

  &:hover,
  &:focus {
    scale: 1.1;
  }

  &:active {
    box-shadow: inset 0 0 2px black, inset 0 0 4px gray, inset 0 0 6px lightgray;
  }

  &:first-child {
    margin-right: 15px;
  }

  &:last-child {
    margin-left: 15px;
  }
`;

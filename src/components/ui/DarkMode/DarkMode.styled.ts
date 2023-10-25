import styled from 'styled-components';

export const darkModeElement = {
  border: 60,
};

export const DarkModeWindowBorders = styled.div`
  width: 160px;
  height: 100px;
  border-top-left-radius: ${darkModeElement.border}px;
  border-top-right-radius: ${darkModeElement.border}px;
`;

export const DarkModeWrapper = styled.div`
  position: absolute;
  top: 25%;
  left: calc(50% - 157px);
  transform: translate(-50%, -50%);
`;

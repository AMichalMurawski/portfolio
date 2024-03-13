import styled from 'styled-components';

export const ScrollBoardWrapper = styled.div`
  position: relative;
  width: 100%;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40px;
    background-color: black;
  }
`;

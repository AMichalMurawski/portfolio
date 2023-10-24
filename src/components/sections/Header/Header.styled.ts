import styled from 'styled-components';
import { PageWrapper } from '../../../App.styled';

const headerHeight = 140;

export const HeaderConst = styled.div`
  height: ${headerHeight}px;
  overflow: hidden;
`;

export const HeaderBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  // background-color: white;
  z-index: 100;
  width: 100%;
  height: ${headerHeight}px;
  box-shadow: 0 1px 3px lightgray, 0 0px 10px gray;
`;

export const HeaderWrapper = styled(PageWrapper)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonsList = styled.ul`
  display: flex;
  gap: 25px;
  z-index: 1;
`;

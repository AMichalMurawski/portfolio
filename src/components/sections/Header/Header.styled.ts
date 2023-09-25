import styled from 'styled-components';
import { PageWrapper } from '../../../pages/Portfolio.styled';
import { LiElement } from '../../../utils/styled';

export const HeaderBox = styled.div`
  width: 100%;
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
`;

const bsStyle = '1px 1px 1px black, 4px 4px 4px red';

export const ButtonBox = styled(LiElement)`
  padding: 10px;
  border-radius: 10px;
  background-color: red;
  box-shadow: ${bsStyle};
  cursor: pointer;

  &:hover {
    box-shadow: inset 0 0 2px black, ${bsStyle};
  }
`;

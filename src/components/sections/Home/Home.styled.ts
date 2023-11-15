import styled from 'styled-components';
import { PageWrapper } from '../../../App.styled';

export const HomeWrapper = styled(PageWrapper)`
  padding: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Introduce = styled.div`
  padding: 30px;
  color: ${({ theme }) => theme.color.main};
  background-color: ${({ theme }) => theme.bg.introduce};
  border-radius: 30px;
  height: min-content;
  margin: 15% 0 0;
`;

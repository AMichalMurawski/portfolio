import styled from 'styled-components';
import { PageWrapper } from '../../../pages/Portfolio.styled';
import { LiElement } from '../../../utils/styles';

export const SkillsWrapper = styled(PageWrapper)``;

export const ListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  align-content: stretch;
`;

export const ListElement = styled(LiElement)`
  flex-basis: calc((100% - 30px * 5) / 6);
`;

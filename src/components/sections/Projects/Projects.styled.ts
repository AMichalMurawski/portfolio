import styled from 'styled-components';
import { PageWrapper } from '../../../App.styled';
import { LiElement } from '../../../utils/styles';

export const ProjectWrapper = styled(PageWrapper)`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const ProjectsContener = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 30px;
  overflow-x: scroll;
`;

export const ProjectItem = styled(LiElement)``;

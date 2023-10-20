import styled from 'styled-components';
import { ImgElement, PElement } from '../../../utils/styles';

export const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 400px;
  padding: 15px;
`;

export const Image = styled(ImgElement)`
  width: 100%;
  height: 200px;
  object-fit: scale-down;
  background-color: white;
`;

export const Tool = styled(PElement)`
  text-align: center;
`;

export const Description = styled(PElement)``;

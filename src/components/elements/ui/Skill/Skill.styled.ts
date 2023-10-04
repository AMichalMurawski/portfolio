import styled from 'styled-components';
import { ImgElement, PElement } from '../../../../utils/styles';

export const SkillWrapper = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  height: 100%;
`;

export const ImageContener = styled.div`
  width: 80%;
  height: 80%;
`;

export const Image = styled(ImgElement)`
  object-fit: scale-down;
`;

export const ImgName = styled(PElement)`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`;

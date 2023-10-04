import styled from 'styled-components';
import { H1Element, H2Element } from '../../../utils/styles';

export const IntroductionWrapper = styled.div`
  padding: 30px;
  color: ${props => props.theme.color.introduction};
  background-color: ${props => props.theme.bg.introduction};
  border-radius: 30px;
  height: min-content;
`;

export const Proffesion = styled(H2Element)`
  color: inherit;
`;

export const Name = styled(H1Element)`
  color: inherit;
`;

export const Sentence = styled.p`
  padding-top: 10px;
  line-height: ${props => props.theme.lineHeight.medium};
  color: ${props => props.theme.color.introduction};
`;

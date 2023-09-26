import styled from 'styled-components';
import { PageWrapper } from '../../../pages/Portfolio.styled';

export const HomeWrapper = styled(PageWrapper)`
  padding: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Introduce = styled.div`
  padding: 30px;
  color: ${props => props.theme.introduce.color};
  background-color: ${props => props.theme.introduce.bg};
  border-radius: 30px;
  height: min-content;
  margin: 15% 0 0;
`;

export const HoIAm = styled.h1`
  font-size: ${props => props.theme.introduce.fontSize};
  line-height: ${props => props.theme.introduce.lineHeight};
  width: auto;
  max-width: max-content;
  width: 100%;

  & span {
    font-size: ${props => props.theme.introduce.spanSize};
  }
`;

export const Sentence = styled.p`
  padding-top: 10px;
  line-height: ${props => props.theme.introduce.sentenceHeight};
`;

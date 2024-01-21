import styled from 'styled-components';
import { PageWrapper } from '../../../App.styled';

export const HomeWrapper = styled(PageWrapper)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 40px;

  @media screen and (min-width: 480px) {
    padding: 30px;
  }

  @media screen and (min-width: 1000px) {
    flex-wrap: nowrap;
    flex-direction: row-reverse;
    justify-content: center;
  }
`;

export const IntroduceWrapper = styled.div``;

export const MyPictureWrapper = styled.div``;

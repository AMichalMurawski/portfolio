import styled from 'styled-components';
import { PageWrapper } from '../../../App.styled';
import { AElement, PElement } from '../../../utils/styles';

export const ContactWrapper = styled(PageWrapper)`
  display: flex;
  justify-content: center;
  padding-inline: 60px;
`;

export const ContactConteiner = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: repeat(3, auto);
  grid-column-gap: 0px;
  grid-row-gap: 30px;

  @media screen and (min-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 30px 1fr;
  }
`;

export const SubtitleWrapper = styled.div`
  grid-area: 1 / 1 / 2 / 2;

  @media screen and (min-width: 900px) {
    grid-area: 1 / 1 / 2 / 2;
  }
`;

export const AddressContainer = styled.address`
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-style: normal;
  grid-area: 3 / 1 / 4 / 2;

  @media screen and (min-width: 900px) {
    grid-area: 2 / 1 / 3 / 2;
  }
`;

export const Address = styled(PElement)``;

export const AddressLink = styled(AElement)``;

export const ContactFormContainer = styled.div`
  grid-area: 2 / 1 / 3 / 2;

  @media screen and (min-width: 900px) {
    padding-left: 60px;
    border-left: 4px solid black;
    grid-area: 1 / 2 / 3 / 3;
  }
`;

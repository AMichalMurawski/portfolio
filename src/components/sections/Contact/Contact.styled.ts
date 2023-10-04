import styled from 'styled-components';
import { PageWrapper } from '../../../pages/Portfolio.styled';
import { AElement, PElement } from '../../../utils/styles';

export const ContactWrapper = styled(PageWrapper)`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ContactInformationContainer = styled.div`
  padding-right: 60px;
  display: flex;
  flex-direction: column;
  gap: 45px;
`;

export const AddressContainer = styled.address`
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-style: normal;
`;

export const Address = styled(PElement)``;

export const AddressLink = styled(AElement)``;

export const ContactFormContainer = styled.div`
  padding-left: 60px;
  border-left: 4px solid black;
`;

import React from 'react';
import {
  Address,
  AddressContainer,
  AddressLink,
  ContactFormContainer,
  ContactInformationContainer,
  ContactWrapper,
} from './Contact.styled';
import { Subtitle } from '../../elements';
import { ContactForm } from '../../ui';

const email = 'e-mail: ';
const phone = 'phone nr: ';
const local = 'localisation: ';

export const Contact: React.FC = () => {
  return (
    <ContactWrapper>
      <ContactInformationContainer>
        <Subtitle>Contact Me</Subtitle>
        <AddressContainer>
          <Address>
            {email}
            <AddressLink href="mailto:example@example.pl">
              example@example.pl
            </AddressLink>
          </Address>
          <Address>
            {phone}
            <AddressLink href="tel:0123456789">0123-456-789</AddressLink>
          </Address>
          <Address>
            {local}
            <AddressLink>Marki (near Warsaw)</AddressLink>
          </Address>
        </AddressContainer>
      </ContactInformationContainer>
      <ContactFormContainer>
        <ContactForm />
      </ContactFormContainer>
    </ContactWrapper>
  );
};

import React from 'react';
import {
  Address,
  AddressContainer,
  AddressLink,
  ContactConteiner,
  ContactFormContainer,
  ContactWrapper,
  SubtitleWrapper,
} from './Contact.styled';
import { Subtitle } from '../../elements';
import { ContactForm } from '../../ui';

const email = 'e-mail: ';
const phone = 'phone nr: ';
const local = 'localisation: ';

export const Contact: React.FC = () => {
  return (
    <ContactWrapper id="contact">
      <ContactConteiner>
        <SubtitleWrapper>
          <Subtitle>Contact Me</Subtitle>
        </SubtitleWrapper>
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
        <ContactFormContainer>
          <ContactForm />
        </ContactFormContainer>
      </ContactConteiner>
    </ContactWrapper>
  );
};

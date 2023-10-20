import React from 'react';
import {
  Email,
  Form,
  Label,
  Message,
  Name,
  SubmitButton,
  SubmitConteiner,
} from './ContactForm.styled';

export const ContactForm: React.FC = () => {
  return (
    <Form>
      <Label>
        Name:
        <Name name="name" placeholder="Name" />
      </Label>
      <Label>
        Email:
        <Email name="email" placeholder="E-mail" />
      </Label>
      <Label>
        Message:
        <Message name="message" placeholder="Message" />
      </Label>
      <SubmitConteiner>
        <SubmitButton>Send</SubmitButton>
      </SubmitConteiner>
    </Form>
  );
};

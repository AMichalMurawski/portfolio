import React from 'react';
import {
  Email,
  Form,
  GroupFrom,
  Label,
  Message,
  Name,
  SubmitButton,
  SubmitConteiner,
} from './ContactForm.styled';

export const ContactForm: React.FC = () => {
  return (
    <Form>
      <GroupFrom>
        <Label>Name:</Label>
        <Name name="name" placeholder="Name" />
      </GroupFrom>
      <GroupFrom>
        <Label>Email:</Label>
        <Email name="email" placeholder="E-mail" />
      </GroupFrom>
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

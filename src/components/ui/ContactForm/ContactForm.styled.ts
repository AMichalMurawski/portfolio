import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 400px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Input = styled.input`
  width: 80%;
  padding: 5px;
  border-radius: 10px;
  box-shadow: inset 2px 2px 4px gray;
`;

export const Name = styled(Input).attrs({ type: 'text' })``;

export const Email = styled(Input).attrs({ type: 'email' })``;

export const Message = styled.textarea.attrs({ rows: 5 })`
  resize: none;
  width: 100%;
  padding: 5px;
  border-radius: 10px;
  box-shadow: inset 2px 2px 4px gray;
`;

export const SubmitConteiner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SubmitButton = styled.button.attrs({ type: 'submit' })`
  padding: 5px;
`;

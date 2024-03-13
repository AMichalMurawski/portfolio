import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  width: 400px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3),
    0 0 300px 25px rgba(222, 198, 162, 0.7) inset;
  border-radius: 2px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    bottom: 10px;
    width: 40%;
    height: 10px;
    box-shadow: 0 5px 14px rgba(0, 0, 0, 0.7);
    z-index: -1;
    transition: all 0.3s ease-in-out;
  }

  &::before {
    left: 15px;
    transform: skew(-5deg) rotate(-5deg);
  }

  &::after {
    right: 15px;
    transform: skew(5deg) rotate(5deg);
  }

  &:hover::before,
  &:hover::after {
    box-shadow: 0 2px 14px rgba(0, 0, 0, 0.4);
  }

  &:hover::before {
    left: 5px;
  }

  &:hover::after {
    right: 5px;
  }
`;

export const GroupFrom = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
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
  border: none;
  background-color: transparent;
  outline: none;

  &:hover,
  &:focus {
  }
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

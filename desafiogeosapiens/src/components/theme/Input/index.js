import React from 'react';

import { Container, InputContainer } from './styles';

function Input({ id, label, type, onChange}) {
  return (
    <Container key={id}>
      <label>{label}</label>
      <InputContainer type={type} onChange={onChange} id={id} />
    </Container>
  );
}

export default Input;
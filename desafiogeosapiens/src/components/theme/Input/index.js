import React from 'react';

import { Container, InputContainer, SelectContainer, Option } from './styles';

function Input({ id, label, type, onChange, options}) {
  return (
    <Container key={id}>
      <label>{label}</label>
      {type === 'select' ? (
        <SelectContainer name={id} multiple onChange={onChange} id={id}>
          {options.map(option => (
            <Option value={option}>{option}</Option>
          ))}
        </SelectContainer>
      ) : (
        <InputContainer type={type} onChange={onChange} id={id} />
      )}
    </Container>
  );
}

export default Input;
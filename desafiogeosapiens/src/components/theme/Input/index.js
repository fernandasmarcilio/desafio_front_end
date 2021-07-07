import React from 'react';

import { Container, InputContainer, SelectContainer, Option } from './styles';

function Input({ id, label, type, onChange, options}) {
  const inputsType = {
    'textfield': 'text',
    'datefield': 'date',
    'urlfield': 'url'
  }

  return (
    <Container>
      <label>{label}</label>
      {type === 'select' ? (
        <SelectContainer name={id} multiple onChange={onChange} id={id}>
          {options.map(option => (
            <Option key={option} value={option}>{option}</Option>
          ))}
        </SelectContainer>
      ) : (
        <InputContainer type={inputsType[type]} onChange={onChange} id={id} />
      )}
    </Container>
  );
}

export default Input;
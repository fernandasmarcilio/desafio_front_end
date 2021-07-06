import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
`

export const InputContainer = styled.input`
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid var(--color-secondary);
  &:focus {
    border: 1px solid var(--color-primary);
  }
`
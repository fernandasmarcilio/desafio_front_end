import styled from 'styled-components';

export const Container = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  width: 100%;
  align-self: center;
  cursor: pointer;
  color: var(--color-white);
  font: 500 16px Poppins, sans-serif;
  background: var(--color-primary);
  transition: background 0.5s;
  &:hover {
    background: var(--color-button-primary-dark);
  }
  margin-top: 8px;
`;
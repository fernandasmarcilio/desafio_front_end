import styled from 'styled-components';

export const ListContainer = styled.div`
  padding: 16px 8px;
  background: var(--color-background);
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 8px;
  transition: background 0.2s;
  &:hover {
    background: var(--color-primary-light);
  }
`;

export const Title = styled.span`
  font: 500 16px Poppins, sans-serif;
  margin-right: 8px;
`;

export const Description = styled.span`
  font: 400 16px Roboto, sans-serif;
`;

export const DetailsContainer = styled.div`
  width: 100%;
  padding: 4px 0;
`;
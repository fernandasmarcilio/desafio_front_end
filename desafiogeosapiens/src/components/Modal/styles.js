import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: var(--color-secondary-transparent);
  z-index: 1;
  position: fixed;
  display: ${({open}) => open ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
`;
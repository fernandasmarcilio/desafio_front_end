import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 16px;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: black 0px -25px 40px;
  position: absolute;
  backdrop-filter: blur(5px);
`;

export const Logo = styled.img`
  width: 150px;
`;

export const MenuContainer = styled.div`
  margin: 0 16px;
  display: flex;
  height: 100%;

`;

export const MenuLink = styled(Link)`
  font-size: 16px;
  text-decoration: none;
  color: var(--color-secondary);
  padding: 0 24px;
  display: flex;
  align-items: center;
  transition: background 0.5s;
  &:hover {
    background: var(--color-button-hover);
  }
`;
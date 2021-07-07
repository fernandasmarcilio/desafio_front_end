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
  @media(max-width: 500px) {
    height: auto;
    flex-direction: column;
    padding: 8px 0 0 0;
  }
`;

export const Logo = styled.img`
  width: 150px;
  @media(max-width: 500px) {
    margin: 8px 0;
    height: 30px;
    width: auto;
  }
`;

export const MenuContainer = styled.div`
  margin: 0 16px;
  display: flex;
  height: 100%;
  @media(max-width: 500px) {
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    height: 30px;
  }
`;

export const MenuButton = styled.div`
  height: 100%;
  display: flex;
  background-color: ${({focused}) => focused ? 'var(--color-button-hover)' : 'transparent'};
  transition: background 0.5s;
  &:hover {
    background: var(--color-button-hover);
    font-weight: 500;
  }
  @media(max-width: 500px) {
    justify-content: center;
    width: 100%;
  }
`;

export const MenuLink = styled(Link)`
  font-size: 16px;
  text-decoration: none;
  color: var(--color-secondary);
  display: flex;
  align-items: center;
  padding: 0 24px;
  @media(max-width: 500px) {
    width: 100%;
    padding: 0;
    justify-content: center;
  }
`;
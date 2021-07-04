import React from 'react';
import { Container, Logo, MenuContainer, MenuLink } from './styles';

function Header({routePath}) {

  return (
    <Container>
      <Logo src="https://coletum.com/bundles/site/assets/images/coletum-horizontal.svg?1372"/>
      <MenuContainer>
        <MenuLink focused={routePath === '/'} to="/">Home</MenuLink>
        <MenuLink focused={routePath === '/list'} to="/list">Lista</MenuLink>
      </MenuContainer>
    </Container>
  );
}

export default Header;
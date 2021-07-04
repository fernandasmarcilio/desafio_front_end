import React from 'react';
import { Container, Logo, MenuContainer, MenuLink } from './styles';

function Header() {
  return (
    <Container>
      <Logo src="https://coletum.com/bundles/site/assets/images/coletum-horizontal.svg?1372"/>
      <MenuContainer>
        <MenuLink to="/" >Home</MenuLink>
        <MenuLink to="/list" >Lista</MenuLink>
      </MenuContainer>
    </Container>
  );
}

export default Header;
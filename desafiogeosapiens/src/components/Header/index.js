import React from 'react';
import { Container, Logo, MenuContainer, MenuButton, MenuLink } from './styles';

function Header({routePath}) {

  return (
    <Container>
      <Logo src="https://coletum.com/bundles/site/assets/images/coletum-horizontal.svg?1372"/>
      <MenuContainer>
        <MenuButton focused={routePath === '/'}>
          <MenuLink  to="/">Formulário</MenuLink>
        </MenuButton>
        <MenuButton focused={routePath === '/answer'}>
          <MenuLink  to="/answer">Respostas</MenuLink>
        </MenuButton>
      </MenuContainer>
    </Container>
  );
}

export default Header;
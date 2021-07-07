import React from 'react';

import { Container } from './styles';

import { Card, Button } from '../theme';

function Modal({open = true, onClick, children}) {
  return (
    <Container open={open}>
      <Card>
        {children}
        <Button onClick={onClick}>Fechar</Button>
      </Card>
    </Container>
  );
}

export default Modal;
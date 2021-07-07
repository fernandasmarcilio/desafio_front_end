import React from 'react';

import { Container } from './styles';

function Card({children, ...props}) {
  return <Container {...props}>{children}</Container>;
}

export default Card;
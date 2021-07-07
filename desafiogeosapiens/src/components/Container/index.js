import React from 'react';

import background from '../../assets/images/background.jpeg';
import Card from '../theme/Card';
import { BackgroundContainer, Image } from './styles';

function Container({children}) {
  return (
    <BackgroundContainer>
      <Image src={background} />
      <Card>
        {children}
      </Card>
    </BackgroundContainer>
  );
}

export default Container;
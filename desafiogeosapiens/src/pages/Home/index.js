import React from 'react';

import Header from '../../components/Header';
import background from '../../assets/images/background.jpeg';

import { Container, Image, Card } from './styles';

function Home({ match }) {
  const { path } = match;

  return (
    <>
      <Header routePath={path} />
      <Container>
        <Image src={background} />
        <Card />
      </Container>
    </>
  );
}

export default Home;
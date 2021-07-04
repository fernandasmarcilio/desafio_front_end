import React from 'react';

import Header from '../../components/Header';

function Home({ match }) {
  const { path } = match;

  return (
    <Header routePath={path} />
  );
}

export default Home;
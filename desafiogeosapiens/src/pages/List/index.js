import React from 'react';

import Header from '../../components/Header';

function List({ match }) {
  const { path } = match;

  return (
    <Header routePath={path} />
  );
}

export default List;
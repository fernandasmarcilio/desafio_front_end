import React from 'react';

import Header from '../../components/Header';

function AnswerPage({ match }) {
  const { path } = match;

  return (
    <Header routePath={path} />
  );
}

export default AnswerPage;
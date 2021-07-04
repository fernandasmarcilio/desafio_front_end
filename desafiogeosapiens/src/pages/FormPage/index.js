import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { getFormStructure } from '../../services/query';

import Header from '../../components/Header';
import background from '../../assets/images/background.jpeg';
import { Button } from '../../components/theme';

import { Container, Image, Card } from './styles';

function FormPage({ match }) {
  const { path } = match;
  const [ formStructure, setFormStructure ] = useState(null);

  useEffect(() => {
    api.get('', { 
      params: { query: getFormStructure}
    }).then(({data}) => {
      setFormStructure(data.data.form_structure);
    })
  }, [])

  return (
    <>
      <Header routePath={path} />
      <Container>
        <Image src={background} />
        <Card>
          {formStructure && formStructure.map(input => (
            <label>{input.label}</label>
          ))}
          <Button onClick={() => console.log("clicado")}>Enviar</Button>
        </Card>
      </Container>
    </>
  );
}

export default FormPage;
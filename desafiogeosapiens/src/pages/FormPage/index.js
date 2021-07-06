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

  const RenderInput = (inputData) => {
    console.log(inputData);
    const {type, label, options, componentId} = inputData;
    switch (type) {
      case 'textfield':
        return (
          <>
            <label>{label}</label>
            <input />
          </>
        );
      case 'checkboxfield':
        return (
          <>
            <label>{label}</label>
            <select name={componentId} multiple>
              {options.map(option => (
                <option value={option}>{option}</option>
              ))}
            </select>
            </>
        );   
      case 'ratingfield': 
        return (
          <>
            <label>{label}</label>
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
              {[0,1,2,3,4].map(index => (
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <label>{index + 1}</label>
                  <input type="radio" name={componentId} />
                </div>
              ))}
              </div>
            </>
        );
      case 'datefield':
        return (
          <>
          <label>{label}</label>
          <input type="date" />
        </>
        )
      case 'urlfield': 
        return (
          <>
          <label>{label}</label>
          <input type="url" />
        </>
        )
      default:
        return (
          <>
            <label>{label}</label>
            <input />
          </>
        );
    }
  }

  return (
    <>
      <Header routePath={path} />
      <Container>
        <Image src={background} />
        <Card>
          {formStructure && formStructure.map(input => (
            RenderInput(input)
          ))}
          <Button onClick={() => console.log("clicado")}>Enviar</Button>
        </Card>
      </Container>
    </>
  );
}

export default FormPage;
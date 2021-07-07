import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { getFormStructure } from '../../services/query';

import Header from '../../components/Header';
import Rating from '../../components/Rating';
import background from '../../assets/images/background.jpeg';

import { Button, Loading, Input } from '../../components/theme';
import { Container, Image, Card, Form } from './styles';

function FormPage({ match }) {
  const { path } = match;
  const [ formStructure, setFormStructure ] = useState(null);
  const [ formData, setFormData ] = useState(null);
  const [ loading, setLoading ] = useState(true);

  const handleOnChange = (event) => {
    const { value, id } = event.target;

    setFormData({
      ...formData,
      [id]: value
    })
  }

  const handleOnChangeSelect = (event) => {
    const { id, selectedOptions } = event.target;
    const options = Array.from(selectedOptions, option => option.value);

    setFormData({
      ...formData,
      [id]: options
    })
  }

  const handleOnChangeRating = (value, id) => {
    setFormData({
      ...formData,
      [id]: value
    })
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log('Formulário enviado:');
    console.table(formData)
  }
  
  useEffect(() => {
    api.get('', { 
      params: { query: getFormStructure}
    }).then(({data}) => {
      setFormStructure(data.data.form_structure);
      setLoading(false);
    })
    
  }, [])

  const RenderInput = (inputData) => {
    const {type, label, options, componentId} = inputData;
    switch (type) {
      case 'checkboxfield':
        return (
          <Input type="select" id={componentId} label={label} onChange={handleOnChangeSelect} options={options} />
        );   
      case 'ratingfield': 
        return (
          <Rating label={label} id={componentId} onChange={handleOnChangeRating} />
        );
      default:
        return (
          <Input type={type} id={componentId} label={label} onChange={handleOnChange} />
        );
    }
  }

  return (
    <>
      <Header routePath={path} />
      <Container>
        <Image src={background} />
        <Card>
          {loading ? (
            <Loading />
          ) : (
            <Form onSubmit={handleOnSubmit}>
              {formStructure && formStructure.map(input => (
                RenderInput(input)
              ))}
              <Button type="submit">Enviar</Button>
            </Form>
          )}
        </Card>
      </Container>
    </>
  );
}

export default FormPage;
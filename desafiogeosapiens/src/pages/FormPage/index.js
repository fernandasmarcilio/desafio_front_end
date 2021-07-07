import React, { useEffect, useReducer } from 'react';
import api from '../../services/api';
import { getFormStructure } from '../../services/query';

import {INITIAL_STATE, ACTIONS, formReducer } from '../../reducers/form/reducer'

import { Header, Rating, Container} from '../../components';
import { Button, Loading, Input } from '../../components/theme';

import { Form } from './styles';

function FormPage({ match }) {
  const { path } = match;
  const [state, dispatch] = useReducer(
    formReducer,
    INITIAL_STATE,
  );

  const { formStructure, formData, loading } = state;

  const handleOnChange = (event) => {
    const { value, id } = event.target;
    dispatch({ type: ACTIONS.setFormData, payload: { id, value}});
  }

  const handleOnChangeSelect = (event) => {
    const { id, selectedOptions } = event.target;
    const options = Array.from(selectedOptions, option => option.value);
    dispatch({ type: ACTIONS.setFormData, payload: { id, value: options}});
  }

  const handleOnChangeRating = (value, id) => {
    dispatch({ type: ACTIONS.setFormData, payload: { id, value}});
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
      dispatch({ type: ACTIONS.setFormStructure, payload: data.data.form_structure });
    })
    
  }, [])

  const RenderInput = (inputData) => {
    const {type, label, options, componentId} = inputData;
    switch (type) {
      case 'checkboxfield':
        return (
          <Input key={componentId} type="select" id={componentId} label={label} onChange={handleOnChangeSelect} options={options} />
        );   
      case 'ratingfield': 
        return (
          <Rating key={componentId} label={label} id={componentId} onChange={handleOnChangeRating} />
        );
      default:
        return (
          <Input key={componentId} type={type} id={componentId} label={label} onChange={handleOnChange} />
        );
    }
  }

  return (
    <>
      <Header routePath={path} />
      <Container>
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
      </Container>
    </>
  );
}

export default FormPage;
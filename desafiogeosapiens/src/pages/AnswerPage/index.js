import React, { useEffect, useReducer } from 'react';
import api from '../../services/api';
import { getFormAnswer, getFormStructure } from '../../services/query';

import {INITIAL_STATE, ACTIONS, answerReducer } from '../../reducers/answer/reducer';

import { Header, Container, Modal } from '../../components';
import { Loading } from '../../components/theme';

import { ListContainer, Title, Description, DetailsContainer } from './styles';

function AnswerPage({ match }) {
  const { path } = match;
  
  const [state, dispatch] = useReducer(
    answerReducer,
    INITIAL_STATE,
  );

  const { answers, formStructure, loading, openModal, answerDetails } = state;

  const handleOnClick = (position) => {
    dispatch({ type: ACTIONS.setAnswersDetails, payload: answers[position] });
    handleOpenModal();
  }

  const handleOpenModal = () => {
    dispatch({ type: ACTIONS.openModal });
  }

  useEffect(() => {
    api.get('', { 
      params: { query: getFormAnswer }
    }).then(({data}) => {
      const answerData = data.data.answer.map(answer => answer.answer);
      dispatch({ type: ACTIONS.setAnswers, payload: answerData });
    })
  }, []);

  useEffect(() => {
    api.get('', { 
      params: { query: getFormStructure }
    }).then(({data}) => {
      const formStructureData = data.data.form_structure.map((form) => {
        return {id: form.componentId, label: form.label, type: form.type}
      });
      dispatch({ type: ACTIONS.setFormStructure, payload: formStructureData });
    })
  }, [])

  useEffect(() => {
    if(answers !== null && formStructure !== null) {
      dispatch({ type: ACTIONS.isLoaded });
    }
  }, [answers, formStructure])

  const RenderTextDescription = ({ formData }) => {
    const { id, type } = formData;
    const answerDetail = answerDetails[id];

    switch (type) {
      case 'checkboxfield':
        return answerDetail.join(', ');
      case 'datefield':
        return answerDetail.split('-').reverse().join('/');
      default:
        return answerDetail;
    }
  }

  return (
    <>
      <Modal open={openModal} onClick={handleOpenModal}>
        <>
          {formStructure && formStructure.map((form) => (
            <DetailsContainer key={form.id}>
              <Title>
                {form.label}: 
              </Title>
              {answerDetails && (
                <Description>
                  <RenderTextDescription formData={form} />
                </Description>
              )}
            </DetailsContainer>
          ))}
        </>
      </Modal>

      <Header routePath={path} />
      <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
        {answers && answers.map((answer, index) => (
          <ListContainer key={index} onClick={() => handleOnClick(index)}>{answer[formStructure[0].id]}</ListContainer>
        ))}
        </>
      )}
      </Container>
    </>
  );
}

export default AnswerPage;
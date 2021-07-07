import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { getFormAnswer, getFormStructure } from '../../services/query';

import { Header, Container, Modal } from '../../components';
import { Loading } from '../../components/theme';

import { ListContainer, Title, Description, DetailsContainer } from './styles';

function AnswerPage({ match }) {
  const { path } = match;
  const [ answers, setAnswers ] = useState(null);
  const [ formStructure, setFormStructure ] = useState(null);
  const [ loading, setLoading ] = useState(true);
  const [ openModal, setOpenModal ] = useState(false);
  const [ answerDetails, setAnswerDetails ] = useState(null);

  const handleOnClick = (position) => {
    setAnswerDetails(answers[position])
    handleOpenModal();
  }

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  }

  useEffect(() => {
    api.get('', { 
      params: { query: getFormAnswer }
    }).then(({data}) => {
      const answerData = data.data.answer.map(answer => answer.answer);
      setAnswers(answerData);
    })
  }, []);

  useEffect(() => {
    api.get('', { 
      params: { query: getFormStructure }
    }).then(({data}) => {
      const formStructureData = data.data.form_structure.map((form) => {
        return {id: form.componentId, label: form.label, type: form.type}
      });
      setFormStructure(formStructureData)
    })
  }, [])

  useEffect(() => {
    if(answers !== null && formStructure !== null) {
      setLoading(false);
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
          {formStructure && formStructure.map(form => (
            <DetailsContainer>
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
          <ListContainer onClick={() => handleOnClick(index)} >{answer[formStructure[0].id]}</ListContainer>
        ))}
        </>
      )}
      </Container>
    </>
  );
}

export default AnswerPage;
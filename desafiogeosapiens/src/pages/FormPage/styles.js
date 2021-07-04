import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  object-position: 0 70%;
  border-radius: 0 0 8px 8px;
`;

export const Card = styled.div`
  width: 60%;
  min-height: 400px;
  background-color: var(--color-white);
  border-radius: 24px;
  box-shadow: black 0px 5px 40px -30px;
  margin-top: -150px;
  display: flex;
  flex-direction: column;
  padding: 24px 16px;
`;
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
`;

export const StarsContainer =  styled.div`
  display: flex;
`;

export const Star = styled(FaStar).attrs({
  size: '24px'
})`
  margin: 0 4px;
  color: ${({full}) => full ? 'var(--color-yellow)' : 'var(--color-gray)'};
  cursor: pointer;
`;

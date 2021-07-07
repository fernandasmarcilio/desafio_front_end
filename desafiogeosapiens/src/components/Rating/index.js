import React, { useState } from 'react';

import { Container, StarsContainer, Star } from './styles';

function RatingComponent({label, id, onChange}) {
  const [ value, setValue ] = useState(0);

  const handleOnClick = (value) => {
    setValue(value);
    onChange(value, id)
  }

  const RenderStars = () => (
    [...Array(5)].map((_, index) => <Star key={`rating-${index}`} $full={index < value} value={index+1} onClick={() => handleOnClick(index + 1)} />)
  )

  return (
    <Container>
      <label>{label}</label>
      <StarsContainer>
        <RenderStars />
      </StarsContainer>
    </Container>
  );
}

export default RatingComponent;
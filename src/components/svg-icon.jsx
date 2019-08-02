import React from 'react';
import styled from 'styled-components';

const Container = styled.svg`
  ${props => {
    return { ...props.style };
  }}
`;

const SVGIcon = props => {
  const { id, style = {} } = props;
  return (
    <Container style={style}>
      <use xlinkHref={`#${id}`} />
    </Container>
  );
};

export default SVGIcon;

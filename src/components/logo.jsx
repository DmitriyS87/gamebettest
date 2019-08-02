import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: block;
  height: 48px;
  width: 209.25px;
`;

const StyledImg = styled.img`
    width: 100%;
    height: auto;
`;


const Logo = () => {
  return (
    <StyledContainer>
      <StyledImg src="./img/logo.png" alt="logo" />
    </StyledContainer>
  );
}

export default Logo;

import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: inline-block;
  height: 24px;
  width: 105px;
  margin-right: 10px;

  @media (min-width: 600px) {
    height: 48px;
    width: 209.25px;
    margin-right: 30px;
  }
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
};

export default Logo;

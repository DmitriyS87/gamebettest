import React from 'react';
import styled from 'styled-components';
import SVGIcon from '../svg/svg-icon';

const Container = styled.div`
  display: none;

  @media (min-width: 960px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    width: 45px;
    padding: 0;
    border-radius: 50%;
    background-color: #6d809a;
    margin-right: 25.5px;
  }

  @media (min-width: 1350px) {
    padding: 0 20px;
    height: 45px;
    width: auto;
    border-radius: 21px;
  }

  :hover {
    background-color: #333f51;
  }

  :focus {
    background-color: #333f51;
  }
`;

const Item = styled.div`
  display: inline-block;
  color: #ffffff;
  font-family: 'MullerMedium';
  font-size: 15px;
  line-height: 20.5px;
  cursor: pointer;
`;

const IconContainer = styled.div`
  position: relative;
  display: block;
  fill: #ffffff;
  width: 17px;
  height: 17px;
  margin: 0;

  @media (min-width: 1350px) {
    margin-right: 11px;
  }
`;

const TextContainer = styled.span`
  display: none;
  padding-right: 4.4px;

  @media (min-width: 1350px) {
    display: block;
  }
`;

const Button = () => {
  const SVGIconStyles = {
    display: 'block',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '17px',
    height: '17px',
    transform: 'translateX(-50%) translateY(-50%)',
    fillRule: 'evenodd',
    clipRule: 'evenodd'
  };

  return (
    <Container>
      <Item>
        <IconContainer>
          <SVGIcon id="cube_icon" style={SVGIconStyles} />
        </IconContainer>
      </Item>
      <Item>
        <TextContainer>Мои ставки</TextContainer>
      </Item>
    </Container>
  );
};

export default Button;

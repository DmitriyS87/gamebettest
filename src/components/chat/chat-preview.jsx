import React from 'react';
import styled from 'styled-components';
import SVGIcon from '../svg/svg-icon';

const Container = styled.div`
  position: fixed;
  cursor: pointer;
  bottom: 0;
  left: 30px;
  transform: translateY(-50%);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: transparent;

  @media (min-width: 960px) {
    bottom: auto;
    top: 50%;
    left: 0;
    width: 44.5px;
    height: 145.5px;
    border-radius: 4px;
    background-color: #ffffff;
    display: flex;
    float: left;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column-reverse;
  }
`;

const Logo = styled.div`
  margin: 0;
  transform: rotate(90deg);

  @media (min-width: 960px) {
    margin-bottom: 27.5px;
    transform: rotate(0deg);
  }
`;

const Title = styled.span`
  display: none;

  @media (min-width: 960px) {
    display: flex;
    margin-left: 16px;
    margin-right: 19.5px;
    margin-bottom: 10px;
    width: 14px;
    height: 83px;
    font-family: 'ProximaNova';
    font-size: 2.1rem;
    writing-mode: vertical-lr;
    transform: rotate(180deg);
    line-height: 1rem;
  }
`;

const ChatPreview = props => {
  const { onClick } = props;

  const logoStyles = {
    display: 'block',
    width: '20.5px',
    height: '24.5px'
  };

  return (
    <Container onClick={onClick}>
      <Logo>
        <SVGIcon id="chat_icon" style={logoStyles} />
      </Logo>
      <Title>CHAT</Title>
    </Container>
  );
};

export default ChatPreview;

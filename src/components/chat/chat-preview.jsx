import React from 'react';
import styled from 'styled-components';
import SVGIcon from '../svg-icon';

const Container = styled.div`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  width: 44.5px;
  height: 145.5px;
  border-radius: 4px;
  background-color: #ffffff;
  display: flex;
  float: left;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column-reverse;
`;

const Logo = styled.div`
  margin-bottom: 27.5px;
`;

const Title = styled.span`
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

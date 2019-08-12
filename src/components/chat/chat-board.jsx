import React from 'react';
import styled from 'styled-components';
import ChatMessage from './chat-message';
import SVGIcon from '../svg/svg-icon';

const Container = styled.div`
  width: 340px;
  height: auto;
  background-color: #ffffff;
  display: inline-block;
  overflow-y: auto;
  overflow-x: hidden;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 98px;
  border-bottom: 1px solid #f5f6f9;
  width: 100%;
  margin-bottom: 26px;
`;

const Logo = styled.div`
  margin-left: 25px;
  position: relative;
  padding: 5px;
  cursor: pointer;
`;

const Title = styled.span`
  padding-left: 11px;
  font-family: 'ProximaNova'; // Proxima Semibold
  font-size: 2.1rem;
  line-height: 2rem;
  color: #333a44;
`;

const ChatBoard = props => {
  const { onClick } = props;

  const logoStyles = {
    width: '20px',
    height: '24px',
    transform: 'rotate(90deg)'
  };

  return (
    <Container>
      <Header>
        <Logo onClick={onClick}>
          <SVGIcon id="chat_icon" style={logoStyles} />
          <Title>Чат</Title>
        </Logo>
      </Header>
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
    </Container>
  );
};

export default ChatBoard;

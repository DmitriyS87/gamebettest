import React from 'react';
import styled from 'styled-components';
import ChatMessage from './chat-message';

const Container = styled.div`
  width: 340px;
  height: auto;
  background-color: #ffffff;
  border: 1px solid black;
  display: inline-block;
  overflow-y: auto;
  overflow-x: hidden;
`;

const ChatBoard = () => {
  return (
    <Container>
      {/* <ExmpleText>here will be chat</ExmpleText> */}
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
    </Container>
  );
};

export default ChatBoard;

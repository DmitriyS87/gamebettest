import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 340px;
  height: auto;
  background: yellowgreen;
  border: 1px solid black;
  display: inline-block;
`;

const ExmpleText = styled.span`
  z-index: 50;
  padding: 100px 0;
`;

const ChatBoard = () => {
  return (
    <Container>
      <ExmpleText>here will be chat</ExmpleText>
    </Container>
  );
};

export default ChatBoard;

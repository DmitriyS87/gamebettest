import React from 'react';
import styled from 'styled-components';
import ChartBoard from './chat-board';

const Container = styled.div`
  position: absolute;
  display: block;
  top: 1px;
  left: 0;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: transparent;

  @media (min-width: 600px) {
    top: 181px;
  }
`;

const StyledChartBoard = styled(ChartBoard)`
  position: absolute;
  z-index: 50;
  left: 0;
  top: 0;
`;

const ChatScreen = props => {
  const { onClick } = props;

  const hanleOutClick = evt => {
    evt.stopPropagation();
    evt.preventDefault();
    if (evt.currentTarget === evt.target) {
      onClick();
    }
  };

  return (
    <Container onClick={hanleOutClick}>
      <StyledChartBoard onClick={onClick} />
    </Container>
  );
};

export default ChatScreen;

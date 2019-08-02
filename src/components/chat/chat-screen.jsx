import React from 'react';
import styled from 'styled-components';
import ChartBoard from './chat-board';

const Container = styled.div`
  position: relative;
  display: block;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  overvlow: auto;
  background-color: transparent;
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
      <StyledChartBoard />
    </Container>
  );
};

export default ChatScreen;

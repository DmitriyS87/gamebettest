import React from 'react';
import styled from 'styled-components';
import SVGIcon from '../svg-icon';

const Container = styled.div`
  height: 98.5px;
  width: 292px;
  display: flex;
  padding: 5px 24px;
`;

// 132 99 => 66 49.5

const AvatarBox = styled.div`
  width: 66px;
  height: 49.5px;
  margin: 0 auto;
`;

const Avatar = styled.div`
  position: relative;
  border-radius: 50%;
  background-color: black;
  width: 40px;
  height: 40px;
  overflow: hidden;
`;

const AvatarImg = styled.img`
  width: 50px;
  height: auto;
  overflow: hidden;
  object-fit: contain;
  width: 100%;
  position: absolute;
  left: 50%;
  top: 60%;
  transform: translateX(-50%) translateY(-50%);
`;

const MessageBox = styled.div``;

const TitleRow = styled.div`
  font-family: 'MullerMedium';
  font-size: 1.5rem;
  display: flex;
  justify-content: space-between;
`;

const TitleName = styled.div``;

const TitleDate = styled.div``;

const MessageRow = styled.div`
  font-family: 'MullerMedium';
  font-size: 1.4rem;
`;

const Message = styled.div``;

const ChatMessage = props => {
  const {
    message = `some interesting message from server`,
    date = String(Date()).substr(0, 16),
    user = { avatar: ``, name: `Sven Ivanov` }
  } = props;
  const { avatar, name } = user;

  return (
    <Container>
      <AvatarBox>
        <Avatar>
          <AvatarImg src="./img/user_avatar.jpg" alt="user avatar" />
        </Avatar>
      </AvatarBox>
      <MessageBox>
        <TitleRow>
          <TitleName>{name}</TitleName>
          <TitleDate>{date}</TitleDate>
        </TitleRow>
        <MessageRow>
          <Message>{message}</Message>
        </MessageRow>
      </MessageBox>
    </Container>
  );
};

export default ChatMessage;

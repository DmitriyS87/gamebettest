import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 98.5px;
  max-width: 292px;
  min-width: 250px;
  display: flex;
  margin-bottom: 25px;
  padding: 5px 5px;

  @media (min-width: 320px) {
    padding: 5px 24px;
  }
`;

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
  margin-bottom: 21px;
`;

const TitleName = styled.div`
  line-height: 1rem;
  font-size: 1.5rem;
`;

const TitleDate = styled.div`
  color: #6f7d9e;
  line-height: 1rem;
  font-size: 1.1rem;
`;

const MessageRow = styled.div`
  position: relative;
  max-width: 227px;
  height: 57.5px;
  background-color: #f8f9fb;
  border-radius: 7px;

  ::before {
    content: '';
    position: absolute;
    height: 0;
    width: 0;
    top: -7px;
    left: 1px;
    border-left: 9px solid transparent;
    border-right: 9px solid transparent;
    border-bottom: 7px solid #f8f9fb;
  }

  ::after {
    content: '';
    position: absolute;
    background: white;
    height: 7px;
    width: 9px;
    top: -7px;
    left: 1px;
  }
`;

const Message = styled.div`
  font-family: 'MullerMedium';
  font-size: 1.4rem;
  padding: 15px 35px 15.5px 21.5px;
  color: #455366;
`;

const ChatMessage = props => {
  const {
    message = `some interesting message from server`,
    date = String(Date()).substr(0, 16),
    user = { avatar: ``, name: `Sven Ivanov` }
  } = props;
  const { name } = user;

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

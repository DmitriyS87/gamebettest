import React from 'react';
import styled from 'styled-components';
import Button from './button';
import UserAvatar from './avatar';
import DepositeIcon from './deposite-icon';
import PopupMenu from './popup-menu';

const Container = styled.div`
  display: flex;
  align-items: center;
`;
const Item = styled.div``;

const TextContainer = styled.div`
  display: none;

  @media (min-width: 960px) {
    display: inline-block;
  }
`;

const Header = styled.div`
  font-family: 'MullerMedium';
  display: block;
  font-size: 16px;
  color: ${props => props.color};
`;
const SubHeader = styled.div`
  font-family: 'MullerMedium';
  display: block;
  font-size: 19px;
  color: ${props => props.color};
`;

const WrappedDepositeIcon = styled(DepositeIcon)`
  display: none;

  @media (min-width: 1350px) {
    display: block;
    margin-left: 15px;
  }

  @media (min-width: 1552px) {
    display: block;
    margin-left: 51px;
  }
`;

const WrappedPopupMenu = styled(PopupMenu)`
  display: none;

  @media (min-width: 960px) {
    display: block;
    margin-left: 19px;
    cursor: pointer;
  }
`;

const UserBlock = props => {
  const { userName = 'Виктор Павлов', userScores = '8 608.50 Р' } = props;
  return (
    <Container>
      <Item>
        <Button />
      </Item>
      <Item>
        <UserAvatar />
      </Item>
      <Item>
        <TextContainer>
          <Header color="#27303b">{userName}</Header>
          <SubHeader color="#17c06d">{userScores}</SubHeader>
        </TextContainer>
      </Item>
      <Item>
        <WrappedDepositeIcon />
      </Item>
      <Item>
        <WrappedPopupMenu />
      </Item>
    </Container>
  );
};

export default UserBlock;

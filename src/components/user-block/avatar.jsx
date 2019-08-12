import React from 'react';
import styled from 'styled-components';

const AvatarBox = styled.div`
  width: 44px;
  height: 44px;
  margin-right: 16px;
  position: relative;

  ::before {
    content: '';
    position: absolute;
    top: -7.5px;
    right: -7.5px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #f3f5f8;
  }

  ::after {
    content: '';
    position: absolute;
    top: -5px;
    right: -3.5px;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: red;
  }
`;

const Avatar = styled.div`
  position: relative;
  border-radius: 50%;
  background-color: black;
  width: 44px;
  height: 44px;
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

const UserAvatar = () => {
  return (
    <AvatarBox>
      <Avatar>
        <AvatarImg src="./img/user_avatar.jpg" alt="user avatar" />
      </Avatar>
    </AvatarBox>
  );
};

export default UserAvatar;

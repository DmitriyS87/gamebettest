import React from 'react';
import styled from 'styled-components';
import PopupMenuItem from './popup-menu-item';

const Container = styled.div`
  width: 240px;
  height: 365px;

  position: absolute;
  top: 45.5px;
  right: -25.5px;

  background-color: transparent;
  display: block;
  }

  box-shadow: 0 0 76px 0 lightgrey;
`;

const PopupPaper = styled.div`
  display: block;

  width: 100%;

  background-color: #ffffff;
  overflow: hidden;

  ::before {
    content: '';
    position: absolute;
    height: 0;
    width: 0;
    top: -10px;
    right: 21px;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 10px solid #ffffff;
  }
`;

const PopupBody = () => {
  return (
    <Container>
      <PopupPaper>
        <PopupMenuItem itemId="cube_icon" title="Мои ставки" />
        <PopupMenuItem itemId="cube_icon" title="Пополнить баланс" />
        <PopupMenuItem itemId="cube_icon" title="Вывести средства" />
        <PopupMenuItem itemId="cube_icon" title="История операций" />
        <PopupMenuItem itemId="cube_icon" title="Ввести промо-код" />
        <PopupMenuItem itemId="cube_icon" title="Настройки аккаунта" />
        <PopupMenuItem itemId="cube_icon" title="Выйти из аккаунта" primary />
      </PopupPaper>
    </Container>
  );
};

export default PopupBody;

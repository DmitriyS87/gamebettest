import React from 'react';
import styled from 'styled-components';
import SVGIcon from '../svg/svg-icon';

const Menu = styled.nav``;

const HelpIconContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 45px;
  height: 45px;
  background-color: transparent;
  border-radius: 50%;
  vertical-align: middle;
  text-align: center;
  cursor: pointer;

  div {
    background-color: #7d8ea0;
  }

  &:hover {
    background-color: #0075f3;
    div {
      background-color: transparent;
    }
  }

  &:focus {
    background-color: #0075f3;

    div {
      background-color: transparent;
    }
  }
`;

const HelpIcon = styled.div`
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 41px;
  height: 41px;
  border-radius: 50%;
`;

const List = styled.ul`
  display: inline-block;
  font-family: 'MullerBold';
  font-size: 16px;
  color: #4c5768;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    display: none;
  }

  @media (min-width: 600px) {
    li {
      display: inline-block;
    }

    li:nth-child(5) {
      display: none;
    }
  }

  @media (min-width: 960px) {
    padding-inline-start: 40px;

    li:nth-child(5) {
      display: inline-block;
    }
  }
`;

const ListItem = styled.li`
  display: inline-block;
  margin: 0;
  padding: 33.5px 10px;
  cursor: pointer;
  border: 2px solid #ffffff;

  @media (min-width: 960px) {
    padding: 33.5px 10px;
  }

  @media (min-width: 1280px) {
    margin-right: 52px;
    padding: 33.5px 5px;
  }

  :hover {
    border-bottom: 2px solid #0075f3;
  }

  :focus {
    border-bottom: 2px solid #0075f3;
  }
`;

const MainMenu = () => {
  const logoStyles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
    textAlign: 'center',
    fill: '#ffffff',
    width: '16.5px',
    height: '21px',
    fillRule: 'evenodd',
    clipRule: 'evenodd',
    verticalAlign: 'middle',
    lineHeight: '2rem'
  };

  return (
    <Menu>
      <HelpIconContainer>
        <HelpIcon>
          <SVGIcon id="headphones_icon" style={logoStyles} />
        </HelpIcon>
      </HelpIconContainer>
      <List>
        <ListItem>Ставки</ListItem>
        <ListItem>Новости</ListItem>
        <ListItem>Рейтинги</ListItem>
        <ListItem>Скидки</ListItem>
        <ListItem>Техподдержка</ListItem>
        <ListItem>Как это работает?</ListItem>
      </List>
    </Menu>
  );
};

export default MainMenu;

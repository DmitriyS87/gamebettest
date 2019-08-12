import React from 'react';
import styled from 'styled-components';
import Logo from './logo';
import MainMenu from './main-menu/main-menu';
import DotaBlock from './dota-block/dota-block';
import UserBlock from './user-block/user-block';

const HeaderRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  margin: 0;

  ${'' /* padding: 0px 115px; */}
  background-color: #ffffff;

  @media (min-width: 320px) {
    padding: 0 10px;
  }

  @media (min-width: 600px) {
  }

  @media (min-width: 960px) {
  }

  @media (min-width: 1280px) {
    padding: 0 30px;
  }

  @media (min-width: 1350px) {
  }

  @media (min-width: 1552px) {
    padding: 0 115px;
  }
`;

const Header = styled.header`
  width: 100%;
  display: block;

  div${HeaderRow} {
    border-bottom: 2px solid #eff2f5;
  }
  div${HeaderRow}:last-child {
    border: none;
  }
`;

const HeaderRowContainer = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderRowElement = styled.div`
  display: inline-block;
  position: relative;
  ${'' /* margin-right: 30px; */}
  vertical-align: middle;
`;

const PageHeader = () => {
  return (
    <Header>
      <HeaderRow>
        <HeaderRowContainer>
          <HeaderRowElement>
            <Logo />
          </HeaderRowElement>
          <HeaderRowElement>
            <DotaBlock />
          </HeaderRowElement>
        </HeaderRowContainer>
        <HeaderRowContainer>
          <HeaderRowElement>
            <UserBlock />
          </HeaderRowElement>
        </HeaderRowContainer>
      </HeaderRow>
      <HeaderRow>
        <MainMenu />
      </HeaderRow>
    </Header>
  );
};

export default PageHeader;

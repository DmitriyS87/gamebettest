import React from 'react';
import styled from 'styled-components';
import DotaIcon from './dota-icon';
import DotaInfoMessage from './dota-info-message';

const DotaContainer = styled.div`
  display: flex;
  vertical-align: middle;
`;

const DotaItem = styled.div`
  padding: 0;

  @media (min-width: 1280px) {
    padding-left: 5px;
    padding-left: 7.5px;
  }
`;

const DotaBlock = () => {
  return (
    <DotaContainer>
      <DotaItem>
        <DotaIcon />
      </DotaItem>
      <DotaItem>
        <DotaInfoMessage
          primaryColor="#2db2f0"
          lightPrimaryColor="#92cfec"
          HeaderText="Бонусы"
          SubHeaderText="Ежедневные раздачи"
        />
        <DotaInfoMessage
          primaryColor="#0656f9"
          lightPrimaryColor="#729dff"
          HeaderText="Интуиция"
          SubHeaderText="Угадывай события"
        />
      </DotaItem>
    </DotaContainer>
  );
};

export default DotaBlock;

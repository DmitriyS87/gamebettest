import React, { useState } from 'react';
import styled from 'styled-components';
import PopupIcon from './popup-icon';
import PopupBody from './popup-body';

const CrossIconWrapper = styled.div`
  display: block;
  position: relative;
`;

const PopupMenu = props => {
  const { className = '' } = props;
  const [isOpened, setOpened] = useState(false);

  const handleClick = () => {
    setOpened(!isOpened);
  };

  if (!isOpened) {
    return <PopupIcon onClick={handleClick} className={className} itemId="popup_open" />;
  }

  return (
    <React.Fragment>
      <CrossIconWrapper>
        <PopupIcon onClick={handleClick} className={className} itemId="popup_close" />
        <PopupBody />
      </CrossIconWrapper>
    </React.Fragment>
  );
};

export default PopupMenu;

import React from 'react';
import styled from 'styled-components';
import SVGIcon from '../svg/svg-icon';

const IconContainer = styled.div`
  width: 21px;
  height: 23.5px;
`;

const StyledSVGContainer = styled(SVGIcon)`
  width: 21px;
  height: 23.5px;
`;

const PopupIconOpen = props => {
  const { className = '' } = props;

  return (
    <IconContainer className={className}>
      <StyledSVGContainer id="popup_open" />
    </IconContainer>
  );
};

export default PopupIconOpen;

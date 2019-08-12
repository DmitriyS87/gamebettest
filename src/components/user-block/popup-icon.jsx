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

const PopupIcon = props => {
  const { onClick, itemId, className = '' } = props;

  return (
    <IconContainer onClick={onClick} className={className}>
      <StyledSVGContainer id={itemId} />
    </IconContainer>
  );
};

export default PopupIcon;

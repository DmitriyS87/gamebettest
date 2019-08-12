import React from 'react';
import styled from 'styled-components';
import SVGIcon from '../svg/svg-icon';

const IconContainer = styled.div`
  width: 23.5px;
  height: 23.5px;
  cursor: pointer;
`;

const StyledSVGContainer = styled(SVGIcon)`
  width: 23.5px;
  height: 23.5px;
`;

const DepositeIcon = props => {
  const { className = '' } = props;

  return (
    <IconContainer className={className}>
      <StyledSVGContainer id="plus_icon" />
    </IconContainer>
  );
};

export default DepositeIcon;

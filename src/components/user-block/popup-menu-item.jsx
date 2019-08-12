import React from 'react';
import styled from 'styled-components';
import SVGIcon from '../svg/svg-icon';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-left: 3.5px;
  padding-right: 5.5px;
  padding-top: 16px;
  padding-bottom: 15px;
  border-left: 2px solid #ffffff;
  border-bottom: 1px solid #f6f7f9;

  font-family: 'MullerMedium';
  font-size: 1.4rem;
  line-height: 2.8rem;
  font-size: 1.5rem;
  cursor: pointer;

  color: ${props => (props.primary ? '#8d99a8' : '#303441')};

  &:hover {
    fill: ${props => (props.primary ? '#ffffff' : '#0b76ff')};
    border-left: ${props => (props.primary ? '2px solid #0f1118' : '2px solid #0b76ff')};
    background-color: ${props => (props.primary ? '#0f1118' : '#ffffff')};
    color: ${props => (props.primary ? '#ffffff' : '#8d99a8')};
  }

  &:focus {
    fill: ${props => (props.primary ? '#ffffff' : '#0b76ff')};
    border-left: ${props => (props.primary ? '2px solid #0f1118' : '2px solid #0b76ff')};
    background-color: ${props => (props.primary ? '#0f1118' : '#ffffff')};
    color: ${props => (props.primary ? '#ffffff' : '#8d99a8')};
  }

  ${'' /* #0f1118 */}
`;

const StyledSVGContainer = styled(SVGIcon)`
  display: block;
  width: 17px;
  height: 17px;
  padding-left: 16px;
  padding-right: 16px;
`;

const TitleBlock = styled.div`
  width: 184px;
  display: block;
`;

const PopupMenuItem = props => {
  const {
    onClick = () => {},
    title = 'Menu item',
    itemId,
    className = '',
    primary = false
  } = props;

  return (
    <Container primary={primary} onClick={onClick} className={className}>
      <StyledSVGContainer id={itemId} />
      <TitleBlock>{title}</TitleBlock>
    </Container>
  );
};

export default PopupMenuItem;

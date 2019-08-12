import React from 'react';
import styled from 'styled-components';
import SVGIcon from '../svg/svg-icon';

const Container = styled.div`
  display: none;

  @media (min-width: 600px) {
    display: inline-flex;
    align-items: center;
    height: 88px;
    padding-right: 10px;
    padding-left: 10px;
    border-bottom: 1px solid #ffffff;
    border-right: 1px solid #eff2f5;
    cursor: pointer;
  }

  @media (min-width: 960px) {
    padding-right: 10px;
    padding-left: 10px;
  }

  @media (min-width: 1280px) {
    padding-right: 25.5px;
    padding-left: 28px;
  }

  @media (min-width: 1350px) {
    padding-right: 25.5px;
    padding-left: 28px;
  }

  @media (min-width: 1552px) {
    padding-right: 25.5px;
    padding-left: 28px;
  }

  :hover {
    border-bottom: 1px solid ${props => props.borderColor};
  }
  :focus {
    border-bottom: 1px solid ${props => props.borderColor};
  }
`;

const CircleBackground = styled.div`
  display: inline-block;
  position: relative;
  margin: 0;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  fill: #ffffff;
  background-color: ${props => props.primaryColor};

  @media (min-width: 960px) {
    margin-right: 12px;
  }
`;

const TextContainer = styled.div`
  display: none;

  @media (min-width: 960px) {
    display: inline-block;
  }
`;

const Header = styled.div`
  font-family: 'MullerBold';
  display: block;
  font-size: 16px;
  color: ${props => props.color};
  line-height: 20px;
`;

const SubHeader = styled.div`
  display: none;

  @media (min-width: 1280px) {
    font-family: 'MullerRegular';
    display: block;
    font-size: 14px;
    color: ${props => props.color};
    line-height: 20px;
  }
`;

const DotaInfo = props => {
  const { primaryColor, lightPrimaryColor, HeaderText, SubHeaderText } = props;

  const CircleIconStyles = {
    display: 'block',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
    width: '45px',
    height: '45px',
    fillRule: 'evenodd',
    clipRule: 'evenodd'
  };

  return (
    <Container borderColor={primaryColor}>
      <CircleBackground primaryColor={primaryColor}>
        <SVGIcon id="intuition_icon" style={CircleIconStyles} />
      </CircleBackground>
      <TextContainer>
        <Header color={primaryColor}>{HeaderText}</Header>
        <SubHeader color={lightPrimaryColor}>{SubHeaderText}</SubHeader>
      </TextContainer>
    </Container>
  );
};

export default DotaInfo;

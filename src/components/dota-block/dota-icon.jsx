import React from 'react';
import styled from 'styled-components';
import SVGIcon from '../svg/svg-icon';

const Dota = styled.div`
  display: block;
  position: relative;
  background-color: #2f3647;
  height: 60px;
  width: 60px;

  cursor: pointer;
  fill: #ffffff;

  &:hover {
    fill: #ff3c00;
    background-color: #12151d;
  }
  &:focus {
    fill: #ff3c00;
    background-color: #12151d;
  }

  @media (min-width: 600px) {
    height: 89px;
    width: 90px;
  }
`;

const DotaIcon = () => {
  const DotaIconStyles = {
    display: 'inline-block',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
    width: '35px',
    height: '35px',
    fillRule: 'evenodd',
    clipRule: 'evenodd'
  };

  return (
    <Dota>
      <SVGIcon id="dota_icon" style={DotaIconStyles} />
    </Dota>
  );
};

export default DotaIcon;

import { createGlobalStyle } from 'styled-components';

import MullerBold from './fonts/Fontfabric - MullerBold.otf';
import MullerExtraBold from './fonts/Fontfabric - MullerExtraBold.otf';
import MullerMedium from './fonts/Fontfabric - MullerMedium.otf';
import MullerRegular from './fonts/Fontfabric - MullerRegular.otf';
import ProximaNova from './fonts/Proxima Nova.ttf';

// Colors
export const gray1 = '#7d8ea0';
export const Btn = '#6d809a';
export const activeBtn = '#333f51';
export const menuItemText = '#4c5768';
export const popupItemText = '#303441';
export const popupActiveItem = '#0f1118';
export const activeItemText = '#ffffff';
export const userDeposite = '#17c06d';
export const userDepositeHover = '#68f1ad';
export const userDepositeText = '#ffffff';
export const userMoneyText = '#17c06d';
export const userNameText = '#27303b';
export const userStatusPhotoBg = '#f3f5f8';
export const chatBlurText = '#a0aabd';
export const chatTitleText = '#333a44';
export const chatCommentText = '#455366';
export const chatCommentDataText = '#6f7d9e';
export const chatPersonNameText = '#333a44';
export const chatPersonPhotoBg = '#06122b';

// Fonts
export const fontFamily = "'MullerRegular', sansserif";
export const fontSize = '16px';

/* eslint no-unused-expressions: 0 */
export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'MullerBold';
    src: url(${MullerBold}) format('opentype');
  }
  @font-face {
    font-family: 'MullerExtraBold';
    src: url(${MullerExtraBold}) format('opentype');
  }
  @font-face {
    font-family: 'MullerMedium';
    src: url(${MullerMedium}) format('opentype');
  }
  @font-face {
    font-family: 'MullerRegular';
    src: url(${MullerRegular}) format('opentype');
  }
  @font-face {
    font-family: 'ProximaNova';
    src: url(${ProximaNova}) format('truetype');
  }

  html {
    font-size: 62.5%;
  }

  body {
  font-size: 16px;
  font-size: 1.6rem;
  overflow: hidden;
  }

  .app {
  display: flex;
  flex-direction: column;
  background-color: ${userStatusPhotoBg};
  min-height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.header {
  display: block;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  white-space: nowrap;
  border: 0;
  clip: rect(0 0 0 0);
  -webkit-clip-path: inset(100%);
  clip-path: inset(100%);
}
`;

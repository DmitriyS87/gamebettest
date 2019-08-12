import React from 'react';
import PageHeader from './components/page-header';
import Chat from './components/chat/chat';
import SVGData from './components/svg/svg-data';
import { GlobalStyle } from './styles';

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <SVGData />
      <PageHeader />
      <main>
        <Chat />
      </main>
    </React.Fragment>
  );
};

export default App;

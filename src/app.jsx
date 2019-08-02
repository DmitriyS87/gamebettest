import React from 'react';
import Logo from './components/logo';
import Chat from './components/chat/chat';
import SVGData from './components/svg-data';
import { GlobalStyle } from './styles';

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <SVGData />
      <header className="header">
        <Logo />

        <div>CSGObet test task</div>
      </header>
      <main>
        <div style={{ maxHeight: '100vh', maxWidth: '100vw' }}>hey</div>
        <Chat />
      </main>
    </React.Fragment>
  );
};

export default App;

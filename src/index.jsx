import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './styles/normalize.css';
import './styles/styles.css';

const entryPoint = window.document.querySelector('.app');

const init = () => {
  ReactDOM.render(<App />, entryPoint);
};

init();

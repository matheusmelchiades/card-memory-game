import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import GlobalStyle from './config/styles/global';

ReactDOM.render(
  <React.StrictMode>
    <>
      <App />
      <GlobalStyle />
    </>
  </React.StrictMode>,
  document.getElementById('root')
);

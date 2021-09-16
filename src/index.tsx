import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './components/Layout/Layout';
import { GlobalStyle } from './assets/styles/GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Layout />
  </React.StrictMode>,
  document.getElementById('root')
);

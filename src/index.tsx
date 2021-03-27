import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import Black from './styles/themes';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Black}>
      <App /> 
    </ThemeProvider>
 </React.StrictMode>,
  document.getElementById('root')
);


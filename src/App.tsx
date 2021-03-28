import React from 'react';
import { GlobalStyle } from './styles/GlobalStyles';
import MainPage from './pages/MainPage';

const App:React.FC = () => {
  return(
    <>
      <GlobalStyle/>
      <MainPage/>
    </>
  )
};

export default App;

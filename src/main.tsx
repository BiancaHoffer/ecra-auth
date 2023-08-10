import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import { GlobalStyle } from "./styles/global.ts";
//import { ThemeProvider } from 'styled-components';


/*
setTimeout(() => {}, 3000);
*/


ReactDOM.createRoot(
  document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
      <GlobalStyle />
    </React.StrictMode>,
  )




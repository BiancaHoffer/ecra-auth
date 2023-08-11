import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import { GlobalStyle } from "./styles/global.ts";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import { ThemeProvider } from 'styled-components';

ReactDOM.createRoot(
  document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
      <GlobalStyle />
      <ToastContainer />
    </React.StrictMode>,
  )






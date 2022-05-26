import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Amounts from './components/Amounts';
import { BrowserRouter } from "react-router-dom";
import App from './components/Amounts';

ReactDOM.render(
   <React.StrictMode><App /></React.StrictMode>,
  // <BrowserRouter>
  //   <App />
  // </BrowserRouter>,

  document.getElementById('root')
);
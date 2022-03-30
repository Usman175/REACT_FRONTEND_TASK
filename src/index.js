import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <React.StrictMode>
      <ToastContainer position="bottom-right" autoClose={5000} style={{ zIndex: 1999 }} />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();

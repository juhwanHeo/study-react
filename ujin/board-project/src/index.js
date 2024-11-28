import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Board from './components/Board';
import reportWebVitals from './reportWebVitals';
import Accordion from './components/up-state/Accodion';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Board/>
    {/* <Accordion /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

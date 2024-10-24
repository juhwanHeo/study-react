import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Board from './components/Board';
import BoardItems from './components/BoardItems';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Board />
    <hr/>
    <BoardItems />
  </React.StrictMode>
);

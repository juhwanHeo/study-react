import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Board from './components/Board/Board';
import reportWebVitals from './reportWebVitals';
import { BoardProvider } from './components/Board/Context/BoardContext';
import Task1 from './components/week9/task1/Task1';
import Task2 from './components/week9/task2/Task2';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <BoardProvider>
      <Board/>
    </BoardProvider> */}
    <Task1 />
    <Task2 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

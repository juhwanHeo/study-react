import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Board from './component/Board';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const sampleData = [
  {
    id: 1,
    title: "title 1",
    content: "content 1",
    creator: "creator 1"  
  },
  {
    id: 2,
    title: "title 2",
    content: "content 2",
    creator: "creator 2"
  },
  {
    id: 3,
    title: "title 3",
    content: "content 3",
    creator: "creator 3"
  }
]

root.render(
  <React.StrictMode>
    <Board items={[]}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

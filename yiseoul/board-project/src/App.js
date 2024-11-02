import './App.css';
import React, {useEffect, useState} from "react";
import Board, {useRemoteItems } from "./components/board";

function App() {
  const items = [
    {seq: 1, title: 'title 1', content: 'content 1', creator: 'creator 1'},
    {seq: 2, title: 'title 2', content: 'content 2', creator: 'creator 2'},
    {seq: 3, title: 'title 3', content: 'content 3', creator: 'creator 3'},
  ]
  const remoteItems = useRemoteItems();

  return (
    <div className="App">
      <Board boardItems={items} />
      <br/>
      <Board boardItems={remoteItems} />
    </div>
  );
}

export default App;

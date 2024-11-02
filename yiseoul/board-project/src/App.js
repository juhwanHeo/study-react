import './App.css';
import React, {useEffect, useState} from "react";
import Board, {useRemoteItems } from "./components/board";

function App() {
  const remoteItems = useRemoteItems();

  return (
    <div className="App">
      <Board boardItems={remoteItems} />
    </div>
  );
}

export default App;

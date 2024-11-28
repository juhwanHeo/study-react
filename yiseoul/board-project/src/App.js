import './App.css';
import React, {useEffect, useState} from "react";
import Board, {useRemoteItems } from "./components/board";
import Accordion from "./components/up-state/Accodion";

function App() {
  const remoteItems = useRemoteItems();

  return (
    <div className="App">
      <Accordion />
      <hr/>
      <Board boardItems={remoteItems} />
    </div>
  );
}

export default App;

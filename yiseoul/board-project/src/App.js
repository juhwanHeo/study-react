import './App.css';
import React, {useEffect, useState} from "react";
import Board, {useRemoteItems } from "./components/board";
import AndItem from "./components/priority/And";
import OrItem from "./components/priority/Or";

function App() {
  const remoteItems = useRemoteItems();

  return (
    <div className="App">
      <Board boardItems={remoteItems} />
      <br/>
      <AndItem />
      <OrItem />
    </div>
  );
}

export default App;

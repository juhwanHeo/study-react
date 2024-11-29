import React from "react";
import Search from "./components/Search";
import Board from "./components/Board";
import Accordion from "./components/up-state/Accodion";
import "./App.css";

function App() {
  return (
    <div className="top">
      <Search />
      <Board />
      <Accordion />
    </div>
  );
}

export default App;

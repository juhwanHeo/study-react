import React from "react";
import { BoardProvider } from "./contexts/BoardContext";
import Board from "./components/board/Board";
import "./App.css";

function App() {
  return (
    <BoardProvider>
      <div className="top">
        <Board />
      </div>
    </BoardProvider>
  );
}

export default App;

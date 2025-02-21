import React from "react";
import { BoardProvider } from "./contexts/BoardContext";
import Board from "./components/board/Board";
import Task1 from "./components/week8/task1/Task1";
import Task2 from "./components/week8/task2/Task2";
import "./App.css";

function App() {
  return (
    <BoardProvider>
      <div className="top">
        <Board />
      </div>
      <Task1 />
      <Task2 />
    </BoardProvider>
  );
}

export default App;

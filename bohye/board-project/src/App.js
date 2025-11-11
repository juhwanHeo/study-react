import React from "react";
import { BoardProvider } from "./contexts/BoardContext";
import Board from "./components/board/Board";
import Week8Task1 from "./components/week8/task1/Task1";
import Week8Task2 from "./components/week8/task2/Task2";
import Week9Task1 from "./components/week9/task1/App";
import Week9Task2 from "./components/week9/task2/App";
import "./App.css";

function App() {
  return (
    <BoardProvider>
      <div className="top">
        <Board />
      </div>
      {/* <Week8Task1 />
      <Week8Task2 /> */}
      <Week9Task1 />
      <Week9Task2 />
    </BoardProvider>
  );
}

export default App;

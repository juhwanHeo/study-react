import React from "react";
import { RouterProvider } from "react-router-dom";
import { BoardProvider } from "./contexts/BoardContext";
import router from "./routes";
import "./App.css";

function App() {
  return (
    <BoardProvider>
      <RouterProvider router={router} />
    </BoardProvider>
  );
}

export default App;

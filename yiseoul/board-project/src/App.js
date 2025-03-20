import './App.css';
import React from 'react';
import Board, {useRemoteItems} from './components/board';
import {BoardProvider} from './components/contexts/BaordContext';
import Task1 from "./components/week8/task1/Task1";
import Task2 from "./components/week8/task2/Task2";

function App() {
  const {remoteItems, loading} = useRemoteItems();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Task1</h1>
      <Task1 />
      <hr/>
      <h1>Task2</h1>
      <Task2 />
      <hr/>
      <h1>Board</h1>
      <BoardProvider>
        <Board boardItems={remoteItems} />
      </BoardProvider>
    </>
  );
}

export default App;

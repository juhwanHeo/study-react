import './App.css';
import React from 'react';
import Board, {useRemoteItems} from './components/board';
import {BoardProvider} from './components/contexts/BaordContext';

function App() {
  const remoteItems = useRemoteItems();

  return (
    <BoardProvider>
      <Board boardItems={remoteItems} />
    </BoardProvider>
  );
}

export default App;

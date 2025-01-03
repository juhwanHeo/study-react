import './App.css';
import React from 'react';
import Board, {useRemoteItems} from './components/board';
import {BoardProvider} from './components/contexts/BaordContext';

function App() {
  const {remoteItems, loading} = useRemoteItems();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <BoardProvider>
      <Board boardItems={remoteItems} />
    </BoardProvider>
  );
}

export default App;

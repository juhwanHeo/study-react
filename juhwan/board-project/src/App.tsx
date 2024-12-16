import './App.css';
import Board from "./components/board/Board";
import { BoardProvider } from './context/BoardContext';

function App() {
  return (
    <div className="App">
      <BoardProvider>
        <Board />
      </BoardProvider>
    </div>
  );
}

export default App;

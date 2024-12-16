import './App.css';
import Board from "./components/board/Board";
import { BoardProvider } from './context/BoardContext';
import { ModalProvider } from './context/ModalContext';

function App() {
  return (
    <div className="App">
      <BoardProvider>
        <ModalProvider>
          <Board />
        </ModalProvider>
      </BoardProvider>
    </div>
  );
}

export default App;

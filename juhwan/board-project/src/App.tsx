import './App.css';
import Board from "./components/board/Board";
import Task1 from './components/week8/task1/Task1';
import Task2 from './components/week8/task2/Task2';
import { BoardProvider } from './context/BoardContext';
import { ModalProvider } from './context/ModalContext';

function App() {
  return (
    <div className="App">
      {/* <BoardProvider>
        <ModalProvider>
          <Board />
        </ModalProvider>
      </BoardProvider> */}
      <div>
        <Task1 />
      </div>
      <div>
        <Task2 />
      </div>
    </div>
  );
}

export default App;

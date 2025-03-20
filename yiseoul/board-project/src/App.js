import './App.css';
import React, { useState } from 'react';
import Board, { useRemoteItems } from './components/board';
import { BoardProvider } from './components/contexts/BaordContext';
import Task1Week8 from "./components/week8/task1/Task1";
import Task2Week8 from "./components/week8/task2/Task2";
import Task1Week9 from "./components/week9/task1/Task1";

function App() {
  const { remoteItems, loading } = useRemoteItems();
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: "week9", label: "Week9", content: () => {
        return (
            <>
              <h2>Task1</h2>
              <Task1Week9 />
              <hr />
              <h2>Task2</h2>
            </>
        )
      }
    },
    { id: "week8", label: "Week8", content: () => {
        return (
            <>
              <h2>Task1</h2>
              <Task1Week8 />
              <hr />
              <h2>Task2</h2>
              <Task2Week8 />
            </>
        )
      }
    },
    { id: "board", label: "Board", content: () => {
        return (
            <>
              <BoardProvider initialItems={ remoteItems }>
                <Board />
              </BoardProvider>
            </>
        )
      }
    }
  ];

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        {tabs.map((tab, index) => (
            <button
                key={ tab.id }
                style={{
                  backgroundColor: `${
                      activeTab === index ? "grey" : "white"
                  }`
                }}
                onClick={() => setActiveTab(index)}
            >
              {tab.label}
            </button>
        ))}
      </div>
      <div>
        {tabs.map(
            (tab, index) =>
                activeTab === index && (
                    <div key={tab.id} className="text-lg">
                      <h1>{ tab.label }</h1>
                      { tab.content() }
                    </div>
                )
        )}
      </div>
    </>
  );
}

export default App;

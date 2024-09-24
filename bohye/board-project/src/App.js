import React, { useState, useEffect } from "react";
import Board from "./components/Board";
import "./App.css";
import Create from "./components/cud/Create";

const fetchData = async () => {
  try {
    const response = await fetch("http://heojh.iptime.org:8003/board");
    const data = await response.json();
    console.log("responseData", data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const data = await fetchData();
      setItems(data);
    };

    getItems();
  }, []);

  const [isAppeared, setIsAppeared] = useState(false);
  const createAppear = () => {
    setIsAppeared(!isAppeared);
  };

  const addItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <div className="top">
      <div className="board">Board</div>
      <Board items={items} />
      {isAppeared ? (
        <Create addItem={addItem} />
      ) : (
        <button className="btn-create" onClick={createAppear}>
          Create
        </button>
      )}
    </div>
  );
}

export default App;
